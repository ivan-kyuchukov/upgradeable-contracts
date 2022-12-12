const { ethers, upgrades } = require("hardhat");

const UPGRADEABLE_PROXY = "0xf8b4A81bD3cE77d266FD138db66EA4f437480F7c";

async function main() {
  const gas = await ethers.provider.getGasPrice();
  const V2Contract = await ethers.getContractFactory("V2");
  console.log("Upgrading V1Contract...");
  let upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V2Contract, {
    gasPrice: gas,
  });
  console.log("V1 Upgraded to V2");
  console.log("V2 Contract Deployed To:", upgrade.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
