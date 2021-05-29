# Mega_Link - a simple and intuitive application using Chainlink

<br/>
<p align="center">
<a href="https://chain.link" target="_blank">
<img src="/home/luisca/Pictures/2021-05-28_16-15.png" width="225" alt="Chainlink logo">
</a>
</p>
<br/>

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

For deploying to the kovan network, Truffle will use `truffle-hdwallet-provider` for your mnemonic and an RPC URL. Set your environment variables `$RPC_URL` and `$MNEMONIC` before running:

```bash
export RPC_URL='https://kovan.infura.io/v3/YOUR_PROJECT_ID'
export MNEMONIC='YOUR_12_SECRET_METAMASK'

truffle migrate --network kovan --reset
```

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
