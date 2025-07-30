import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
            'useThemeVars',
            'darkTheme',
            'lightTheme',
            'createDiscreteApi',
            'useOsTheme'
          ]
        }
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'src/components.d.ts',
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true
    })
  ],
  build: {
    // 确保构建时 docs 目录的 Markdown 文件被复制到输出目录
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
    chunkSizeWarningLimit: 1500,
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 将 docs 目录中的 Markdown 文件复制到公共目录
  assetsInclude: ['**/*.md'],
})
