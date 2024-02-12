import { defineConfig, presetMini } from 'unocss'

export default defineConfig({
  theme: {
    fontFamily: {
      mono: 'monospace',
    },
  },
  presets: [presetMini()],
})
