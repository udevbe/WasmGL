
function updateMemoryHexView(containerElement, wc, maxsize)
{
	var rowPtr = 0;
	var rowAllZeroPrompted = false;
	var innerHTML = "<b>Memory dump: size of 0x" + wc.memBytes.length.toString(16) + " bytes in total.</b><br><table><thead><tr align='left'><th>Offset</th><th>00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F</th><th>ASCII</th></tr></thead><tbody>";
	if (maxsize === undefined) maxsize = wc.memBytes.length;
	for(;rowPtr < maxsize; rowPtr += 16)
	{
		var rowArr = wc.memBytes.subarray(rowPtr, rowPtr + 16);
		var rowIsAllZero = true;
		var rowHex = ""
		var rowChr = ""
		for(var i = 0; i < rowArr.length; i++)
		{
			var bv = rowArr[i];
			if (bv != 0) rowIsAllZero = false;
			rowHex += ("0" + bv.toString(16)).slice(-2).toUpperCase() + " ";
			if (bv >= 20 && bv <= 127) rowChr += String.fromCharCode(bv);
			else rowChr += '.';
		}
		if (rowIsAllZero)
		{
			if (!rowAllZeroPrompted)
			{
				innerHTML += "<tr><td>" + ("00000000" + rowPtr.toString(16)).slice(-8).toUpperCase() + ":</td><td>...</td><td>...</td></tr>";
				rowAllZeroPrompted = true;
			}
		}
		else
		{
			rowAllZeroPrompted = false;
			innerHTML += "<tr><td>" + ("00000000" + rowPtr.toString(16)).slice(-8).toUpperCase() + ":</td><td>" + rowHex + "</td><td>" + rowChr + "</td></tr>";
		}
	}
	innerHTML += "</tbody></table>";
	containerElement.innerHTML = innerHTML;
}

function initOutputView(containerElement, wc, size)
{
	var outputElement = document.createElement("select");
	outputElement.id = "WasmDebugOutputView";
	outputElement.size = 16;
	outputElement.style = "width: 100%; white-space: pre;";
	containerElement.appendChild(outputElement);
	wc.outputElement = outputElement;
	var prevOutputMethod = wc.doOutput;
	wc.doOutput = function(text)
	{
		prevOutputMethod(text);
		var lines = text.split("\n");
		for(var i in lines)
		{
			var itemElement = document.createElement("option");
			if (i == 0)
			{
				itemElement.innerHTML = lines[i];
			}
			else
			{
				itemElement.innerHTML = lines[i];
				itemElement.setAttribute("disabled", "disabled");
				itemElement["style"] = "font-style:italic; text-indent: 20px;";
			}
			outputElement.appendChild(itemElement);
		}
	};
}

function updateExportView(containerElement, wc)
{
	var exportsElement = document.createElement("div");
	exportsElement.id = "WasmDebugExportView";
	exportsElement.size = 16;
	exportsElement.style = "width: 100%";
	var functionsElement = document.createElement("select");
	var globalVarsElement = document.createElement("select");
	var globalVarValue = document.createElement("div");
	var othersElement = document.createElement("select");
	functionsElement.size = 4;
	globalVarsElement.size = 4;
	othersElement.size = 4;
	functionsElement.style = "width: 100%";
	globalVarsElement.style = "width: 100%";
	othersElement.style = "width: 100%";
	for(var i in wc.exports)
	{
		var itemElement = document.createElement("option");
		itemElement.value = i;
		if (typeof wc.exports[i] == "function")
		{
			itemElement.innerHTML = i + " (" + wc.exports[i].length + " params)";
			functionsElement.appendChild(itemElement);
		}
		else if ("value" in wc.exports[i])
		{
			itemElement.innerHTML = i + "(Address: 0x" + wc.exports[i].value.toString(16) + ")";
			globalVarsElement.appendChild(itemElement);
		}
		else
		{
			itemElement.innerHTML = i;
			othersElement.appendChild(itemElement);
		}
	}
	globalVarsElement.onchange = function()
	{
		var selectedValue = globalVarsElement.options[globalVarsElement.selectedIndex].value;
		if (selectedValue in wc.exports)
		{
			var gv = wc.exports[selectedValue];
			globalVarValue.innerHTML = "<b>Value: 0x" + wc.getMemoryUint32(gv.value, 1)[0].toString(16) + "</b>";
		}
	}
	var createHeader = function(level, text)
	{
		var headerElement = document.createElement("h" + level);
		headerElement.innerHTML = text;
		return headerElement;
	}
	exportsElement.appendChild(createHeader(3, "Functions:"));
	exportsElement.appendChild(functionsElement);
	exportsElement.appendChild(createHeader(3, "Global Variables:"));
	exportsElement.appendChild(globalVarsElement);
	exportsElement.appendChild(globalVarValue);
	exportsElement.appendChild(createHeader(3, "Others:"));
	exportsElement.appendChild(othersElement);
	containerElement.appendChild(exportsElement);
}
