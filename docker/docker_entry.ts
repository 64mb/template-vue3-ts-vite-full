import { spawn, spawnSync } from 'child_process'
import { watch } from 'fs'

spawnSync('bun install --frozen-lockfile', {
  stdio: 'inherit',
  shell: true,
})

// install dependencies every time package.json changes
const watcher = watch('package.json', () => {
  spawn('bun install --frozen-lockfile', {
    stdio: 'inherit',
    shell: true,
  })
})

// restart node when a source file changes
const appProcess = spawn('bun run dev --host', {
  stdio: 'inherit',
  shell: true,
})

process.on('SIGTERM', () => {
  watcher.close()
  appProcess.kill('SIGTERM')
})
