import classNames from 'classnames';
import { CSSProperties, ReactNode, forwardRef, useContext, useEffect, useMemo, useState } from 'react';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';

type SwitchProps = {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 小型按钮
   * @default false
   */
  small?: boolean;
  /**
   * @description 默认选中
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * @description 选中文字
   */
  checkedChildren?: ReactNode;
  /**
   * @description 未选中文字
   */
  unCheckedChildren?: ReactNode;
  /**
   * @description 加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * @description 改变回调函数
   */
  handleChange?: (param: any) => void;
};

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    {
      disabled,
      className,
      style,
      defaultChecked = false,
      small,
      checkedChildren,
      unCheckedChildren,
      loading,
      handleChange,
    },
    ref,
  ) => {
    const [switchWidth, setSwitchWidth] = useState<number>(0);
    const [switchChildWidth, setSwitchChildWidth] = useState<number>(0);
    const [switchStatus, setSwitchStatus] = useState<boolean>(defaultChecked);

    const getSiteTheme = () => {
      const theme = window.localStorage.getItem('dumi:prefers-color');
      return theme;
    };

    const getRenderColor = (isDark: boolean, globalColor: string | undefined): string => {
      if (globalColor) {
        return globalColor;
      }

      return isDark ? '#3C7EFF' : '#325DFF';
    };

    const theme = getSiteTheme();
    const { globalColor } = useContext(globalCtx) as GlobalConfigProps;

    const classes = classNames(className, 'cobalt-switch');

    const toggleSwitch = () => {
      if (disabled || loading) return;
      setSwitchStatus(!switchStatus);
      handleChange?.(!switchStatus);
    };

    const switchStyle = useMemo(() => {
      return {
        '--switch-width': `${switchWidth}px`,
        '--switch-height': `${small ? 16 : 24}`,
        '--dot-transformX': switchStatus ? `${switchWidth - 16 - (small ? -2 : 4)}px` : '4px',
        '--dot-transformY': small ? '2.5px' : '4px',
        '--dot-size': `${small ? '12px' : '16px'}`,
        '--child-transform': switchStatus
          ? typeof checkedChildren === 'string'
            ? `4px`
            : '8px'
          : `${switchWidth - switchChildWidth - (typeof checkedChildren === 'string' ? 6 : -2)}px`,
        '--switch-bg': switchStatus ? getRenderColor(theme === ('auto' || 'dark'), globalColor) : 'rgba(201,205,212,1)',
        '--disabled': disabled || loading ? 'not-allowed' : 'pointer',
        '--opacity': disabled || loading ? '0.6' : '1',
      };
    }, [switchStatus, disabled, switchWidth, small, globalColor]);

    useEffect(() => {
      if (checkedChildren && unCheckedChildren && document.querySelector('.cobalt-switch-child')) {
        setSwitchChildWidth((document.querySelector('.cobalt-switch-child') as any).clientWidth);
        setSwitchWidth((document.querySelector('.cobalt-switch-child') as any).clientWidth + 30);
      } else {
        setSwitchWidth(small ? 28 : 40);
      }
    }, [document.querySelector('.cobalt-switch-child')?.clientWidth, checkedChildren, unCheckedChildren]);

    return (
      <div className={classes} style={{ ...style, ...(switchStyle as any) }} onClick={toggleSwitch} ref={ref}>
        <div className="cobalt-switch-dot">{loading}</div>
        {checkedChildren && unCheckedChildren && (
          <div className="cobalt-switch-child">{switchStatus ? checkedChildren : unCheckedChildren}</div>
        )}
      </div>
    );
  },
);

export default Switch;
export type { SwitchProps };
