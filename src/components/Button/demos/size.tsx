import { Button, Space } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Button size="large" type="primary">
        large
      </Button>
      <Button type="primary">middle</Button>
      <Button size="small" type="primary">
        small
      </Button>
    </Space>
  );
};

export default App;
