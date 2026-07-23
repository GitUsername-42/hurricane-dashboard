import { useMemo } from 'react';
import { useAppStore } from '../store/appStore';

export function useFilteredAlerts(alerts) {
  const { selectedTypes } = useAppStore();

  return useMemo(() => {
    return alerts.filter(alert =>
      selectedTypes.includes(alert.properties.event)
    );
  }, [alerts, selectedTypes]);
}