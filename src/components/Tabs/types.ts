import { ReactNode } from 'react';

type TabItemType = {
  key: string | number;
  label: ReactNode;
  disabled?: boolean;
  children: ReactNode;
};

export type { TabItemType };
