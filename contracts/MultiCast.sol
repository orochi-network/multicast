// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.7;

import './Bytes.sol';

contract MultiCast {
  using Bytes for bytes;

  struct MulticastResult {
    bool success;
    bytes result;
  }

  struct EvmState {
    uint256 blockNumber;
    bytes32 blockHash;
    bytes32 previousBlockHash;
    address coinbase;
    uint256 difficulty;
    uint256 gaslimit;
    uint256 timestamp;
  }

  function cast(bytes calldata input) public returns (MulticastResult[] memory returnData) {
    uint256 numberOfPayload = input.readUint(0, 16);
    address target;
    uint256 length;
    uint256 offset = 2;
    returnData = new MulticastResult[](numberOfPayload);
    for (uint256 i = 0; i < numberOfPayload; i += 1) {
      target = input.readAddress(offset);
      offset += 20;
      length = input.readUint(offset, 16);
      offset += 2;
      (bool success, bytes memory ret) = target.call(input[offset:offset + length]);
      returnData[i] = MulticastResult({ success: success, result: ret });

      offset += length;
    }
  }

  function state() public view returns (EvmState memory) {
    return
      EvmState({
        blockNumber: block.number,
        blockHash: blockhash(block.number),
        previousBlockHash: blockhash(block.number - 1),
        coinbase: block.coinbase,
        difficulty: block.difficulty,
        gaslimit: block.gaslimit,
        timestamp: block.timestamp
      });
  }

  function eth(bytes memory addresses) public view returns (bytes memory balances) {
    assembly {
      let total := div(mload(addresses), 0x14)
      let length := mul(total, 0x20)
      balances := mload(0x40)
      mstore(balances, mul(total, 0x20))

      let retOffset := add(balances, 0x20)
      let srcOffset := add(addresses, 0x20)
      for {
        let i := 0
      } lt(i, total) {
        i := add(i, 1)
      } {
        mstore(add(retOffset, mul(i, 0x20)), balance(shr(96, mload(add(srcOffset, mul(i, 0x14))))))
      }
      mstore(0x40, add(retOffset, length))
    }
  }
}
