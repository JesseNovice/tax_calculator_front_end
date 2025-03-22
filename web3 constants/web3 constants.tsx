import { ethers } from "ethers";

let contract_address = "0xDf74eaDB04c7E0C0196c03B7EEBbdcb098Fc2DEf";
let contract_abi = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVaultBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nzdd_token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"taxPerUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawMyFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}]

// Get the contract instance using a provider or signer
export const getVaultContract = async (signerOrProvider: ethers.Signer | ethers.Provider) => {
  return new ethers.Contract(contract_address, contract_abi, signerOrProvider);
}