import { Switch } from 'cobalt-ui';
import { FC } from 'react';

const App: FC = () => {
  const switchHandle = (status: boolean) => {
    // eslint-disable-next-line no-console
    console.log(status);
  };

  return <Switch onChange={switchHandle} />;
};

export default App;
