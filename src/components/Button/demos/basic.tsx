import { Button, Space } from 'cobalt-ui';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">失败按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="link">链接按钮</Button>
      <Button type="dashed">虚线按钮</Button>
    </Space>
  );
};

export default App;
