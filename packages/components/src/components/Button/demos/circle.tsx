import { Button, Space } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Button type="default" circle>
        A
      </Button>
      <Button type="primary" circle>
        B
      </Button>
      <Button type="danger" circle>
        C
      </Button>
      <Button type="warning" circle>
        D
      </Button>
      <Button type="info" circle>
        E
      </Button>
      <Button type="link" circle>
        F
      </Button>
      <Button type="dashed" circle>
        G
      </Button>
    </Space>
  );
};

export default App;
