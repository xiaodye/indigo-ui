import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

export enum PRISMTHEME {
  DRACULA = 'dracula',
  DUOTONEDARE = 'duotoneDark',
  DUOTONELIGHT = 'duotoneLight',
  GITHUB = 'github',
  NIGHTOWLLIGHT = 'nightOwlLight',
  NIGHTOWLDARK = 'nightOwl',
  OCEANICNEXT = 'oceanicNext',
  OKAIDIA = 'okaidia',
  PALENIGHT = 'palenight',
  SHADESOFPURPLE = 'shadesOfPurple',
  SYNTHWAVE84 = 'synthwave84',
  ULTRAMIN = 'ultramin',
  VSLIGHT = 'vsLight',
  VSDARK = 'vsDark',
}

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Indigo UI',
    logo: '/logo.png',
    showLineNum: true,
    rtl: false,
    socialLinks: {
      github: 'https://github.com/xiaodye/indigo-ui',
    },
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/Button' },
    ],
    footer: `Copyright © ${new Date().getFullYear()} Indigo UI`,
    ...defineThemeConfig({
      social: {
        github: {
          name: 'indigo-ui',
          link: 'https://github.com/xiaodye/indigo-ui',
        },
      },
      hero: {
        showVersionBadge: true,
      },
      code: {
        theme: {
          light: PRISMTHEME.NIGHTOWLLIGHT,
          dark: PRISMTHEME.NIGHTOWLDARK,
        },
      },
    }),
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
