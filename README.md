<p align="center">
<img src="https://github.com/xiaodye/indigo-ui/blob/0.3.2/public/logo.png" style="width:200px;" />
</p>

<h1 align="center">Indigo UI</h1>

<p align="center">
  一个基于 React + TypeScript 的组件库
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@indigo-ui/components.svg?style=flat" alt="NPM version">
  <img src="http://img.shields.io/npm/dm/@indigo-ui/components.svg?style=flat" alt="NPM downloads">
  <img src="https://github.com/xiaodye/indigo-ui/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI" style="max-width: 100%;"/>
  <img src="https://img.shields.io/github/license/xiaodye/indigo-ui?color=red"/>
</p>

## Features

- ⚡️ React 18, Dumi 2, Pnpm - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Jest and @testing-library/react
- 😃 Eslint + Prettier + Stylelint + Husky
- 🚘 CI/CD with GithubActions

## Install

从 yarn、npm 或者 pnpm 安装并引入 indigo-ui

```bash
pnpm add @indigo-ui/components
```

## Quick Start

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

## Browser Support

Modern browsers and Internet Explorer 10+.
