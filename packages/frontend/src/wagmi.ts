import { injected } from '@wagmi/connectors'
import { http, createConfig } from '@wagmi/core'
import { confluxESpace, confluxESpaceTestnet } from '@wagmi/core/chains'
import { type Chain } from 'viem'

export const localChain = {
  id: 2030,
  name: 'Conflux ESpace Local',
  nativeCurrency: { name: 'Conflux', symbol: 'CFX', decimals: 18 },
  rpcUrls: {
    default: { http: ['http://localhost:8545'] },
  },
} as const satisfies Chain

export const config = createConfig({
  chains: [localChain, confluxESpace, confluxESpaceTestnet],
  connectors: [injected()],
  transports: {
    [localChain.id]: http(),
    [confluxESpace.id]: http(),
    [confluxESpaceTestnet.id]: http(),
  },
})
