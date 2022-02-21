// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.4 <0.9.0;
pragma abicoder v2;

library Bytes {
  // Read address from input bytes buffer
  function readAddress(bytes memory input, uint256 offset) internal pure returns (address result) {
    assembly {
      result := shr(96, mload(add(add(input, 0x20), offset)))
    }
  }

  // Read uint from input bytes buffer
  function readUint(
    bytes memory input,
    uint256 offset,
    uint256 bits
  ) internal pure returns (uint256 result) {
    assembly {
      result := shr(sub(256, bits), mload(add(add(input, 0x20), offset)))
    }
  }
}
