import { useEffect } from 'react';
import { useAppStore } from '../store/appStore';

export function useAlertFilters(eventTypes) {
  const {
    selectedTypes,
    setSelectedTypes
  } = useAppStore();

  useEffect(() => {
    if (
      eventTypes.length > 0 &&
      selectedTypes.length === 0
    ) {
      setSelectedTypes(eventTypes);
    }
  }, [
    eventTypes,
    selectedTypes,
    setSelectedTypes
  ]);

  return selectedTypes;
}