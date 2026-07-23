export function MapLegend() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1000,
        background: 'white',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,.2)'
      }}
    >
      <div>🔴 Extreme</div>
      <div>🟠 Severe</div>
      <div>🟡 Moderate</div>
      <div>🔵 Minor</div>
      <div>⚪ Unknown</div>
    </div>
  );
}