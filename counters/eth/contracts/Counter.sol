//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Counter {
    address public owner;
    uint private count;

    event IncrementedCounter(address indexed, uint, uint);

    constructor(){
        count = 0;
        owner = msg.sender;
    }

    modifier isOwner {
        require(msg.sender == owner, "contract only be called by creator/owner");
        _;
    }

    function getCount() public view returns (uint) {
        return count;
    }

    function increment() public isOwner {
        uint currentCount = count;
        uint nextCount = currentCount + 1;
        count = nextCount;
        emit IncrementedCounter(msg.sender, currentCount, nextCount);
    }
}
