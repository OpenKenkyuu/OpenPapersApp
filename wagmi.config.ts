import { defineConfig } from '@wagmi/cli'
import { foundry, react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    foundry({
      project: '../tfgcontracts',
      forge: {
        clean: true,
        build: true,
        rebuild: true,
      }
    }),
    react()
  ],
})
