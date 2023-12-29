import classNames from 'classnames';
import { CSSProperties, FC, MouseEvent, useState } from 'react';
import { TabItemType } from './types';

export type TabsType = 'line' | 'card';

export type TabsProps = {
  /**
   * @description 自定义类名
   * @default undefined
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 默认选中的 key
   */
  defaultActiveKey: string | number;
  /**
   * @description tabs 样式类型
   */
  type?: TabsType;
  /**
   * @description 需要传入 items
   */
  items: TabItemType[];
  /**
   * 点击触发 tab 触发的回调函数
   * @param key
   * @param e
   * @returns
   */
  onTabClick?: (key: string | number, e: MouseEvent) => void;
};

const Tabs: FC<TabsProps> = ({ className, style, defaultActiveKey, type = 'line', onTabClick, items }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const tabsClassName = classNames('cobalt-tabs', className);
  const classes = classNames('cobalt-tabs-nav', `nav-${type}`);

  /**
   * 点击切换tabs页签时的回调
   * @param e
   * @param key
   * @param disabled
   */
  const clickHandler = (key: string | number, e: MouseEvent, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveKey(key);
      onTabClick?.(key, e);
    }
  };

  return (
    <div className={tabsClassName} style={style}>
      {/* tabs的导航栏 */}
      <ul className={classes}>
        {items.map((item) => (
          <li
            className={classNames('cobalt-tabs-nav-item', {
              active: activeKey === item.key,
              disabled: item.disabled,
            })}
            key={item.key}
            onClick={(e) => {
              clickHandler(item.key, e, item.disabled);
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* tabs的内容区域 */}
      <div className="cobalt-tabs-content">
        {items.map((item) => {
          return (
            <div
              key={item.key}
              className={classNames('cobalt-tabs-content-item', {
                hidden: item.key !== activeKey,
              })}
            >
              {item.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
