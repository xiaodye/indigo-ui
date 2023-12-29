import { Button, Space } from '@indigo-ui/components';
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

      <Space size={[30, 30]}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
};

export default App;
