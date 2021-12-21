const {ethers} = require("hardhat");
async function main() {
  const NFT = await ethers.getContractFactory("MyNFT");
  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const [owner] = await ethers.getSigners()
  console.log("Owner:", owner.address);
  const uri = await contract.tokenURI(1);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});