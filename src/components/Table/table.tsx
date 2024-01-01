import classNames from 'classnames';
import { CSSProperties, FC } from 'react';
import { Empty } from '../Empty';
import './style.scss';
import type { ColumnsType, TableSize } from './types';

type TableProps = {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 是否带边框
   */
  border?: boolean;
  /**
   * @description 列映射
   */
  columns: ColumnsType[];
  /**
   * @description 表格数据
   */
  dataSource: object[];
  /**
   * @description 表格尺寸
   * @default large
   */
  size?: TableSize;
};

const Table: FC<TableProps> = ({ style, className, border = false, columns, dataSource, size = 'large' }) => {
  const rootClasses = classNames('cobalt-table-inner', className);

  const theadTrClass = classNames({
    'cobalt-table-thead-th': true,
    'cobalt-table-thead-th-border': border,
    [`cobalt-table-thead-th-size-${size}`]: size,
  });

  const tbodyTrClass = classNames({
    'cobalt-table-tbody-td': true,
    'cobalt-table-tbody-td-border': border,
    [`cobalt-table-tbody-td-size-${size}`]: size,
  });

  return (
    <div className={rootClasses} style={style}>
      <table className="cobalt-table-content">
        <thead className="cobalt-table-thead">
          <tr className="cobalt-table-thead-tr">
            {columns && columns.length
              ? columns.map((item: any, index: number) => {
                  const thStyle = {
                    ...item.style,
                    textAlign: item.align ? item.align : '',
                  };
                  return (
                    <th className={theadTrClass} key={item.dataIndex + index} style={thStyle}>
                      {item.title}
                    </th>
                  );
                })
              : null}
          </tr>
        </thead>

        <tbody className="cobalt-table-tbody">
          {dataSource && dataSource.length ? (
            dataSource.map((item: any, index) => (
              <tr className="cobalt-table-tbody-tr" key={index + Math.random()}>
                {columns && columns.length
                  ? columns.map((column: any, i) => {
                      const tdStyle = {
                        width: column.width ? `${column.width}px` : '',
                        textAlign: column.align ? column.align : '',
                      };
                      const tdContent = column.render
                        ? column.render(item)
                        : item[column.dataIndex] !== undefined
                        ? item[column.dataIndex]
                        : '';
                      return (
                        <td
                          className={[tbodyTrClass, column.ellipsis ? 'cobalt-table-tbody-td-ellipsis' : ''].join(' ')}
                          key={index + i}
                          style={tdStyle}
                          title={column.ellipsis ? item[column.dataIndex] : ''}
                        >
                          <div style={tdStyle}>{tdContent}</div>
                        </td>
                      );
                    })
                  : null}
              </tr>
            ))
          ) : (
            <tr className="noTableData">
              <td>
                <Empty />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
export type { TableProps, TableSize };
