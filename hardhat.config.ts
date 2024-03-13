/* eslint-disable global-require */
import { HardhatUserConfig } from 'hardhat/types';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-ethers';
import { env } from './env';

if (env.DUELIST_KING_LOCAL_MNEMONIC !== 'baby nose young alone sport inside grain rather undo donor void exotic') {
  require('./tasks/deploy-multicast');
}

const compilers = ['0.8.19'].map((item: string) => ({
  version: item,
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
}));

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    fantom: {
      url: env.DUELIST_KING_FANTOM_RPC,
      chainId: 250,
      accounts: {
        mnemonic: env.DUELIST_KING_FANTOM_MNEMONIC,
        path: "m/44'/60'/0'/0",
      },
    },
    binance: {
      url: env.DUELIST_KING_BINANCE_RPC,
      chainId: 56,
      accounts: {
        mnemonic: env.DUELIST_KING_BINANCE_MNEMONIC,
        path: "m/44'/60'/0'/0",
      },
    },
    testnet: {
      url: env.DUELIST_KING_TESTNET_RPC,
      // Fantom testnet
      chainId: 4002,
      accounts: {
        mnemonic: env.DUELIST_KING_TESTNET_MNEMONIC,
        path: "m/44'/60'/0'/0",
      },
    },
    local: {
      url: env.DUELIST_KING_LOCAL_RPC,
      chainId: 911,
      accounts: {
        mnemonic: env.DUELIST_KING_LOCAL_MNEMONIC,
        path: "m/44'/60'/0'/0",
      },
    },
    // Hardhat network
    hardhat: {
      chainId: 911,
      hardfork: 'london',
      blockGasLimit: 30000000,
      initialBaseFeePerGas: 0,
      gas: 25000000,
      accounts: {
        mnemonic: env.DUELIST_KING_LOCAL_MNEMONIC,
        path: "m/44'/60'/0'/0",
      },
    },
  },
  solidity: {
    compilers,
  },
};

export default config;
