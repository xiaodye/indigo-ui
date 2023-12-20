import { Key, ReactNode } from 'react';

type TableSize = 'large' | 'middle' | 'small';
type TableAlign = 'left' | 'center' | 'right';

type ColumnsType<T = any> = {
  key: Key;
  title: string;
  dataIndex: string;
  align?: TableAlign;
  ellipsis?: boolean;
  width?: string | number;
  render?: (text: any, record: T) => ReactNode;
};

export type { ColumnsType, TableAlign, TableSize };
