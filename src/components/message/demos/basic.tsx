import { Button, message } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  const info = () => {
    message.info('This is a normal message');
  };

  return (
    <Button onClick={info} type="primary">
      基本示例
    </Button>
  );
};

export default App;
