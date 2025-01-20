// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

/// @title Time-locked Wallet Contract
/// @notice This contract demonstrates a simple time-locked wallet where funds can only be withdrawn after a specified time
/// @dev Uses block.timestamp for time calculations and basic access control
contract Lock {
    /// @notice The timestamp after which the funds can be withdrawn
    /// @dev Stored as Unix timestamp
    uint public unlockTime;
    
    /// @notice The address that can withdraw the funds
    /// @dev Set during contract deployment
    address payable public owner;

    /// @notice Emitted when funds are withdrawn from the contract
    /// @param amount The amount of ETH that was withdrawn
    /// @param when The timestamp when the withdrawal occurred
    event Withdrawal(uint amount, uint when);

    /// @notice Creates a new time-locked wallet
    /// @dev The constructor is payable to allow funding during deployment
    /// @param _unlockTime The Unix timestamp after which funds can be withdrawn
    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    /// @notice Allows the owner to withdraw all funds after the unlock time
    /// @dev Transfers the entire contract balance to the owner
    /// @dev Emits a Withdrawal event upon successful transfer
    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
