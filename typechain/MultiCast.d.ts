/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MultiCastInterface extends ethers.utils.Interface {
  functions: {
    "cast(bytes)": FunctionFragment;
    "eth(bytes)": FunctionFragment;
    "state()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "cast", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "eth", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cast", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;

  events: {};
}

export class MultiCast extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: MultiCastInterface;

  functions: {
    cast(input: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

    "cast(bytes)"(
      input: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    eth(
      addresses: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { balances: string }>;

    "eth(bytes)"(
      addresses: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { balances: string }>;

    state(
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
          blockNumber: BigNumber;
          blockHash: string;
          previousBlockHash: string;
          coinbase: string;
          difficulty: BigNumber;
          gaslimit: BigNumber;
          timestamp: BigNumber;
        }
      ]
    >;

    "state()"(
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
          blockNumber: BigNumber;
          blockHash: string;
          previousBlockHash: string;
          coinbase: string;
          difficulty: BigNumber;
          gaslimit: BigNumber;
          timestamp: BigNumber;
        }
      ]
    >;
  };

  cast(input: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  "cast(bytes)"(
    input: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  eth(addresses: BytesLike, overrides?: CallOverrides): Promise<string>;

  "eth(bytes)"(
    addresses: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  state(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
      blockNumber: BigNumber;
      blockHash: string;
      previousBlockHash: string;
      coinbase: string;
      difficulty: BigNumber;
      gaslimit: BigNumber;
      timestamp: BigNumber;
    }
  >;

  "state()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
      blockNumber: BigNumber;
      blockHash: string;
      previousBlockHash: string;
      coinbase: string;
      difficulty: BigNumber;
      gaslimit: BigNumber;
      timestamp: BigNumber;
    }
  >;

  callStatic: {
    cast(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<([boolean, string] & { success: boolean; result: string })[]>;

    "cast(bytes)"(
      input: BytesLike,
      overrides?: CallOverrides
    ): Promise<([boolean, string] & { success: boolean; result: string })[]>;

    eth(addresses: BytesLike, overrides?: CallOverrides): Promise<string>;

    "eth(bytes)"(
      addresses: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    state(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        blockHash: string;
        previousBlockHash: string;
        coinbase: string;
        difficulty: BigNumber;
        gaslimit: BigNumber;
        timestamp: BigNumber;
      }
    >;

    "state()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
        blockNumber: BigNumber;
        blockHash: string;
        previousBlockHash: string;
        coinbase: string;
        difficulty: BigNumber;
        gaslimit: BigNumber;
        timestamp: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    cast(input: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "cast(bytes)"(input: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    eth(addresses: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "eth(bytes)"(
      addresses: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    "state()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cast(
      input: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cast(bytes)"(
      input: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    eth(
      addresses: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "eth(bytes)"(
      addresses: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "state()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
