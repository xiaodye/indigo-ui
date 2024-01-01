import { Button, Tooltip } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Tooltip content="简单的文字提示气泡框">
      <Button>文字提示</Button>
    </Tooltip>
  );
};

export default App;
