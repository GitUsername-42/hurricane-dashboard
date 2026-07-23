import { useEffect } from 'react';

import { useAlerts } from '../hooks/useAlerts';
import { useAlertNotifications } from '../hooks/useAlertNotifications';
import { useNotificationPermission } from '../hooks/useNotificationPermission';

import { AlertMap } from '../components/map/AlertMap';
import { AlertSidebar } from '../components/sidebar/AlertSidebar';
import { AlertDetailDrawer } from '../components/sidebar/AlertDetailDrawer';
import { MapLegend } from '../components/map/MapLegend';

import { useAppStore } from '../store/appStore';

export function MapPage() {
  // Load NOAA alerts
  const { data, isLoading, error } = useAlerts();

  // Zustand state
  const {
    selectedTypes,
    setSelectedTypes
  } = useAppStore();

  // Alert list
  const alerts = data?.features ?? [];

  // Available event types
  const eventTypes = [
    ...new Set(
      alerts.map(
        (alert) => alert.properties.event
      )
    )
  ].sort();

  // Initialize filters once alerts are loaded
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

  // Filter alerts
  const filteredAlerts = alerts.filter(
    (alert) =>
      selectedTypes.includes(
        alert.properties.event
      )
  );

  // Browser notification permission
  useNotificationPermission();

  // Notify on new alerts
  useAlertNotifications(filteredAlerts);

  // Loading state
  if (isLoading) {
    return <div>Loading alerts...</div>;
  }

  // Error state
  if (error) {
    return <div>Error loading alerts.</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh'
      }}
    >
      <AlertSidebar
        eventTypes={eventTypes}
        totalAlerts={filteredAlerts.length}
      />

      <div
        style={{
          flex: 1,
          position: 'relative'
        }}
      >
        <AlertMap alerts={filteredAlerts} />
        <MapLegend />
      </div>

      <AlertDetailDrawer />
    </div>
  );
}