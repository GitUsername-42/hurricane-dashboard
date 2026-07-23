import { useAppStore } from '../../store/appStore';

export function AlertDetailDrawer() {
  const { selectedAlert } = useAppStore();

  if (!selectedAlert) {
    return (
      <div
        style={{
          width: '350px',
          borderLeft: '1px solid #ddd',
          padding: '1rem'
        }}
      >
        <h3>No Alert Selected</h3>

        <p>
          Click a marker to view alert details.
        </p>
      </div>
    );
  }

  const p = selectedAlert.properties;

  return (
    <div
      style={{
        width: '350px',
        borderLeft: '1px solid #ddd',
        padding: '1rem',
        overflowY: 'auto'
      }}
    >
      <h2>{p.event}</h2>

      <p>
        <strong>Severity:</strong> {p.severity}
      </p>

      <p>
        <strong>Urgency:</strong> {p.urgency}
      </p>

      <p>
        <strong>Certainty:</strong> {p.certainty}
      </p>

      <p>
        <strong>Area:</strong> {p.areaDesc}
      </p>

      <p>
        <strong>Expires:</strong>{' '}
        {new Date(
          p.expires
        ).toLocaleString()}
      </p>

      <hr />

      <h3>Headline</h3>

      <p>{p.headline}</p>

      <h3>Description</h3>

      <p
        style={{
          whiteSpace: 'pre-wrap'
        }}
      >
        {p.description}
      </p>

      {p.instruction && (
        <>
          <h3>Instructions</h3>

          <p
            style={{
              whiteSpace: 'pre-wrap'
            }}
          >
            {p.instruction}
          </p>
        </>
      )}
    </div>
  );
}