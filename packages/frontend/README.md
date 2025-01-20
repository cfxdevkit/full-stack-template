# Frontend dApp Tutorial

A vanilla TypeScript implementation of a Web3 frontend, designed for learning dApp development fundamentals without framework complexity.

## Educational Focus

This frontend implementation:
- Uses vanilla TypeScript to keep the focus on Web3 concepts
- Demonstrates direct contract interactions without framework abstractions
- Shows clear patterns for blockchain integration
- Includes detailed comments explaining each integration step

## Tech Stack

- 📝 Vanilla TypeScript - Clear, framework-free implementation
- ⚡️ [Vite](https://vitejs.dev/) - Fast development server and building
- 🔗 [Wagmi](https://wagmi.sh/) - Core Web3 hooks and utilities
- 🌐 [viem](https://viem.sh/) - Lightweight Ethereum interactions

## Project Structure

```
├── src/
│   ├── main.ts           # Application entry point with basic setup
│   ├── wagmi.ts          # Web3 configuration and setup
│   ├── generated.ts      # Auto-generated contract types
│   └── generated-addresses.ts  # Auto-generated contract addresses
├── scripts/              # Build and utility scripts
├── wagmi.config.ts       # Contract integration configuration
└── package.json         # Package configuration
```

## Learning Topics

1. Web3 Connection Setup
   - Wallet connection handling
   - Network configuration
   - Provider setup

2. Contract Interaction
   - Type-safe contract calls
   - Transaction handling
   - Event listening

3. TypeScript Integration
   - Contract type generation
   - Type-safe blockchain interactions
   - Address management

## Development

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

The development server will start at `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm clean` - Clean build artifacts and dependencies
- `pnpm generate-abi` - Generate TypeScript types from contract ABIs

## Environment Setup

Create a `.env.local` file in the frontend directory:

```env
VITE_ENABLE_TESTNETS=true
```

## Contract Integration

The project demonstrates automated contract integration using Wagmi CLI. After deploying or updating contracts, run:

```bash
pnpm generate-abi
```

This process:
1. Generates TypeScript types from contract ABIs
2. Updates contract addresses from deployment
3. Creates type-safe contract interaction functions

Each generated file includes comments explaining its purpose and usage. 