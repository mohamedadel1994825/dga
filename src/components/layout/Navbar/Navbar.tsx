import React, { useState } from 'react';
import { clsx } from 'clsx';
import type { BaseComponentProps } from '@/types';
import { Button } from '@/components/ui';

export interface NavbarProps extends BaseComponentProps {
  logo?: React.ReactNode;
  navigation?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  user?: {
    name: string;
    avatar?: string;
    menu?: Array<{
      label: string;
      href: string;
      onClick?: () => void;
    }>;
  };
  languageToggle?: {
    current: string;
    options: Array<{
      label: string;
      value: string;
      onClick: () => void;
    }>;
  };
  searchToggle?: () => void;
  mobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  navigation = [],
  user,
  languageToggle,
  searchToggle,
  mobileMenuToggle,
  isMobileMenuOpen = false,
  className,
  ...props
}) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  return (
    <nav
      className={clsx('bg-white shadow-sm border-b border-gray-200', className)}
      role='navigation'
      aria-label='Main navigation'
      {...props}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            {logo || (
              <div className='text-xl font-bold text-gray-900'>
                جامعة الإمام
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navigation.map((item, index) => (
                <div key={index} className='relative group'>
                  <a
                    href={item.href}
                    className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors'
                  >
                    {item.label}
                  </a>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <div className='absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                      {item.children.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.href}
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className='flex items-center space-x-4'>
            {/* Search Toggle */}
            {searchToggle && (
              <Button
                variant='ghost'
                size='sm'
                onClick={searchToggle}
                aria-label='Toggle search'
              >
                <svg
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </Button>
            )}

            {/* Language Toggle */}
            {languageToggle && (
              <div className='relative'>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  aria-label='Toggle language'
                >
                  {languageToggle.current}
                </Button>

                {isLanguageMenuOpen && (
                  <div className='absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50'>
                    {languageToggle.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          option.onClick();
                          setIsLanguageMenuOpen(false);
                        }}
                        className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* User Menu */}
            {user && (
              <div className='relative'>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  aria-label='User menu'
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className='h-8 w-8 rounded-full'
                    />
                  ) : (
                    <div className='h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center'>
                      <span className='text-sm font-medium text-gray-700'>
                        {user.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </Button>

                {isUserMenuOpen && (
                  <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50'>
                    <div className='px-4 py-2 text-sm text-gray-700 border-b border-gray-100'>
                      {user.name}
                    </div>
                    {user.menu?.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={item.onClick}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Mobile menu button */}
            {mobileMenuToggle && (
              <Button
                variant='ghost'
                size='sm'
                onClick={mobileMenuToggle}
                className='md:hidden'
                aria-label='Toggle mobile menu'
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  ) : (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  )}
                </svg>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50'>
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className='text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
