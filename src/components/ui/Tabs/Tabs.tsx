'use client';

import React, { useState, createContext, useContext } from 'react';
import { clsx } from 'clsx';
import type { BaseComponentProps } from '@/types';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
};

export interface TabsProps extends BaseComponentProps {
  defaultValue: string;
  children: React.ReactNode;
}

export interface TabListProps extends BaseComponentProps {
  children: React.ReactNode;
}

export interface TabProps extends BaseComponentProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TabPanelProps extends BaseComponentProps {
  value: string;
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  children,
  className,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={clsx('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabList: React.FC<TabListProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx('flex border-b border-gray-200', className)}
      role='tablist'
      {...props}
    >
      {children}
    </div>
  );
};

const Tab: React.FC<TabProps> = ({
  value,
  children,
  disabled = false,
  className,
  ...props
}) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      className={clsx(
        'px-4 py-2 text-sm font-medium border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        isActive
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={() => !disabled && setActiveTab(value)}
      disabled={disabled}
      role='tab'
      aria-selected={isActive}
      aria-controls={`panel-${value}`}
      {...props}
    >
      {children}
    </button>
  );
};

const TabPanel: React.FC<TabPanelProps> = ({
  value,
  children,
  className,
  ...props
}) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      className={clsx('p-4', className)}
      role='tabpanel'
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabList, Tab, TabPanel };
