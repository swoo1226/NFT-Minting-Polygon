const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = `ipfs://${process.env.METADATA_CID}`
  const WALLET_ADDRESS = process.env.WALLET_ADDRESS
  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});