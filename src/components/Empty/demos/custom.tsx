import { Empty } from '@indigo-ui/components';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{ width: '150px', height: '100px' }}
      description={
        <span>
          没找到数据，
          <a href="https://www.baidu.com" target="_back" style={{ color: '#1890ff' }}>
            去百度找找
          </a>
        </span>
      }
    />
  );
};

export default App;
