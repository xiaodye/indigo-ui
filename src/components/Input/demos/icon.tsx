import { SearchOutlined, SendOutlined } from '@ant-design/icons';
import { Input, Space } from 'cobalt-ui';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Space>
      <Input prefix={<SearchOutlined />} placeholder="前置图标输入框" style={{ width: 300 }} />
      <Input suffix={<SendOutlined />} placeholder="后置图标输入框" style={{ width: 300 }} />
    </Space>
  );
};

export default App;
