import { Button, message } from 'cobalt-ui';
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
