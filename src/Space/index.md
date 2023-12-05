# Space 间距

设置组件之间的间距。

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。

- 可以设置各种水平对齐方式。

## 基本使用

相邻组件水平间距。

```tsx
import { Button, Space } from 'cobalt-ui';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Button type="primary">Button1</Button>
      <Button type="primary">Button2</Button>
      <Button type="primary">Button3</Button>
    </Space>
  );
};

export default App;
```

## 垂直间距

可以设置垂直方向排列的间距。

```tsx
import { Button, Space } from 'cobalt-ui';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space direction="vertical">
      <Button type="primary">Button1</Button>
      <Button type="primary">Button2</Button>
      <Button type="primary">Button3</Button>
    </Space>
  );
};

export default App;
```
