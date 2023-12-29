import { Space, Switch } from '@indigo-ui/components';
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
