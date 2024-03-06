<p align="center">
<img src="https://github.com/xiaodye/indigo-ui/blob/0.3.2/public/logo.png" style="width:200px;" />
</p>

<h1 align="center">Indigo UI</h1>

<p align="center">
  一个基于 dumi2 开发的 react 组件库
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@indigo-ui/components.svg?style=flat" alt="NPM version">
  <img src="http://img.shields.io/npm/dm/@indigo-ui/components.svg?style=flat" alt="NPM downloads">
  <img src="https://github.com/xiaodye/indigo-ui/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI" style="max-width: 100%;"/>
  <img src="https://img.shields.io/github/license/xiaodye/indigo-ui?color=red"/>
</p>

## 特性

- ⚡️ 使用 React 18、Dumi 2 和 Pnpm，保证快速高效的开发体验。
- 🦾 使用 TypeScript, 提供一流的类型支持。
- 🗂 提供 cli 工具，支持快速创建应用。
- ⚙️ 使用 Jest 和 @testing-library/react 进行单元测试。
- 🌳 Eslint + Prettier + Stylelint + commitlint 保证代码风格和质量。
- 🎨 使用 GithubActions 进行 CI/CD。

## 安装

1. 从 yarn、npm 或者 pnpm 安装并引入 indigo-ui

```bash
pnpm add @indigo-ui/components
```

2. 通过 cli 工具一键创建应用（beta）

```shell
pnpm i -g @indigo-ui/cli
```

```shell
create-indigo-ui-app
```

![Snipaste_2024-02-25_18-39-59.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c687a82fa60f404a94e96570e5de095a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1028&h=402&s=57475&e=png&b=16161d)

## 快速开始

```tsx
import { Button, Space } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <h1>indigo-ui</h1>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
    </Space>
  );
};

export default App;
```

## 后续计划

- 逐步改为 Monorepo 项目架构
- 增加更多的组件支持
- 提供 @indigo-ui/cli、@indiog-ui/hooks、@indigo-ui/icons
- 支持 nginx 和 docker 部署文档站点
