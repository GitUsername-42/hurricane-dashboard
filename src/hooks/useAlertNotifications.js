import { useEffect, useRef } from 'react';
import { showAlertNotification } from '../services/notifications';
import { useAppStore } from '../store/appStore';

export function useAlertNotifications(alerts) {
  const previousIds = useRef(new Set());
  const initialized = useRef(false);

  // Zustand hooks must be called at the top level
  const {
    notificationsEnabled,
    notificationTypes
  } = useAppStore();

  useEffect(() => {
    const currentIds = new Set(
      alerts.map((alert) => alert.id)
    );

    // Ignore the initial load
    if (!initialized.current) {
      previousIds.current = currentIds;
      initialized.current = true;
      return;
    }

    alerts.forEach((alert) => {
      if (previousIds.current.has(alert.id)) {
        return;
      }

      if (!notificationsEnabled) {
        return;
      }

      if (
        notificationTypes.length > 0 &&
        !notificationTypes.includes(alert.properties.event)
      ) {
        return;
      }

      showAlertNotification(alert);
    });

    previousIds.current = currentIds;
  }, [
    alerts,
    notificationsEnabled,
    notificationTypes
  ]);
}