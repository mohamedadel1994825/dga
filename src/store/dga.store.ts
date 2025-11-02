import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  DGACompliance,
  DGAAnalyticsEvent,
  DGAMonitoringAlert,
} from '@/types';

interface DGAState {
  // Compliance status
  compliance: DGACompliance | null;
  lastComplianceCheck: Date | null;

  // Analytics events
  events: DGAAnalyticsEvent[];
  maxEvents: number;

  // Monitoring alerts
  alerts: DGAMonitoringAlert[];
  maxAlerts: number;

  // DGA settings
  settings: {
    analyticsEnabled: boolean;
    monitoringEnabled: boolean;
    complianceCheckInterval: number; // in minutes
    autoReportIssues: boolean;
  };

  // Actions
  setCompliance: (compliance: DGACompliance) => void;
  updateCompliance: (updates: Partial<DGACompliance>) => void;
  addEvent: (event: Omit<DGAAnalyticsEvent, 'id' | 'timestamp'>) => void;
  clearEvents: () => void;
  addAlert: (alert: Omit<DGAMonitoringAlert, 'id' | 'createdAt'>) => void;
  removeAlert: (id: string) => void;
  clearAlerts: () => void;
  updateSettings: (settings: Partial<DGAState['settings']>) => void;
  resetDGA: () => void;
}

const defaultSettings = {
  analyticsEnabled: true,
  monitoringEnabled: true,
  complianceCheckInterval: 60,
  autoReportIssues: true,
};

export const useDGAStore = create<DGAState>()(
  persist(
    (set, _get) => ({
      compliance: null,
      lastComplianceCheck: null,
      events: [],
      maxEvents: 1000,
      alerts: [],
      maxAlerts: 100,
      settings: defaultSettings,

      setCompliance: compliance => {
        set({
          compliance,
          lastComplianceCheck: new Date(),
        });
      },

      updateCompliance: updates => {
        set(state => ({
          compliance: state.compliance
            ? { ...state.compliance, ...updates }
            : null,
        }));
      },

      addEvent: event => {
        const newEvent: DGAAnalyticsEvent = {
          ...event,
          id: `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date().toISOString(),
        };

        set(state => {
          const events = [newEvent, ...state.events].slice(0, state.maxEvents);
          return { events };
        });
      },

      clearEvents: () => {
        set({ events: [] });
      },

      addAlert: alert => {
        const newAlert: DGAMonitoringAlert = {
          ...alert,
          id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          createdAt: new Date().toISOString(),
        };

        set(state => {
          const alerts = [newAlert, ...state.alerts].slice(0, state.maxAlerts);
          return { alerts };
        });
      },

      removeAlert: id => {
        set(state => ({
          alerts: state.alerts.filter(alert => alert.id !== id),
        }));
      },

      clearAlerts: () => {
        set({ alerts: [] });
      },

      updateSettings: newSettings => {
        set(state => ({
          settings: { ...state.settings, ...newSettings },
        }));
      },

      resetDGA: () => {
        set({
          compliance: null,
          lastComplianceCheck: null,
          events: [],
          alerts: [],
          settings: defaultSettings,
        });
      },
    }),
    {
      name: 'dga-store',
      partialize: state => ({
        settings: state.settings,
        maxEvents: state.maxEvents,
        maxAlerts: state.maxAlerts,
      }),
    }
  )
);
