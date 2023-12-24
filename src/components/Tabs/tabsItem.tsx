import { FC, ReactNode } from 'react';

type TabsItemProps = {
  tab: ReactNode;
  disabled?: boolean;
  children: ReactNode;
};

const TabsItem: FC<TabsItemProps> = ({ children }) => <div className="cobalt-tabs-item">{children}</div>;

export default TabsItem;
export type { TabsItemProps };
