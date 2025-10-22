'use client';

import React, { useState, createContext, useContext } from 'react';
import { clsx } from 'clsx';
import type { BaseComponentProps } from '@/types';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'Accordion components must be used within an Accordion provider'
    );
  }
  return context;
};

export interface AccordionProps extends BaseComponentProps {
  allowMultiple?: boolean;
  children: React.ReactNode;
}

export interface AccordionItemProps extends BaseComponentProps {
  value: string;
  children: React.ReactNode;
}

export interface AccordionTriggerProps extends BaseComponentProps {
  children: React.ReactNode;
}

export interface AccordionContentProps extends BaseComponentProps {
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  allowMultiple = false,
  children,
  className,
  ...props
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value];
      } else {
        return prev.includes(value) ? [] : [value];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={clsx('space-y-2', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
  className,
  ...props
}) => {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <div
      className={clsx(
        'border border-gray-200 rounded-lg overflow-hidden',
        className
      )}
      data-state={isOpen ? 'open' : 'closed'}
      {...props}
    >
      {children}
    </div>
  );
};

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  ...props
}) => {
  const { toggleItem } = useAccordionContext();
  const itemValue = React.useContext(AccordionItemContext);
  const isOpen = React.useContext(AccordionOpenContext);

  return (
    <button
      className={clsx(
        'flex w-full items-center justify-between p-4 text-left font-medium transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
      onClick={() => toggleItem(itemValue)}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <svg
        className={clsx('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 9l-7 7-7-7'
        />
      </svg>
    </button>
  );
};

const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
  ...props
}) => {
  const isOpen = React.useContext(AccordionOpenContext);

  return (
    <div
      className={clsx(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        className
      )}
      {...props}
    >
      <div className='p-4 pt-0'>{children}</div>
    </div>
  );
};

// Context for individual item state
const AccordionItemContext = createContext<string>('');
const AccordionOpenContext = createContext<boolean>(false);

// Wrapper components that provide context
const AccordionItemWithContext: React.FC<AccordionItemProps> = ({
  value,
  children,
  ...props
}) => {
  const { openItems } = useAccordionContext();
  const isOpen = openItems.includes(value);

  return (
    <AccordionItemContext.Provider value={value}>
      <AccordionOpenContext.Provider value={isOpen}>
        <AccordionItem value={value} {...props}>
          {children}
        </AccordionItem>
      </AccordionOpenContext.Provider>
    </AccordionItemContext.Provider>
  );
};

export {
  Accordion,
  AccordionItemWithContext as AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
