import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read the deployed addresses
const deployedAddressesPath = path.join(__dirname, '../../hardhat_espace/ignition/deployments/chain-2030/deployed_addresses.json')
const deployedAddresses = JSON.parse(fs.readFileSync(deployedAddressesPath, 'utf8'))

// Transform the addresses into a more usable format
const contractAddresses = Object.entries(deployedAddresses).reduce((acc, [key, value]) => {
  // Extract contract name from the key (e.g., "BasicConceptsModule#BasicCounter" -> "BasicCounter")
  const contractName = key.split('#')[1]
  if (contractName) {
    acc[contractName] = value
  }
  return acc
}, {})

// Generate the TypeScript file content
const tsContent = `// This file is auto-generated. Do not edit it manually.
export const contractAddresses = {
${Object.entries(contractAddresses)
  .map(([name, address]) => `  ${name}: '${address}' as const,`)
  .join('\n')}
} as const

export type ContractAddresses = typeof contractAddresses
`

// Write the TypeScript file
const outputPath = path.join(__dirname, '../src/generated-addresses.ts')
fs.writeFileSync(outputPath, tsContent)

console.log('Contract addresses generated successfully!') 