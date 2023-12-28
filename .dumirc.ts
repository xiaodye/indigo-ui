import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'cobalt-ui',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/Button' },
    ],
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
