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

## 间距大小

间距预设大、中、小三种大小。

通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。

```tsx
import { Button, Space } from 'cobalt-ui';
import { FC, useState } from 'react';

const App: FC = () => {
  const [size, setSize] = useState<'mini' | 'small' | 'medium' | 'large'>('small');

  return (
    <>
      <Space align="end">
        <Button type="info" onClick={() => setSize('small')}>
          small
        </Button>
        <Button type="info" onClick={() => setSize('medium')}>
          medium
        </Button>
        <Button type="info" onClick={() => setSize('large')}>
          large
        </Button>
      </Space>
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>

      <br />
      <br />

      <Space size={[10, 10]}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
};

export default App;
```
