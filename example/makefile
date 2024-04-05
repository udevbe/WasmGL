CC=clang
LD=wasm-ld
CFLAGS=-O3 --target=wasm32 -flto --no-standard-libraries -Iinclude
LDFLAGS=--no-entry --export-all --allow-undefined

all: program.wasm

program.wasm: test.o
	$(LD) $(LDFLAGS) $^ -o $@
