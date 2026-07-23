import { useEffect } from 'react';

import { useAlerts } from '../hooks/useAlerts';
import { AlertMap } from '../components/map/AlertMap';
import { AlertSidebar } from '../components/sidebar/AlertSidebar';
import { MapLegend } from '../components/map/MapLegend';
import { useAppStore } from '../store/appStore';
import { AlertDetailDrawer } from '../components/sidebar/AlertDetailDrawer';

export function MapPage() {
  const { data, isLoading, error } = useAlerts();

  const {
    selectedTypes,
    setSelectedTypes
  } = useAppStore();

  const alerts = data?.features || [];

  const eventTypes = [
    ...new Set(
      alerts.map(
        (alert) => alert.properties.event
      )
    )
  ].sort();

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

  const filteredAlerts = alerts.filter(
    (alert) =>
      selectedTypes.includes(
        alert.properties.event
      )
  );

  if (isLoading) {
    return <div>Loading alerts...</div>;
  }

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
          position: 'relative',
          flex: 1
        }}
      >
        <AlertMap alerts={filteredAlerts} />
        <MapLegend />
      </div>

      <AlertDetailDrawer />
    </div>
  );
}