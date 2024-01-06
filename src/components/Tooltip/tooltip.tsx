import classNames from 'classnames';
import { CSSProperties, FC, ReactNode, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import TooltipEl from './tooltipItem';
import type { TooltipAlign } from './types';

const el = document.createElement('div');
el.className = 'cobalt-position-container';
document.body.appendChild(el);

type TooltipProps = {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 需要悬浮提示的元素
   */
  children: ReactNode;
  /**
   * @description 提示文字
   */
  content: ReactNode;
  /**
   * @description 悬浮提示的方向
   * @default top
   */
  align?: TooltipAlign;
  /**
   * @description 自定义颜色
   * @default #000
   */
  color?: string;
  /**
   * @description 元素层级
   * @default 1011
   */
  zIndex?: number;
  /**
   * @description 回调函数
   * @param flag
   * @returns
   */
  onOpenChange?: (flag: boolean) => void;
};

const Tooltip: FC<TooltipProps> = ({
  style,
  className,
  children,
  content,
  align = 'top',
  color = '#000',
  zIndex = 1011,
  onOpenChange,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<any>(null);
  const Ele = document.createElement('div');
  Ele.className = 'cobalt-position';
  const containerEl = Ele as HTMLElement;
  const root = ReactDOM.createRoot(containerEl);

  const classes = classNames('cobalt-tooltip', className);

  /**
   * 鼠标进入事件处理函数
   */
  const tooltipMouseOverHandler = (): void => {
    const viewportOffset = tooltipRef.current?.getBoundingClientRect();
    const left = viewportOffset?.left ?? 0;
    const top = viewportOffset?.top ?? 0;
    const width = tooltipRef.current?.clientWidth ?? 0;
    const height = tooltipRef.current?.clientHeight ?? 0;

    root.render(
      <TooltipEl
        left={left}
        top={top}
        width={width}
        height={height}
        content={content}
        align={align}
        cRef={childrenRef}
        color={color}
        zIndex={zIndex}
      />,
    );

    // 置入到指定节点下
    const container = document.querySelector('.cobalt-position-container');
    if (container) {
      container.appendChild(Ele);
    }

    let timer: any = null;
    clearTimeout(timer);

    timer = setTimeout(() => {
      (childrenRef.current as any).handleOpen(true);
      onOpenChange?.(true);
    }, 150);
  };

  /**
   * 鼠标移出事件处理函数
   */
  const tooltipMouseOutHandler = (): void => {
    (childrenRef.current as any).handleOpen(false);
    let timer: any = null;

    if (Ele) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const container = document.querySelector('.cobalt-position-container');

        if (document.querySelector('.cobalt-position')) {
          container?.removeChild(document.querySelector('.cobalt-position')!);
        }

        onOpenChange?.(false);
      }, 150);
    }
  };

  return (
    <div
      className={classes}
      style={style}
      ref={tooltipRef}
      onMouseOver={tooltipMouseOverHandler}
      onMouseOut={tooltipMouseOutHandler}
    >
      {children}
    </div>
  );
};

export default Tooltip;
export type { TooltipProps };
