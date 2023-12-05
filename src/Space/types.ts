import { CSSProperties, ReactNode } from 'react';

type SizeType = 'mini' | 'small' | 'medium' | 'large';
type AlignType = 'start' | 'center' | 'end' | 'baseline';
type AlignItemsType = 'flex-start' | 'center' | 'flex-end' | 'baseline';

type spaceAlignParams = {
  display?: 'flex';
  flexDirection?: 'row' | 'column';
  alignItems?: AlignItemsType;
};

type SpaceProps = {
  children?: ReactNode;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 间距大小
   * @default small
   */
  size?: SizeType | number | [number, number];
  /**
   * @description 垂直对齐方式
   * @default center
   */
  align?: AlignType;
};

export { SpaceProps, spaceAlignParams, SizeType, AlignType, AlignItemsType };
