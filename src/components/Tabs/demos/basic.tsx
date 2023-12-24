import { BugTwoTone } from '@ant-design/icons';
import { Button, Space, TabItemType, Tabs } from 'cobalt-ui';
import { FC } from 'react';

const App: FC = () => {
  const items: TabItemType[] = [
    {
      label: `Tab 1`,
      key: '1',
      children: `Content of Tab Pane 1`,
    },
    {
      label: `Tab 2`,
      key: '2',
      children: `Content of Tab Pane 2`,
    },
    {
      label: `Tab 3`,
      key: '3',
      children: (
        <Space direction="vertical">
          <Button>Hello</Button>
          <Space>
            <BugTwoTone />
            <BugTwoTone />
            <BugTwoTone />
          </Space>
        </Space>
      ),
    },
  ];

  const handleClick = (key: string | number) => {
    console.log(key);
  };

  return <Tabs defaultActiveKey="1" onTabClick={handleClick} items={items} />;
};

export default App;