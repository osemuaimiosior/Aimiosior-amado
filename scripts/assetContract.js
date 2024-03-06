const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
    const signers = await ethers.getSigners();
    const contractABI = require("../artifacts/contracts/assetContract.sol/assetContract.json");
    const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const ct = await ethers.getContractAtFromArtifact(
        contractABI,
        address
    );

try {
    var result = await ct.setItem();
    console.log(result.blockHash)

} catch (error) {
    console.log(error);
}
}

main();