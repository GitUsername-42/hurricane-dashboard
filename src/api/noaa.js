const NOAA_ALERTS_URL =
  'https://api.weather.gov/alerts/active';

export async function fetchAlerts() {
  const response = await fetch(NOAA_ALERTS_URL, {
    headers: {
      Accept: 'application/geo+json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch NOAA alerts');
  }

  return response.json();
}