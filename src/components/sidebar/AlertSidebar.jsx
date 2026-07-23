import { useAppStore } from '../../store/appStore';

export function AlertSidebar({
  eventTypes,
  totalAlerts
}) {
  const {
    selectedTypes,
    toggleType
  } = useAppStore();

  return (
    <div
      style={{
        width: '280px',
        padding: '1rem',
        borderRight: '1px solid #ddd',
        overflowY: 'auto'
      }}
    >
      <h2>Alert Filters</h2>

      <p>
        Active Alerts:
        {' '}
        {totalAlerts}
      </p>

      {eventTypes.map((type) => (
        <div key={type}>
          <label>
            <input
              type="checkbox"
              checked={selectedTypes.includes(
                type
              )}
              onChange={() =>
                toggleType(type)
              }
            />

            {' '}
            {type}
          </label>
        </div>
      ))}
    </div>
  );
}