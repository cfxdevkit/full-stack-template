# Solidity API

## Lock

### unlockTime

```solidity
uint256 unlockTime
```

### owner

```solidity
address payable owner
```

### Withdrawal

```solidity
event Withdrawal(uint256 amount, uint256 when)
```

### constructor

```solidity
constructor(uint256 _unlockTime) public payable
```

### withdraw

```solidity
function withdraw() public
```

## BasicCounter

This contract demonstrates the fundamental concepts of state variables,
functions, and events in Solidity

_A simple implementation of a counter with increment and decrement functionality_

### owner

```solidity
address owner
```

The address that deployed the contract

_Stored to demonstrate public state variables_

### CountChanged

```solidity
event CountChanged(uint256 newCount)
```

Emitted when the counter value changes

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newCount | uint256 | The new value of the counter |

### constructor

```solidity
constructor(uint256 initialCount) public
```

Initializes the counter with a starting value

_Sets the initial count and records the deployer's address_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initialCount | uint256 | The value to initialize the counter with |

### increment

```solidity
function increment() public
```

Increases the counter by 1

_Emits CountChanged event with the new value_

### decrement

```solidity
function decrement() public
```

Decreases the counter by 1

_Includes a check to prevent underflow
Emits CountChanged event with the new value_

### getCount

```solidity
function getCount() public view returns (uint256)
```

Returns the current count

_Demonstrates the use of view functions_

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The current value of the counter |

## DataTypesDemo

This contract showcases various data types and storage patterns in Solidity

_Examples of different visibility modifiers, complex data structures, and storage patterns_

### text

```solidity
string text
```

Public string variable demonstrating string storage

### flag

```solidity
bool flag
```

Internal boolean flag demonstrating internal visibility

### owner

```solidity
address owner
```

Immutable owner address demonstrating immutable variables

_Once set in constructor, this cannot be modified_

### Person

Struct definition for storing person data

_Demonstrates how to create custom data structures_

```solidity
struct Person {
  string name;
  uint256 age;
  bool active;
}
```

### people

```solidity
mapping(address => struct DataTypesDemo.Person) people
```

Mapping of addresses to Person structs

_Demonstrates key-value storage pattern_

### membersList

```solidity
address[] membersList
```

Array of member addresses

_Demonstrates dynamic array usage_

### PersonAdded

```solidity
event PersonAdded(address userAddress, string name)
```

Event emitted when a new person is added

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| userAddress | address | The address of the added person |
| name | string | The name of the added person |

### constructor

```solidity
constructor(string initialText) public
```

Initializes the contract with a starting text

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initialText | string | The initial text to store |

### addPerson

```solidity
function addPerson(string _name, uint256 _age) public
```

Adds a new person to the contract

_Demonstrates struct creation and storage_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _name | string | The name of the person |
| _age | uint256 | The age of the person |

### updateNumber

```solidity
function updateNumber(uint256 _number) public
```

Updates the private number value

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _number | uint256 | The new number to store |

### getNumber

```solidity
function getNumber() public view returns (uint256)
```

Retrieves the private number value

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The current stored number |

### toggleFlag

```solidity
function toggleFlag() public
```

Toggles the internal flag

_Demonstrates boolean operations_

### getFlag

```solidity
function getFlag() public view returns (bool)
```

Gets the current state of the flag

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | The current state of the flag |

## Ownable

Implements basic access control mechanism with single owner

_Base contract demonstrating inheritance and modifiers_

### owner

```solidity
address owner
```

Address of the contract owner

### OwnershipTransferred

```solidity
event OwnershipTransferred(address previousOwner, address newOwner)
```

Emitted when contract ownership is transferred

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| previousOwner | address | Address of the previous owner |
| newOwner | address | Address of the new owner |

### constructor

```solidity
constructor() public
```

Sets the original owner of the contract to the sender

### onlyOwner

```solidity
modifier onlyOwner()
```

Modifier to restrict function access to contract owner

_Throws if called by any account other than the owner_

### transferOwnership

```solidity
function transferOwnership(address newOwner) public
```

Transfers ownership of the contract to a new address

_Can only be called by current owner_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newOwner | address | Address to receive ownership |

## AccessControl

Extends Ownable to implement operator-level access control

_Demonstrates contract inheritance and additional access control patterns_

### operators

```solidity
mapping(address => bool) operators
```

Mapping of addresses to operator status

### OperatorAdded

```solidity
event OperatorAdded(address operator)
```

Emitted when an operator is added

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operator | address | Address that was granted operator status |

### OperatorRemoved

```solidity
event OperatorRemoved(address operator)
```

Emitted when an operator is removed

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operator | address | Address that was removed from operators |

### onlyOperator

```solidity
modifier onlyOperator()
```

Modifier to restrict access to operators or owner

_Throws if called by non-operator and non-owner_

### addOperator

```solidity
function addOperator(address operator) public
```

Adds a new operator

_Can only be called by contract owner_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operator | address | Address to be added as operator |

### removeOperator

```solidity
function removeOperator(address operator) public
```

Removes an operator

_Can only be called by contract owner_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operator | address | Address to be removed from operators |

## StringStorage

### owner

```solidity
address owner
```

### StringUpdated

```solidity
event StringUpdated(string newValue, address updatedBy)
```

### constructor

```solidity
constructor(string initialString) public
```

### setString

```solidity
function setString(string newString) public
```

### getString

```solidity
function getString() public view returns (string)
```

### getStringLength

```solidity
function getStringLength() public view returns (uint256)
```

