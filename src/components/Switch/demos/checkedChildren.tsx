import { Space, Switch } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
      <Switch defaultChecked />
    </Space>
  );
};

export default App;
