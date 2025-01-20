# Smart Contract Tutorials

A collection of educational smart contracts designed to teach Solidity development concepts progressively. Each contract focuses on specific aspects of smart contract development with detailed documentation and comments.

## Learning Objectives

This package helps you understand:
- Basic to advanced Solidity concepts
- Smart contract development patterns
- Testing and deployment workflows
- Contract documentation practices

## Tutorial Contracts

### 1. BasicCounter.sol
An entry-level contract teaching fundamental concepts:
- State variables and their visibility
- Function types (public, view)
- Events and their usage
- Basic error handling
- Constructor usage

### 2. DataTypesDemo.sol
Explores Solidity's type system and data structures:
- Value types vs reference types
- Structs and mappings
- Arrays and storage patterns
- Visibility modifiers
- Immutable variables

### 3. ModifiersAndInheritance.sol
Demonstrates object-oriented patterns in Solidity:
- Contract inheritance
- Function modifiers
- Access control patterns
- Event emission patterns
- Interface implementation

### 4. Lock.sol
Practical application combining multiple concepts:
- Time-based logic
- ETH handling
- Security patterns
- State management
- Error handling

## Project Structure

```
├── contracts/           # Tutorial smart contracts
├── ignition/           # Deployment configuration
├── test/              # Contract test examples
├── docs/              # Auto-generated documentation
└── hardhat.config.ts  # Development environment setup
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Study and run the tests:
```bash
pnpm test
```

3. Try deploying contracts:
```bash
pnpm hardhat ignition deploy ./ignition/modules/BasicConceptsModule.ts
```

## Learning Path

1. Start with the contracts in order:
   - `BasicCounter.sol`
   - `DataTypesDemo.sol`
   - `ModifiersAndInheritance.sol`
   - `Lock.sol`

2. For each contract:
   - Read the documentation
   - Study the implementation
   - Run the tests
   - Try modifications

3. Explore deployment:
   - Understand deployment scripts
   - Try local deployment
   - Learn about network configuration

## Documentation

Each contract includes detailed NatSpec comments explaining:
- Purpose and functionality
- Parameter descriptions
- Function behaviors
- Security considerations

View the generated documentation in the `docs/` directory.

## Testing

Each contract includes example tests demonstrating:
- Test structure and organization
- Different testing approaches
- Common testing patterns
- Edge case handling

Run the tests with:
```bash
pnpm test
```

## Deployment

Learn about deployment using Hardhat Ignition:

1. Local network deployment:
```bash
pnpm hardhat ignition deploy ./ignition/modules/BasicConceptsModule.ts
```

2. Testnet deployment:
```bash
pnpm hardhat ignition deploy ./ignition/modules/BasicConceptsModule.ts --network testnet
```

## Contract Addresses

Deployment addresses are stored in:
```
ignition/deployments/{network}/deployed_addresses.json
```

These addresses are used by the frontend to demonstrate contract interaction. 