const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");

  const deployedMultiSigWalletContract = await MultiSigWallet.deploy();

  await deployedMultiSigWalletContract.deployed();

  console.log("MultiSigWallet Contract Address:", deployedMultiSigWalletContract.address);

  console.log("Sleeping.....");
  await sleep(40000);

  await hre.run("verify:verify", {
    address: deployedMultiSigWalletContract.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
