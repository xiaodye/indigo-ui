import { Button, message } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  const info = () => {
    message.info('This is a normal message', 10);
  };

  return (
    <Button onClick={info} type="primary">
      自定义时长
    </Button>
  );
};

export default App;
