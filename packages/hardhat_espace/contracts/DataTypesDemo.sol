// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title Data Types Demonstration Contract
/// @notice This contract showcases various data types and storage patterns in Solidity
/// @dev Examples of different visibility modifiers, complex data structures, and storage patterns
contract DataTypesDemo {
    /// @notice Public string variable demonstrating string storage
    string public text;
    
    /// @notice Private number demonstrating private state variables
    uint256 private number;
    
    /// @notice Internal boolean flag demonstrating internal visibility
    bool internal flag;
    
    /// @notice Immutable owner address demonstrating immutable variables
    /// @dev Once set in constructor, this cannot be modified
    address public immutable owner;
    
    /// @notice Struct definition for storing person data
    /// @dev Demonstrates how to create custom data structures
    struct Person {
        string name;    // Person's name
        uint256 age;    // Person's age
        bool active;    // Person's active status
    }
    
    /// @notice Mapping of addresses to Person structs
    /// @dev Demonstrates key-value storage pattern
    mapping(address => Person) public people;
    
    /// @notice Array of member addresses
    /// @dev Demonstrates dynamic array usage
    address[] public membersList;
    
    /// @notice Event emitted when a new person is added
    /// @param userAddress The address of the added person
    /// @param name The name of the added person
    event PersonAdded(address indexed userAddress, string name);
    
    /// @notice Initializes the contract with a starting text
    /// @param initialText The initial text to store
    constructor(string memory initialText) {
        text = initialText;
        owner = msg.sender;
    }
    
    /// @notice Adds a new person to the contract
    /// @param _name The name of the person
    /// @param _age The age of the person
    /// @dev Demonstrates struct creation and storage
    function addPerson(string memory _name, uint256 _age) public {
        people[msg.sender] = Person(_name, _age, true);
        membersList.push(msg.sender);
        emit PersonAdded(msg.sender, _name);
    }
    
    /// @notice Updates the private number value
    /// @param _number The new number to store
    function updateNumber(uint256 _number) public {
        number = _number;
    }
    
    /// @notice Retrieves the private number value
    /// @return The current stored number
    function getNumber() public view returns (uint256) {
        return number;
    }
    
    /// @notice Toggles the internal flag
    /// @dev Demonstrates boolean operations
    function toggleFlag() public {
        flag = !flag;
    }
    
    /// @notice Gets the current state of the flag
    /// @return The current state of the flag
    function getFlag() public view returns (bool) {
        return flag;
    }
} 