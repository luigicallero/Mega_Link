require('babel-register')
require('babel-polyfill')
const HDWalletProvider = require('@truffle/hdwallet-provider')

require('dotenv').config()
const mnemonic = process.env.mnemonic
const rpc_url = process.env.rpc_url

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    live: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.KOVAN_RPC_URL)
      },
      network_id: '*',
      // ~~Necessary due to https://github.com/trufflesuite/truffle/issues/1971~~
      // Necessary due to https://github.com/trufflesuite/truffle/issues/3008
      skipDryRun: true,
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(mnemonic, url)
      },
      network_id: '42',
      skipDryRun: true
    },
    matic: {
      // Public Mumbai RPC addresses
      //provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      //provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`), // worked fine on 2021-07-02
      //network_id: 80001, // to be used with Public Polygon Mumbai rpc
      
      // Infura Mumbai RPC address
      provider: () => new HDWalletProvider(mnemonic, rpc_url),
      network_id: 42, // to be used for Infura Polygon Mumbai rpc
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg",
      version: "0.6.6"
    }
  }
}
