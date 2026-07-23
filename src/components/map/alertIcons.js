import L from 'leaflet';

function createColoredIcon(color) {
  return new L.DivIcon({
    className: '',
    html: `
      <div style="
        background:${color};
        width:14px;
        height:14px;
        border-radius:50%;
        border:2px solid white;
        box-shadow:0 0 4px rgba(0,0,0,.5);
      "></div>
    `,
    iconSize: [18, 18]
  });
}

export const severityIcons = {
  Extreme: createColoredIcon('#d00000'),
  Severe: createColoredIcon('#f77f00'),
  Moderate: createColoredIcon('#ffdd00'),
  Minor: createColoredIcon('#3a86ff'),
  Unknown: createColoredIcon('#888888')
};