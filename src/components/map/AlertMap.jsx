import { useAppStore } from '../../store/appStore';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { severityIcons } from './alertIcons';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';

function getPolygonCenter(coordinates) {
  const points = coordinates[0];

  let latSum = 0;
  let lngSum = 0;

  points.forEach(([lng, lat]) => {
    latSum += lat;
    lngSum += lng;
  });

  return [
    latSum / points.length,
    lngSum / points.length
  ];
}

export function AlertMap({ alerts }) {
  const { setSelectedAlert } =
  useAppStore();
  return (
    <MapContainer
      center={[39.5, -98.35]}
      zoom={4}
      style={{
        height: '100vh',
        width: '100%'
      }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup>
        {alerts.map((alert) => {
          if (
            !alert.geometry ||
            alert.geometry.type !== 'Polygon'
          ) {
            return null;
          }

          const center = getPolygonCenter(
            alert.geometry.coordinates
          );
          
          return (
            <Marker
              key={alert.id}
              position={center}
              icon={
                severityIcons[
                  alert.properties.severity
                ] || severityIcons.Unknown
              }
              eventHandlers={{
                click: () =>
                  setSelectedAlert(alert)
              }}
            >
              <Popup>
                <div style={{ minWidth: '250px' }}>
                  <h3>
                    {alert.properties.event}
                  </h3>

                  <p>
                    <strong>Severity:</strong>{' '}
                    {alert.properties.severity}
                  </p>

                  <p>
                    <strong>Urgency:</strong>{' '}
                    {alert.properties.urgency}
                  </p>

                  <p>
                    <strong>Area:</strong>{' '}
                    {alert.properties.areaDesc}
                  </p>

                  <p>
                    <strong>Expires:</strong>{' '}
                    {new Date(
                      alert.properties.expires
                    ).toLocaleString()}
                  </p>

                  <hr />

                  <p>
                    {alert.properties.headline}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}