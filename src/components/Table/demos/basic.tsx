import { Button, ColumnsType, Table } from 'cobalt-ui';
import { FC } from 'react';

type DataType = {
  name: string;
  age: number;
  sex: string;
  gon: string;
  add: string;
};

const App: FC = () => {
  const columns: ColumnsType<DataType>[] = [
    {
      key: 'name',
      title: '姓名',
      dataIndex: 'name',
      align: 'left',
    },
    {
      key: 'age',
      title: '年龄',
      dataIndex: 'age',
    },
    {
      key: 'sex',
      title: '性别',
      dataIndex: 'sex',
    },
    {
      key: 'gon',
      title: '学历',
      dataIndex: 'gon',
    },
    {
      key: 'add',
      title: '住址',
      dataIndex: 'add',
      width: 300,
      ellipsis: true,
    },
    {
      key: '',
      title: '操作',
      dataIndex: '',
      align: 'center',
      render: (text) => (
        <Button
          size="small"
          type="link"
          onClick={() => {
            // Message.info(`你点击的这个人叫${text.name}`);
            console.log(text.name);
          }}
        >
          操作
        </Button>
      ),
    },
  ];

  const dataSource: DataType[] = [
    {
      name: '张三',
      age: 18,
      sex: '男',
      gon: '本科',
      add: '北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区',
    },
    {
      name: '李四',
      age: 18,
      sex: '男',
      gon: '本科',
      add: '北京市朝阳区',
    },
    {
      name: '王五',
      age: 18,
      sex: '女',
      gon: '硕士',
      add: '北京市朝阳区',
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

export default App;
