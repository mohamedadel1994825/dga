import { create } from 'zustand';
import type { Locale } from '@/config/site.config';

interface UIState {
  // Language and locale
  locale: Locale;
  isRTL: boolean;

  // Theme
  theme: 'light' | 'dark' | 'auto';
  systemTheme: 'light' | 'dark';

  // Navigation
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  isUserMenuOpen: boolean;
  isLanguageMenuOpen: boolean;

  // Modals and overlays
  modals: Record<string, boolean>;

  // Notifications
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    duration?: number;
    isVisible: boolean;
  }>;

  // Loading states
  loading: Record<string, boolean>;

  // Actions
  setLocale: (locale: Locale) => void;
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  setSystemTheme: (theme: 'light' | 'dark') => void;

  // Navigation actions
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleSearch: () => void;
  closeSearch: () => void;
  toggleUserMenu: () => void;
  closeUserMenu: () => void;
  toggleLanguageMenu: () => void;
  closeLanguageMenu: () => void;

  // Modal actions
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  toggleModal: (id: string) => void;
  closeAllModals: () => void;

  // Notification actions
  addNotification: (
    notification: Omit<UIState['notifications'][0], 'id' | 'isVisible'>
  ) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;

  // Loading actions
  setLoading: (key: string, isLoading: boolean) => void;
  clearLoading: (key: string) => void;
  clearAllLoading: () => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  // Initial state
  locale: 'ar',
  isRTL: true,
  theme: 'light',
  systemTheme: 'light',
  isMobileMenuOpen: false,
  isSearchOpen: false,
  isUserMenuOpen: false,
  isLanguageMenuOpen: false,
  modals: {},
  notifications: [],
  loading: {},

  // Locale actions
  setLocale: locale => {
    set({ locale, isRTL: locale === 'ar' });
  },

  setTheme: theme => {
    set({ theme });
  },

  setSystemTheme: systemTheme => {
    set({ systemTheme });
  },

  // Navigation actions
  toggleMobileMenu: () => {
    set(state => ({ isMobileMenuOpen: !state.isMobileMenuOpen }));
  },

  closeMobileMenu: () => {
    set({ isMobileMenuOpen: false });
  },

  toggleSearch: () => {
    set(state => ({ isSearchOpen: !state.isSearchOpen }));
  },

  closeSearch: () => {
    set({ isSearchOpen: false });
  },

  toggleUserMenu: () => {
    set(state => ({ isUserMenuOpen: !state.isUserMenuOpen }));
  },

  closeUserMenu: () => {
    set({ isUserMenuOpen: false });
  },

  toggleLanguageMenu: () => {
    set(state => ({ isLanguageMenuOpen: !state.isLanguageMenuOpen }));
  },

  closeLanguageMenu: () => {
    set({ isLanguageMenuOpen: false });
  },

  // Modal actions
  openModal: id => {
    set(state => ({
      modals: { ...state.modals, [id]: true },
    }));
  },

  closeModal: id => {
    set(state => ({
      modals: { ...state.modals, [id]: false },
    }));
  },

  toggleModal: id => {
    set(state => ({
      modals: { ...state.modals, [id]: !state.modals[id] },
    }));
  },

  closeAllModals: () => {
    set(state => {
      const closedModals = Object.keys(state.modals).reduce(
        (acc, key) => {
          acc[key] = false;
          return acc;
        },
        {} as Record<string, boolean>
      );

      return { modals: closedModals };
    });
  },

  // Notification actions
  addNotification: notification => {
    const id = `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newNotification = {
      ...notification,
      id,
      isVisible: true,
    };

    set(state => ({
      notifications: [...state.notifications, newNotification],
    }));

    // Auto-remove notification after duration
    if (notification.duration && notification.duration > 0) {
      setTimeout(() => {
        get().removeNotification(id);
      }, notification.duration);
    }
  },

  removeNotification: id => {
    set(state => ({
      notifications: state.notifications.filter(
        notification => notification.id !== id
      ),
    }));
  },

  clearNotifications: () => {
    set({ notifications: [] });
  },

  // Loading actions
  setLoading: (key, isLoading) => {
    set(state => ({
      loading: { ...state.loading, [key]: isLoading },
    }));
  },

  clearLoading: key => {
    set(state => {
      const newLoading = { ...state.loading };
      delete newLoading[key];
      return { loading: newLoading };
    });
  },

  clearAllLoading: () => {
    set({ loading: {} });
  },
}));
