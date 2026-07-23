import { create } from 'zustand';

export const useAppStore = create((set) => ({
  // ==========================
  // Alert Filters
  // ==========================

  selectedTypes: [],

  setSelectedTypes: (types) =>
    set({
      selectedTypes: types
    }),

  toggleType: (type) =>
    set((state) => ({
      selectedTypes: state.selectedTypes.includes(type)
        ? state.selectedTypes.filter(
            (t) => t !== type
          )
        : [...state.selectedTypes, type]
    })),

  // ==========================
  // Selected Alert
  // ==========================

  selectedAlert: null,

  setSelectedAlert: (alert) =>
    set({
      selectedAlert: alert
    }),

  // ==========================
  // Notification Settings
  // ==========================

  notificationsEnabled: true,

  notificationTypes: [],

  setNotificationsEnabled: (enabled) =>
    set({
      notificationsEnabled: enabled
    }),

  setNotificationTypes: (types) =>
    set({
      notificationTypes: types
    }),

  toggleNotificationType: (type) =>
    set((state) => ({
      notificationTypes:
        state.notificationTypes.includes(type)
          ? state.notificationTypes.filter(
              (t) => t !== type
            )
          : [...state.notificationTypes, type]
    }))
}));