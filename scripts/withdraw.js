//const { assert, expect } = require("chai");
const { ethers, getNamedAccounts, network } = require("hardhat");
//const { developmentChains } = require("../../helper-hardhat-config");

async function main() {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log(`Withdrawing from ${fundMe.address}`);
  const transactionResponse = await fundMe.withdraw();
  await transactionResponse.wait(1);
  console.log("Withdrawed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
