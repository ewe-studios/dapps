solana_contract=$(pwd)

build-sol:
	cargo build-bpf --manifest=${pwd}/Cargo.toml --bpf-out-dir=dist/program

test-sol:
	cargo test-bpf --manifest=${solana_contract}/Cargo.toml

clean-sol:
	cargo clean --manifest=./Cargo.toml && rm -rf dist/program
