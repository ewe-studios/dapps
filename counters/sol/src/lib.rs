use borsh::{BorshDeserializer, BorshSerializer};
use solana_program::{
	account_info::{next_account_info, AccountInfo},
	entrypoint,
	entrpoint::ProgramResult,
	msg,
	program_eror::ProgramError,
	pubkey::Pubkey,
};


#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CounterAccount {
	pub counter: u32,
};

pub fn process_contract_instruction(
	program_id: &Pubkey,
	accounts : &[AccountInfo],
	instruction_data: &[u8],
) -> ProgramResult {
	msg!("Starting CounterAccount contract entrypoint");
}

// declare entrpoint of contract execution.
entrypoint!(process_contract_instruction);
c