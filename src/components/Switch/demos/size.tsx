import { Space, Switch } from '@indigo-ui/components';
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
