import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, UserSession, UserPreferences } from '@/types';

interface UserState {
  user: User | null;
  session: UserSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  preferences: UserPreferences | null;

  // Actions
  setUser: (user: User | null) => void;
  setSession: (session: UserSession | null) => void;
  setAuthenticated: (isAuthenticated: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  setPreferences: (preferences: UserPreferences) => void;
  updateUser: (userData: Partial<User>) => void;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
  clearError: () => void;
  logout: () => void;
}

const defaultPreferences: UserPreferences = {
  language: 'ar',
  timezone: 'Asia/Riyadh',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: '12h',
  theme: 'light',
  notifications: {
    email: true,
    sms: false,
    push: true,
    marketing: false,
  },
  privacy: {
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    showAddress: false,
  },
  accessibility: {
    fontSize: 16,
    contrast: 'normal',
    spacing: 1.5,
    motion: 'normal',
    screenReader: false,
  },
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      session: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      preferences: defaultPreferences,

      setUser: user => {
        set({ user });
      },

      setSession: session => {
        set({ session });
      },

      setAuthenticated: isAuthenticated => {
        set({ isAuthenticated });
      },

      setLoading: isLoading => {
        set({ isLoading });
      },

      setError: error => {
        set({ error });
      },

      setPreferences: preferences => {
        set({ preferences });
      },

      updateUser: userData => {
        set(state => ({
          user: state.user ? { ...state.user, ...userData } : null,
        }));
      },

      updatePreferences: preferences => {
        set(state => ({
          preferences: state.preferences
            ? { ...state.preferences, ...preferences }
            : null,
        }));
      },

      clearError: () => {
        set({ error: null });
      },

      logout: () => {
        set({
          user: null,
          session: null,
          isAuthenticated: false,
          error: null,
        });
      },
    }),
    {
      name: 'user-store',
      partialize: state => ({
        user: state.user,
        session: state.session,
        isAuthenticated: state.isAuthenticated,
        preferences: state.preferences,
      }),
    }
  )
);
