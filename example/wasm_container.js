class WasmContainer
{
	txtDec;
	txtEnc;
	wasmUrl;
	memory;
	exports;
	imports;
	wasmInst;
	loaded;
	memBytes;
	memView;
	memoryAllocation;
	memoryBreak;
	wordLen;
	onLoaded;
	doOutput;
	getMemoryPointer;
	writeMemoryPointer;

	constructor(loadFrom = "", mem_min = 1, bits = 32)
	{
		var hold = this;
		this.txtEnc = new TextEncoder();
		this.txtDec = new TextDecoder();
		this.wasmUrl = loadFrom;
		this.memory = new WebAssembly.Memory({initial: mem_min});
		this.exports = {};
		this.imports =
		{
			__linear_memory: this.memory,
			consoleLog: offset => hold.generateOutput(hold.getString(offset)),
			consoleLogNumber: number => hold.generateOutput(number),
			runJS: offset => eval(hold.getString(offset)),
			malloc: function(length){ return hold.allocateMemory(length) },
			realloc: function(pointer, newsize){ return hold.reallocateMemory(pointer, newsize) },
			free: pointer => hold.freeMemory(pointer),
			memcpy: (dst, src, length) => hold.copyMemory(dst, src, length),
			memmove: (dst, src, length) => hold.copyMemory(dst, src, length)
		};
		this.wasmInst = null;
		this.loaded = false;
		this.memBytes = new Uint8Array(this.memory.buffer);
		this.memView = new DataView(this.memory.buffer);
		this.memoryAllocation =
		{
			blocks: {}, // {size: {addrs: booleans}}
			pointerOfSizes: {} // {addrs: sizes}
		};
		this.memoryBreak = 0;
		this.wordLen = bits;
		this.onLoaded = [];
		this.doOutput = text => console.log(text);
		switch(bits)
		{
		case 32:
			this.getMemoryPointer = this.getMemoryUint32;
			this.writeMemoryPointer = this.writeMemoryUint32;
			break;
		case 64:
			this.getMemoryPointer = this.getMemoryUint64;
			this.writeMemoryPointer = this.writeMemoryUint64;
			break;
		default: throw "`bits` should be 32 or 64.";
		}
	}

	generateOutput(info)
	{
		this.doOutput(info);
	}

	mergeMemoryBlocks()
	{
		var ma = this.memoryAllocation;
		var blocksize = 1;
		do
		{
			var nextSize = blocksize << 1;
			if (blocksize in ma.blocks)
			{
				var blocks = ma.blocks[blocksize];
				var addresses = Object.keys(blocks);
				addresses.sort(function(a, b) { return a - b; });
				for (var addr in addresses)
				{
					var nextAddr = addr + blocksize;
					if (addr in blocks && blocks[addr] == false &&
						nextAddr in blocks && blocks[nextAddr] == false)
					{
						delete blocks[addr];
						delete blocks[nextAddr];
						if (!(nextSize in ma.blocks)) ma.blocks[nextSize] = {};
						var nextBlocks = ma.blocks[nextSize];
						nextBlocks[addr] = false;
					}
				}
			}
			blocksize = nextSize;
		} while (blocksize && nextSize);
	}

	allocateMemory(length)
	{
		var baseAddress = this.exports.__heap_base;
		var ma = this.memoryAllocation;
		var size2n = 1;
		while (size2n < length) size2n <<= 1;
		var blocksize = size2n;
		// Loop and try to find memory block from previously freed memory blocks.
		// First find from the rounded up 2^N of length blocks, then try to find from bigger blocks.
		// If the block is a bigger block, split it into small blocks.
		do
		{
			if (blocksize in ma.blocks)
			{
				var blocks = ma.blocks[blocksize];
				for (var addr in blocks)
				{
					if (blocks[addr] == false)
					{
						// The size of the block is the exact wanted size, use it.
						if (blocksize == size2n)
						{
							blocks[addr] = true;
							ma.pointerOfSizes[addr] = size2n;
							return addr;
						}
						else // Split the bigger block into small blocks, then use the first one.
						{
							delete blocks[addr];
							while (blocksize > size2n)
							{
								blocksize >>= 1;
								ma.blocks[blocksize][addr + blocksize] = false;
							}
							ma.pointerOfSizes[addr] = size2n;
							if (!(size2n in ma.blocks)) ma.blocks[size2n] = {};
							ma.blocks[size2n][addr] = true;
							return addr;
						}
					}
				}
			}
			blocksize <<= 1;
		} while (blocksize > 0);

		// Could not reuse old blocks, try allocate from break
		var heapSize = this.memory.buffer.byteLength - baseAddress;
		var spare = heapSize - this.memoryBreak;
		if (spare < size2n)
		{
			var wantedCount = parseInt((size2n - 1) / 65536) + 1;
			generateOutput("Memory growth " + wantedCount + " pieces of 64 Kib per each.");
			try
			{
				this.memory.grow(wantedCount);
			}
			catch (error)
			{
				console.error(error);
				return 0;
			}
		}
		this.memBytes = new Uint8Array(this.memory.buffer);
		this.memView = new DataView(this.memory.buffer);
		var addr = baseAddress + this.memoryBreak;
		ma.pointerOfSizes[addr] = size2n;
		if (!(size2n in ma.blocks)) ma.blocks[size2n] = {};
		ma.blocks[size2n][addr] = true;
		this.memoryBreak += size2n;
		return addr;
	}

	freeMemory(pointer)
	{
		if (pointer == 0) return;
		var ma = this.memoryAllocation;
		var blocks = ma.blocks[ma.pointerOfSizes[pointer]];
		delete ma.pointerOfSizes[pointer];
		blocks[pointer] = false;
		this.mergeMemoryBlocks();
	}

	reallocateMemory(pointer, newsize)
	{
		if (pointer == 0) return this.allocateMemory(newsize);
		if (newsize == 0) return this.freeMemory(pointer);
		var ma = this.memoryAllocation;
		var newsize2n = 1;
		while (newsize2n < newsize) newsize2n <<= 1;
		var oldsize2n = ma.pointerOfSizes[pointer];
		if (newsize2n == oldsize2n) return pointer;
		this.freeMemory(pointer);
		var newPointer = this.allocateMemory(newsize2n);
		if (newPointer != pointer)
		{
			this.copyMemory(newPointer, pointer, oldsize2n);
		}
		return newPointer;
	}

	copyMemory(dst, src, length)
	{
		if (dst == src) return;
		if (dst < src)
		{
			for(var i = 0; i < length; i++)
			{
				this.memBytes[dst + i] = this.memBytes[src + i];
			}
		}
		else
		{
			var i = length;
			while(i --> 0)
			{
				this.memBytes[dst + i] = this.memBytes[src + i];
			}
		}
	}

	getString(offset, lengthlimit)
	{
		var i = 0;
		if (lengthlimit === undefined) lengthlimit = 256;
		while(this.memBytes[offset + i] && i < lengthlimit) i++;
		return this.txtDec.decode(this.getMemoryBytes(offset, i));
	}

	getStringArray(pointerArrayPointer, count)
	{
		var stringPointers = this.getMemoryPointer(pointerArrayPointer, count);
		var ret = [];
		for(var i in stringPointers)
		{
			var pointer = stringPointers[i];
			ret.push(this.getString(pointer));
		}
		return ret;
	}

	writeMemory(offset, buffer)
	{
		var srcarr = new Uint8Array(buffer);
		var writelen = srcarr.length;
		for(var i = 0; i < writelen; i++)
		{
			this.memBytes[offset + i] = srcarr[i];
		}
		return writelen;
	}

	writeMemoryInt8(offset, val)
	{
		this.memView.setInt8(offset, val, true);
	}

	writeMemoryUint8(offset, val)
	{
		this.memView.setUint8(offset, val, true);
	}

	writeMemoryInt16(offset, val)
	{
		this.memView.setInt16(offset, val, true);
	}

	writeMemoryUint16(offset, val)
	{
		this.memView.setUint16(offset, val, true);
	}

	writeMemoryInt32(offset, val)
	{
		this.memView.setInt32(offset, val, true);
	}

	writeMemoryUint32(offset, val)
	{
		this.memView.setUint32(offset, val, true);
	}

	writeMemoryInt64(offset, val)
	{
		this.memView.setBigInt64(offset, val, true);
	}

	writeMemoryUint64(offset, val)
	{
		this.memView.setBigUint64(offset, val, true);
	}

	writeMemoryFloat32(offset, val)
	{
		this.memView.setFloat32(offset, val, true);
	}

	writeMemoryFloat64(offset, val)
	{
		this.memView.setFloat64(offset, val, true);
	}

	writeString(offset, bufSize, string)
	{
		console.assert(bufSize);
		var srcarr = this.txtEnc.encode(string);
		var writelen = srcarr.byteLength;
		if (writelen > bufSize - 1) writelen = bufSize - 1;
		for(var i = 0; i < writelen; i++)
		{
			this.memBytes[offset + i] = srcarr[i];
		}
		this.memBytes[offset + i] = 0;
		return writelen;
	}

	loadWasm(loadFrom = "")
	{
		var wasmUrl = loadFrom;
		if (this.wasmUrl) wasmUrl = this.wasmUrl;
		else this.wasmUrl = wasmUrl;
		return WebAssembly.instantiateStreaming(fetch(wasmUrl), {env: this.imports})
		.then(result => {
			this.wasmInst = result.instance;
			this.exports = this.wasmInst.exports;
			this.memory = this.exports["memory"];
			this.memBytes = new Uint8Array(this.memory.buffer);
			this.memView = new DataView(this.memory.buffer);
			this.loaded = true;
			for (var i in this.onLoaded) this.onLoaded[i]();
		});
	}

	importFunction(symbol, callable)
	{
		console.assert(this.loaded == false);
		this.imports[symbol] = callable;
	}

	addOnLoadedFunction(callable)
	{
		console.assert(this.loaded == false);
		this.onLoaded.push(callable);
	}

	getMemoryBytes(pointer, count)
	{
		return new Uint8Array(this.memory.buffer.slice(pointer, pointer + count));
	}

	getMemory(pointer, size)
	{
		return this.memory.buffer.slice(pointer, pointer + size);
	}

	getMemoryInt32(pointer, count)
	{
		return new Int32Array(this.getMemoryBytes(pointer, count * 4).buffer);
	}

	getMemoryUint32(pointer, count)
	{
		return new Uint32Array(this.getMemoryBytes(pointer, count * 4).buffer);
	}

	getMemoryFloat32(pointer, count)
	{
		return new Float32Array(this.getMemoryBytes(pointer, count * 4).buffer);
	}

	getMemoryFloat64(pointer, count)
	{
		return new Float64Array(this.getMemoryBytes(pointer, count * 8).buffer);
	}

	getMemoryInt64(pointer, count)
	{
		return new BigInt64Array(this.getMemoryBytes(pointer, count * 8).buffer);
	}

	getMemoryUint64(pointer, count)
	{
		return new BigUint64Array(this.getMemoryBytes(pointer, count * 8).buffer);
	}
};
