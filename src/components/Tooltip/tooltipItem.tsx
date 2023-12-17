import classNames from 'classnames';
import { FC, ReactNode, RefObject, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import type { TooltipAlign } from './types';

type TooltipElProps = {
  content: string | ReactNode;
  left: number;
  top: number;
  width: number;
  height: number;
  cRef: RefObject<any>;
  align?: TooltipAlign;
  color?: string;
  zIndex?: number;
};

const TooltipEl: FC<TooltipElProps> = ({
  content,
  left,
  top,
  width,
  height,
  cRef,
  align = 'top',
  color = '#000',
  zIndex = 1011,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [elWidth, setElWidth] = useState(0);
  const [style, setStyle] = useState({
    left: '',
    top: '',
    zIndex,
  });

  const arrowClass = classNames({
    'mzl_tooltip-arrow': true,
    [`mzl_tooltip-arrow_${align}`]: true,
  });

  useEffect(() => {
    if (elWidth > 0) {
      if (align === 'top') {
        setStyle({
          ...style,
          left: `${left - (elWidth - width) / 2}px`,
          top: `${top - (height + 10)}px`,
        });
      } else if (align === 'bottom') {
        setStyle({
          ...style,
          left: `${left - (elWidth - width) / 2}px`,
          top: `${top + (height + 10)}px`,
        });
      } else if (align === 'left') {
        setStyle({
          ...style,
          left: `${left - (elWidth + 10)}px`,
          top: `${top}px`,
        });
      } else if (align === 'right') {
        setStyle({
          ...style,
          left: `${left + (width + 10)}px`,
          top: `${top}px`,
        });
      }
    }
  }, [elWidth, align]);

  useImperativeHandle(cRef, () => ({
    handleOpen: (flag: boolean) => {
      setShowTooltip(flag);
    },
  }));

  useEffect(() => {
    if (divRef.current !== null) {
      setElWidth(divRef.current.clientWidth);
    }
  });

  return (
    <CSSTransition in={showTooltip} timeout={150} classNames="tooltip" unmountOnExit>
      <div className="mzl_tooltip_position" style={style} ref={divRef}>
        <div className="mzl_tooltip_content" style={{ background: color }}>
          {content}
          <span className={arrowClass} style={{ background: color }} />
        </div>
      </div>
    </CSSTransition>
  );
};

export default TooltipEl;
export type { TooltipElProps };
