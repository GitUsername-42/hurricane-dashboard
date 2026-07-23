import { useAppStore } from '../../store/appStore';

export function NotificationSettings({
  eventTypes
}) {
  const {
    notificationsEnabled,
    setNotificationsEnabled,
    notificationTypes,
    toggleNotificationType
  } = useAppStore();

  return (
    <div style={{ marginTop: '2rem' }}>
      <hr />

      <h3>Notifications</h3>

      <label>
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={(e) =>
            setNotificationsEnabled(
              e.target.checked
            )
          }
        />

        Enable Browser Notifications
      </label>

      <div style={{ marginTop: '1rem' }}>
        {eventTypes.map((type) => (
          <label
            key={type}
            style={{
              display: 'block'
            }}
          >
            <input
              type="checkbox"
              checked={notificationTypes.includes(type)}
              onChange={() =>
                toggleNotificationType(type)
              }
            />

            {type}
          </label>
        ))}
      </div>
    </div>
  );
}