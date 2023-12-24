import { CSSProperties, FC, UIEvent, useState } from 'react';
import { RowFC } from './types';

export type FixedSizeListProps = {
  /**
   * @description 列表可视区域宽度
   * @default -
   */
  width?: number;
  /**
   * @description 列表可视区域高度
   */
  height: number;
  /**
   * @description 列表数据长度
   */
  itemCount: number;
  /**
   * @description 列表行高
   */
  itemSize: number;
  /**
   * @description 需要渲染的数据列表
   */
  itemData: any[];
  /**
   * @description children
   */
  children: RowFC;
};

const FixedSizeList: FC<FixedSizeListProps> = ({ height, width, itemSize, itemCount, itemData, children: Child }) => {
  // 记录滚动掉的高度
  const [scrollOffset, setScrollOffset] = useState(0);

  // 外部容器高度
  const containerStyle: CSSProperties = {
    position: 'relative',
    width,
    height,
    overflow: 'auto',
  };

  // 1000个元素撑起盒子的实际高度
  const contentStyle = {
    height: itemSize * itemCount,
    width: '100%',
  };

  const getCurrentChildren = () => {
    // 可视区起始索引
    const startIndex = Math.floor(scrollOffset / itemSize);
    // 上缓冲区起始索引
    const finialStartIndex = Math.max(0, startIndex - 2);
    // 可视区能展示的元素的最大个数
    const numVisible = Math.ceil(height / itemSize);
    // 下缓冲区结束索引
    const endIndex = Math.min(itemCount, startIndex + numVisible + 2);
    const items = [];

    // 根据上面计算的索引值，不断添加元素给container
    for (let i = finialStartIndex; i < endIndex; i++) {
      const itemStyle: CSSProperties = {
        position: 'absolute',
        height: itemSize,
        width: '100%',
        // 计算每个元素在container中的top值
        top: itemSize * i,
      };
      items.push(<Child data={itemData} key={i} index={i} style={itemStyle} />);
    }

    return items;
  };

  // 当触发滚动就重新计算
  const scrollHandle = (event: UIEvent<HTMLDivElement>) => {
    const { scrollTop } = event.currentTarget;
    setScrollOffset(scrollTop);
  };

  return (
    <div style={containerStyle} onScroll={scrollHandle}>
      <div style={contentStyle}>{getCurrentChildren()}</div>
    </div>
  );
};

export default FixedSizeList;
