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
