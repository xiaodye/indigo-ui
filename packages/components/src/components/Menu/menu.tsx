import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';
import classNames from 'classnames';
import { CSSProperties, FC, useCallback, useEffect, useState } from 'react';
import './style.scss';

interface MenuProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 配置对象
   * @default {}
   */
  items: Array<RenderOptions>;
  /**
   * @description 自定义宽度
   * @default 220px
   */
  width?: string | number;
  /**
   * @description 手风琴
   * @default false
   */
  ableToggle?: boolean;
  /**
   * @description 默认展开
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * @description 切换菜单回调函数
   */
  onSelect?: (param: any) => void;
  /**
   * @description 主题颜色
   * @default 'light'
   */
  theme?: 'light' | 'dark';
}

interface MenuHeightProps {
  key: string;
  height: string;
  childNum: number | string;
  level: number;
  children?: Array<any>;
}

interface RenderOptions {
  label: string;
  key: string;
  level?: string | number;
  icon?: JSX.Element | null;
  children?: Array<any> | null | undefined;
}

const Menu: FC<MenuProps> = ({
  items,
  className,
  width = 220,
  ableToggle,
  defaultOpen,
  onSelect,
  style,
  theme = 'light',
}) => {
  const [nowActiveMainKey, setNowActiveMainKey] = useState(''); // 选中的一级菜单key
  const [nowActiveKey, setNowActiveKey] = useState(''); // 选中的子菜单key
  const [parentMenuHeightList, setParentMenuHeightList] = useState<any>({}); // 父菜单高度集合

  const menuItemHeight = 50;

  const classes = classNames(
    'menu',
    {
      [`menu-${theme}`]: theme,
    },
    className,
  );

  const initParentMenuHeight = (item: Array<RenderOptions>, obj: any, fatherKey: string | number) => {
    // 初始化父级菜单高度
    item.forEach((menuItem) => {
      if (menuItem.children) {
        if (menuItem.level === 1) {
          obj[menuItem.key] = {
            key: menuItem.key,
            height: `${menuItemHeight}px`,
            childNum: menuItem.children.length,
            level: menuItem.level,
            children: [],
          };
        } else {
          obj[fatherKey]?.children.push({
            key: menuItem.key,
            height: `${menuItemHeight}px`,
            childNum: menuItem.children.length,
            level: menuItem.level,
          });
        }

        initParentMenuHeight(menuItem.children, obj, menuItem.level && menuItem.level === 1 ? menuItem.key : '');
      }
    });

    return obj;
  };

  const toggleFirstMenu = (fMenu: RenderOptions, e: any) => {
    // 点击父级菜单
    e.stopPropagation();
    const selectKey = fMenu.key;
    const refreshObject = { ...parentMenuHeightList };
    refreshObject[selectKey].height =
      refreshObject[selectKey].height === `${menuItemHeight}px`
        ? `${(refreshObject[selectKey].childNum + 1) * menuItemHeight}px`
        : `${menuItemHeight}px`;
    if (ableToggle) {
      // 手风琴折叠
      if (refreshObject[selectKey].height !== `${menuItemHeight}px`) {
        for (const key in refreshObject) {
          if (key !== selectKey) {
            refreshObject[key].height = `${menuItemHeight}px`;
            if (refreshObject[key].children) {
              refreshObject[key].children.map((item: MenuHeightProps) => (item.height = `${menuItemHeight}px`));
            }
          }
        }
      }
    } else {
      // 普通折叠
      if (refreshObject[selectKey].children.length !== 0) {
        refreshObject[selectKey].children.forEach((c: MenuHeightProps) => {
          c.height = `${menuItemHeight}px`;
        });
      }
    }
    setParentMenuHeightList(refreshObject);
  };

  const toggleChildMenu = (cMenu: RenderOptions, e: any, fKey: string) => {
    // 点击子级菜单
    if ((cMenu.level === 2 && !cMenu.children) || cMenu.level === 3) {
      setNowActiveMainKey(fKey);
      setNowActiveKey(cMenu.key as string);
    }
    if (cMenu.level === 2) {
      // 二级菜单扩展切换
      const refreshObject = { ...parentMenuHeightList };
      for (const key in refreshObject) {
        if (
          refreshObject[key].children &&
          refreshObject[key].children.findIndex((item: MenuHeightProps) => item.key === cMenu.key) !== -1
        ) {
          // 找出是哪个一级菜单的children
          const childIndex = refreshObject[key].children.findIndex((item: MenuHeightProps) => item.key === cMenu.key);
          refreshObject[key].children[childIndex].height =
            refreshObject[key].children[childIndex].height === `${menuItemHeight}px`
              ? `${(refreshObject[key].children[childIndex].childNum + 1) * menuItemHeight}px`
              : `${menuItemHeight}px`;
          let parentHeight =
            (refreshObject[key].childNum - refreshObject[key].children.length) * menuItemHeight + menuItemHeight; // 改变子菜单高度后统计父菜单高度
          parentHeight += refreshObject[key].children.reduce((pre: MenuHeightProps, next: MenuHeightProps) => {
            return Number(pre.height.split('px')[0]) + Number(next.height.split('px')[0]);
          });
          refreshObject[key].height = parentHeight;
        }
      }
      setParentMenuHeightList(refreshObject);
    }
    if (cMenu.level === 3) {
      for (const key in parentMenuHeightList) {
        if (
          parentMenuHeightList[key].children &&
          parentMenuHeightList[key].children.findIndex((item: MenuHeightProps) => item.key === fKey) !== -1
        ) {
          setNowActiveMainKey(parentMenuHeightList[key].key);
        }
      }
    }
  };

  const firstMenuHeight = (key: string) => {
    // 第一级菜单高度
    if (parentMenuHeightList[key]) {
      return {
        height: parentMenuHeightList[key]?.height,
      };
    }
    return {
      height: `${menuItemHeight}px`,
    };
  };

  const childMenuHeight = useCallback(
    (key: string) => {
      // 第二级菜单高度
      // eslint-disable-next-line guard-for-in
      for (const i in parentMenuHeightList) {
        const childIndex = parentMenuHeightList[i].children?.findIndex((item: RenderOptions) => item.key === key);
        if (childIndex !== -1) {
          return {
            height: parentMenuHeightList[i].children[childIndex].height,
          };
        }
      }
      return {
        height: `${menuItemHeight}px`,
      };
    },
    [parentMenuHeightList],
  );

  const renderChildOptions = (childM: RenderOptions): JSX.Element | any => {
    // 传入level为1的children，进行子项递归
    if (childM.children) {
      return childM.children.map((m) => {
        return (
          <div key={m.key}>
            <div
              className={nowActiveKey === m.key ? `menu-activeMenuOptions active` : `menu-childMenuOptions`}
              style={{
                ...childMenuHeight(m.key),
                textIndent: `${m?.level * 18}px`,
              }}
            >
              <div
                className={
                  m.children && m.children.findIndex((i: RenderOptions) => i.key === nowActiveKey) !== -1
                    ? `menu-activeFatherTitle`
                    : `menu-fatherTitle`
                }
                onClick={(e) => toggleChildMenu(m, e, childM.key as string)}
              >
                <span className="menu-label">{m.label}</span>
                {m.children && (
                  <span className="menu-icon">
                    {childMenuHeight(m.key).height === `${menuItemHeight}px` ? (
                      <CaretDownOutlined />
                    ) : (
                      <CaretUpOutlined />
                    )}
                  </span>
                )}
              </div>
              <div style={{ textIndent: `${m?.level * 18}px` }} className={`menu-childMenuOptions`} key={m.key}>
                {m.children && renderChildOptions(m)}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  useMount(() => {
    const initList = initParentMenuHeight(items, {}, '');

    if (defaultOpen) {
      // 默认展开
      // eslint-disable-next-line guard-for-in
      for (const key in initList) {
        initList[key].height = initList[key].childNum + 1;
        if (initList[key].children.length > 0) {
          initList[key].children.map((item: any) => (item.height = `${(item.childNum + 1) * menuItemHeight}px`));
          initList[key].height += initList[key].children.reduce((pre: MenuHeightProps, next: MenuHeightProps) => {
            return (pre.childNum as number) + (next.childNum as number);
          });
        }
        initList[key].height = `${initList[key].height * menuItemHeight}px`;
      }
    }

    setParentMenuHeightList(initList);
  });

  useEffect(() => {
    onSelect?.(nowActiveKey);
  }, [nowActiveKey]);

  return (
    <div
      className={classes}
      style={{
        width,
        ...style,
      }}
    >
      {items.map((menuItem) => {
        return (
          <div key={menuItem.key}>
            <div className={`menu-options`} style={firstMenuHeight(menuItem.key)}>
              <div
                className={nowActiveMainKey === menuItem.key ? `menu-activeFatherTitle` : `menu-fatherTitle`}
                onClick={(e) => toggleFirstMenu(menuItem, e)}
              >
                <div className="left">
                  <i>{menuItem.icon}</i>
                  <span className="menu-label">{menuItem.label}</span>
                </div>
                <span className="menu-icon">
                  {firstMenuHeight(menuItem.key).height === `${menuItemHeight}px` ? (
                    <CaretDownOutlined />
                  ) : (
                    <CaretUpOutlined />
                  )}
                </span>
              </div>
              <>{menuItem.children && renderChildOptions(menuItem)}</>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
export type { MenuProps };
