import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl';
import { templateCompilerOptions } from '@tresjs/core'

export default defineConfig({
  plugins: [glsl()],
  slidev: {
    vue: {
      ...templateCompilerOptions,
    }
  }
})