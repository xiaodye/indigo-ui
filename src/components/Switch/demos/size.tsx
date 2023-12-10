import { Space, Switch } from 'cobalt-ui';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Switch defaultChecked small />
      <Switch defaultChecked />
    </Space>
  );
};

export default App;
