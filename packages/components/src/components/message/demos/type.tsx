import { Button, message, Space } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  return (
    <Space>
      <Button type="primary" onClick={success}>
        Success
      </Button>
      <Button type="danger" onClick={error}>
        Error
      </Button>
      <Button type="info" onClick={warning}>
        Warning
      </Button>
    </Space>
  );
};

export default App;
