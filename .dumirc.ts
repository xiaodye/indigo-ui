import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'cobalt-ui',
  },
  resolve: {
    atomDirs: [
      // 在这里修改components的匹配路径
      {
        type: 'component',
        dir: './src/components',
      },
    ],
  },
});
