const hre = require("hardhat");

async function main() {
  
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();

  console.log(
    `Marketplace deployed address are ${marketplace.address}`
  );

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(marketplace.address);

  await myToken.deployed();

  console.log(
    `MyToken deployed address are ${myToken.address}`
  );

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
