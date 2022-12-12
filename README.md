# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat node
npx hardhat run scripts/deploy.js
npx hardhat run --network mumbai scripts/deployV1.js
npx hardhat verify --contract "contracts/contractV1.sol:V1" {YOUR_DEPLOYED_V1_ADDRESS} --network mumbai
npx hardhat run scripts/upgradeV1.js --network mumbai

npx hardhat verify --contract "contracts/contractV2.sol:V2" {YOUR_DEPLOYED_V2_ADDRESS} --network mumbai
```
