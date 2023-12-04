# Button

网页常用 button 按钮，常用于响应一个事件或处理某个逻辑。

```tsx
import { FC } from 'react';
import { Button } from 'cobalt-ui';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div style={{ display: 'flex', columnGap: 20 }}>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">失败按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="link">链接按钮</Button>
      <Button type="dashed">虚线按钮</Button>
    </div>
  );
};

export default App;
```
