import { defineConfig } from '@wagmi/cli'
import { hardhat, actions } from '@wagmi/cli/plugins'

export default defineConfig(() => {
  return {
    out: 'src/generated.ts',
    contracts: [],
    plugins: [
      hardhat({
        project: '../hardhat_espace',
        sources: 'src',
      }),
      actions(),
    ],
  }
})