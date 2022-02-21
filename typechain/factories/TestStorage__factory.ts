/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestStorage } from "../TestStorage";

export class TestStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestStorage> {
    return super.deploy(overrides || {}) as Promise<TestStorage>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestStorage {
    return super.attach(address) as TestStorage;
  }
  connect(signer: Signer): TestStorage__factory {
    return super.connect(signer) as TestStorage__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestStorage {
    return new Contract(address, _abi, signerOrProvider) as TestStorage;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101e4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063693ec85e1461003b5780638a42ebe914610060575b600080fd5b61004e610049366004610110565b610075565b60405190815260200160405180910390f35b61007361006e366004610152565b61009f565b005b600080838360405161008892919061019e565b908152602001604051809103902054905092915050565b80600084846040516100b292919061019e565b90815260405190819003602001902055505050565b60008083601f8401126100d957600080fd5b50813567ffffffffffffffff8111156100f157600080fd5b60208301915083602082850101111561010957600080fd5b9250929050565b6000806020838503121561012357600080fd5b823567ffffffffffffffff81111561013a57600080fd5b610146858286016100c7565b90969095509350505050565b60008060006040848603121561016757600080fd5b833567ffffffffffffffff81111561017e57600080fd5b61018a868287016100c7565b909790965060209590950135949350505050565b818382376000910190815291905056fea2646970667358221220ecb37118cc5409562dc8529c6d6544831db1454978b3feaa8e665ebe1ecc0f1b64736f6c63430008070033";
