// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title Basic Counter Smart Contract
/// @notice This contract demonstrates the fundamental concepts of state variables,
/// functions, and events in Solidity
/// @dev A simple implementation of a counter with increment and decrement functionality
contract BasicCounter {
    /// @notice The current count value (private)
    uint256 private count;
    
    /// @notice The address that deployed the contract
    /// @dev Stored to demonstrate public state variables
    address public owner;
    
    /// @notice Emitted when the counter value changes
    /// @param newCount The new value of the counter
    event CountChanged(uint256 newCount);
    
    /// @notice Initializes the counter with a starting value
    /// @param initialCount The value to initialize the counter with
    /// @dev Sets the initial count and records the deployer's address
    constructor(uint256 initialCount) {
        count = initialCount;
        owner = msg.sender;
    }
    
    /// @notice Increases the counter by 1
    /// @dev Emits CountChanged event with the new value
    function increment() public {
        count += 1;
        emit CountChanged(count);
    }
    
    /// @notice Decreases the counter by 1
    /// @dev Includes a check to prevent underflow
    /// @dev Emits CountChanged event with the new value
    function decrement() public {
        require(count > 0, "Count cannot be negative");
        count -= 1;
        emit CountChanged(count);
    }
    
    /// @notice Returns the current count
    /// @return The current value of the counter
    /// @dev Demonstrates the use of view functions
    function getCount() public view returns (uint256) {
        return count;
    }
} 