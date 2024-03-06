import classNames from 'classnames';
import { Children, FC, ReactNode, memo, useMemo } from 'react';
import './style.scss';
import { AlignItemsType, AlignType, SizeType, SpaceAlignParamsType, SpaceProps } from './types';

const gap_size_map = new Map<SizeType, number>([
  ['mini', 4],
  ['small', 8],
  ['medium', 16],
  ['large', 24],
]);

const align_map = new Map<AlignType, AlignItemsType>([
  ['start', 'flex-start'],
  ['center', 'center'],
  ['end', 'flex-end'],
  ['baseline', 'baseline'],
]);

const Space: FC<SpaceProps> = ({
  children,
  className,
  style,
  direction = 'horizontal',
  size = 'small',
  align = 'center',
}) => {
  const classes = classNames('space', className);
  const childrenList = Children.toArray(children);

  const spaceStyle = useMemo(() => {
    const style: SpaceAlignParamsType = direction === 'horizontal' ? { alignItems: align_map.get(align) } : {};

    if (direction === 'vertical') {
      style.flexDirection = 'column';
    } else {
      style.flexDirection = 'row';
    }

    return style;
  }, [direction, align]);

  return (
    <div
      className={classes}
      style={{
        ...spaceStyle,
        gap: Array.isArray(size)
          ? `${size[0]}px ${size[1]}px`
          : typeof size === 'number'
          ? `${size}px`
          : `${gap_size_map.get(size)}px`,
        ...style,
      }}
    >
      {childrenList.map((child: ReactNode, index: number) => {
        return (
          <div key={index} className="space-item">
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default memo(Space);
