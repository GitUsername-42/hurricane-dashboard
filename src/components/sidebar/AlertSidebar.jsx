import { useAppStore } from '../../store/appStore';
import { NotificationSettings } from './NotificationSettings';

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

      <hr />

      {/* <h3>Notifications</h3>

      <p>
        Browser notifications enabled.
      </p> */}
      
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
      <div style={{ marginTop: '2rem' }}>
        <NotificationSettings eventTypes={eventTypes} />
      </div>
    </div>
  );
}