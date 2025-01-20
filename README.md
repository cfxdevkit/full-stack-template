# Full Stack dApp Tutorial Template

A beginner-friendly, educational template for learning full-stack decentralized application (dApp) development. This template focuses on teaching the fundamentals of Web3 development using simple, understandable patterns.

## Educational Purpose

This template is designed to help developers understand:
- Smart contract development and deployment workflow
- Web3 frontend integration basics
- Blockchain interaction patterns
- Development environment setup and tooling

The project intentionally uses vanilla TypeScript for the frontend to keep the focus on core Web3 concepts rather than framework-specific implementations.

## Project Structure

```
├── packages/
│   ├── frontend/          # Vanilla TypeScript Web3 frontend
│   └── hardhat_espace/    # Smart contract tutorial contracts
├── .devcontainer/         # Development container configuration
└── package.json          # Root package configuration
```

## Features

- 📚 Educational Smart Contracts with Detailed Comments
- 🌐 Vanilla TypeScript Frontend (No Framework Overhead)
- 🔗 Web3 Integration Examples with Wagmi
- 🏗️ Step-by-Step Contract Deployment
- 📦 Organized Monorepo Structure
- 🐳 Ready-to-Use Development Environment

## Prerequisites

- Node.js
- PNPM
- Docker (for development container)
- tmux (for development workflow)

## Quick Start

1. Install dependencies:
```bash
pnpm install
```

2. Start the development environment:
```bash
pnpm dev
```

This will start:
- Frontend development server (top pane)
- Local blockchain node (bottom pane)

3. Stop the development environment:
```bash
pnpm dev:stop
```

## Development Commands

- `pnpm dev` - Start both frontend and blockchain node in tmux split panes
- `pnpm dev:stop` - Stop all development processes
- `pnpm clean` - Clean all build artifacts and dependencies
- `pnpm frontend` - Run only the frontend development server
- `pnpm node` - Run only the blockchain node

## Learning Path

This is an educational template based on the concept "learn through examples". Follow these steps to get hands-on experience with the full development workflow before diving into the code:

### 1. Setup Development Environment

1. Open in devcontainer (locally, codespace will be enable soon)
   - The devcontainer will automatically run `pnpm install` to add all required libraries

2. Start the development environment:
   ```bash
   pnpm dev
   ```
   This opens both frontend and hardhat environments in a split console using [tmux](https://github.com/tmux/tmux/wiki) 

### 2. Deploy Smart Contracts

1. Open a new terminal and navigate to the hardhat package:
   ```bash
   cd packages/hardhat_espace/
   ```

2. Test deployment with a dry run:
   ```bash
   hh ignition deploy ignition/modules/BasicConceptsModule.ts
   ```
   This deploys contracts temporarily to validate deployment logic

3. Execute the actual deployment:
   ```bash
   hh ignition deploy ignition/modules/BasicConceptsModule.ts --network confluxESpaceLocal
   ```

### 3. Connect Frontend

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Generate contract interfaces:
   ```bash
   pnpm generate-abi
   ```
   This extracts information from the hardhat deployment for frontend interaction

3. Access the frontend:
   - Open http://localhost:5173/
   - Connect your wallet

### 4. Fund Your Wallet

1. In the first terminal (running `pnpm dev`):
   - Press 'f' to access the funding interface
   - Enter your wallet address and desired amount
   - Follow the instructions to receive test funds

### 5. Explore and Learn

Now that everything is set up, you can:

1. Study the smart contracts in `packages/hardhat_espace/contracts/`
   - Each contract demonstrates specific Solidity concepts
   - Follow the progression from basic to advanced concepts

2. Explore the frontend in `packages/frontend/`
   - See how Web3 interactions are implemented
   - Learn contract integration patterns
   - Understand TypeScript type generation

3. Understand the deployment process
   - Review deployment configurations
   - Learn about network management
   - See how frontend and contracts connect

Additional sections and detailed explanations will be added soon.

## Package Documentation

- [Frontend Documentation](packages/frontend/README.md)
- [Smart Contracts Documentation](packages/hardhat_espace/README.md)

## License

ISC 