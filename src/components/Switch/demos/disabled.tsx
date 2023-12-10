import { Space, Switch } from 'cobalt-ui';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Switch disabled />
      <Switch defaultChecked disabled />
    </Space>
  );
};

export default App;
