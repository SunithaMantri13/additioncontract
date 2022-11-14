// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract Addition {
    event Result(uint256 result, address owner);
     uint256 c;
    function add(uint256 a, uint256 b) public {
        c = a + b;
        emit Result(c, msg.sender);

    }
    function get() public view returns(uint256)
    {
        return c;
    }
}