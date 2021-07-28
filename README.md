# Mega_Link - a simple and intuitive application using Chainlink running on Polygon (previously Matic)
- Awarded by Chainlink in Hackathon 0XHACK 2021: https://blog.chain.link/0xhack-2021-chainlink-bounty-winners/
- https://www.youtube.com/watch?v=JGAwpaw__CE

## Comments
This project is based on the chainlink_defi project:
git clone https://github.com/PatrickAlphaC/chainlink_defi

## Requirements

- NPM

## Installation

1. Install truffle

```bash
npm install truffle -g
```

2. Setup repo

```bash
mkdir MyChainlinkProject
cd MyChainlinkProject/
```

3. Copy from Repossitory

```bash
git clone xxxx
```

4. Install dependencies by running:

```bash
npm install
```

## Deploy

For deploying to the Polygon test network (Mumbai), Truffle will use `truffle-hdwallet-provider` for your mnemonic and an RPC URL. Set your environment variables `$RPC_URL` and `$MNEMONIC` before running and make sure you have enough MATICs in your wallet (0.3 Matics should be fine; Matic Faucet: https://faucet.matic.network):

```bash
export rpc_url='https://kovan.infura.io/v3/YOUR_PROJECT_ID'
export mnemonic='YOUR_12_SECRET_METAMASK'

truffle migrate --network kovan --reset
```
## Troubleshooting
If you face any socket issues during deployment on Mumbai testnet try with a different testnet RPC as seen in documentation:
https://docs.matic.network/docs/develop/network-details/network

## Helper Scripts

There are 3 helper scripts provided with this box in the scripts directory:

- `fund-contract.js`
- `request-data.js`
- `read-contract.js`

In addition, for working with Chainlink Price Feeds and ChainlinkVRF there are folders respectively. 

They can be used by calling them from `npx truffle exec`, for example:

```bash
npx truffle exec scripts/fund-contract.js --network kovan
```

The CLI will output something similar to the following:

```
Using network 'kovan'.

Funding contract: 0x972DB80842Fdaf6015d80954949dBE0A1700705E
0xd81fcf7bfaf8660149041c823e843f0b2409137a1809a0319d26db9ceaeef650
Truffle v5.0.25 (core: 5.0.25)
Node v10.16.3
```

In the `request-data.js` script, example parameters are provided for you. You can change the oracle address, Job ID, and parameters based on the information available on [our documentation](https://docs.chain.link/docs/decentralized-oracles-ethereum-mainnet/#testnets).

```bash
npx truffle exec scripts/request-data.js --network kovan
```

This creates a request and will return the transaction ID, for example:

```
Using network 'kovan'.

Creating request on contract: 0x972DB80842Fdaf6015d80954949dBE0A1700705E
0x828f256109f22087b0804a4d1a5c25e8ce9e5ac4bbc777b5715f5f9e5b181a4b
Truffle v5.0.25 (core: 5.0.25)
Node v10.16.3
```

After creating a request on a kovan network, you will want to wait 3 blocks for the Chainlink node to respond. Then call the `read-contract.js` script to read the contract's state.

```bash
npx truffle exec scripts/read-contract.js --network kovan
```

Once the oracle has responded, you will receive a value similar to the one below:

```
Using network 'kovan'.

21568
Truffle v5.0.25 (core: 5.0.25)
Node v10.16.3
```

## TODO

- Add tests for ChainlinkVRF
- Add tests for Chainlink Price Feeds
- Refactor tests to use this instead of defining contracts with let
- Use the Chainlink-published mocks for [MockV3Aggregator](https://github.com/smartcontractkit/chainlink/blob/develop/evm-contracts/src/v0.6/tests/MockV3Aggregator.sol) and [VRFCoordinatorMock](https://github.com/smartcontractkit/chainlink/blob/develop/evm-contracts/src/v0.6/tests/VRFCoordinatorMock.sol)
