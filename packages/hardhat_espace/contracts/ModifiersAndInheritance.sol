// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title Ownable Base Contract
/// @notice Implements basic access control mechanism with single owner
/// @dev Base contract demonstrating inheritance and modifiers
contract Ownable {
    /// @notice Address of the contract owner
    address public owner;
    
    /// @notice Emitted when contract ownership is transferred
    /// @param previousOwner Address of the previous owner
    /// @param newOwner Address of the new owner
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    
    /// @notice Sets the original owner of the contract to the sender
    constructor() {
        owner = msg.sender;
    }
    
    /// @notice Modifier to restrict function access to contract owner
    /// @dev Throws if called by any account other than the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }
    
    /// @notice Transfers ownership of the contract to a new address
    /// @param newOwner Address to receive ownership
    /// @dev Can only be called by current owner
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner cannot be zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}

/// @title Access Control Contract
/// @notice Extends Ownable to implement operator-level access control
/// @dev Demonstrates contract inheritance and additional access control patterns
contract AccessControl is Ownable {
    /// @notice Mapping of addresses to operator status
    mapping(address => bool) public operators;
    
    /// @notice Emitted when an operator is added
    /// @param operator Address that was granted operator status
    event OperatorAdded(address indexed operator);
    
    /// @notice Emitted when an operator is removed
    /// @param operator Address that was removed from operators
    event OperatorRemoved(address indexed operator);
    
    /// @notice Modifier to restrict access to operators or owner
    /// @dev Throws if called by non-operator and non-owner
    modifier onlyOperator() {
        require(operators[msg.sender] || msg.sender == owner, "Not authorized");
        _;
    }
    
    /// @notice Adds a new operator
    /// @param operator Address to be added as operator
    /// @dev Can only be called by contract owner
    function addOperator(address operator) public onlyOwner {
        operators[operator] = true;
        emit OperatorAdded(operator);
    }
    
    /// @notice Removes an operator
    /// @param operator Address to be removed from operators
    /// @dev Can only be called by contract owner
    function removeOperator(address operator) public onlyOwner {
        operators[operator] = false;
        emit OperatorRemoved(operator);
    }
} 