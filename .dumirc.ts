import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Indigo UI',
    logo: '/logo.png',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Button' },
    ],
  },
  apiParser: {},
  resolve: {
    atomDirs: [
      // 在这里修改components的匹配路径
      {
        type: 'component',
        dir: './src/components',
      },
    ],
    entryFile: './src/index.ts',
  },
});
