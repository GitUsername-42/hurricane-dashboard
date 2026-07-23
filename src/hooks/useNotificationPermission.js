import { useEffect } from 'react';
import { requestNotificationPermission } from '../services/notifications';

export function useNotificationPermission() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);
}