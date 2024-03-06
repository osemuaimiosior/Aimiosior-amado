const hre = require("hardhat");

async function main() {
    const MyContract = await hre.ethers.getContractFactory("assetContract");
    const myContract = await MyContract.deploy();
    
    await myContract.waitForDeployment();
    console.log("Contract address: ", myContract.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
