import { create } from 'zustand';

export const useAppStore = create((set) => ({
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

  selectedAlert: null,

  setSelectedAlert: (alert) =>
    set({
      selectedAlert: alert
    })
}));