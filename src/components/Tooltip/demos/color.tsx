import { Button, Space, Tooltip } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  const colors = [
    '#f50',
    '#2db7f5',
    '#87d068',
    '#108ee9',
    '#C176DC',
    '#7E5AE7',
    '#EE964B',
    '#00B572',
    '#6FE4FF',
    '#A6FFC2',
  ];
  return (
    <Space>
      {colors.map((item: string, index: number) => (
        <Tooltip key={index} content={`这是一个背景为${item}色的文字提示气泡`} color={item}>
          <Button>{item}</Button>
        </Tooltip>
      ))}
    </Space>
  );
};

export default App;
