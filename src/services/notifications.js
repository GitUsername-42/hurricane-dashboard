export async function requestNotificationPermission() {
    if (!('Notification' in window)) {
      return false;
    }
  
    const permission =
      await Notification.requestPermission();
  
    return permission === 'granted';
  }
  
  export function showAlertNotification(alert) {
    if (Notification.permission !== 'granted') {
      return;
    }
  
    new Notification(
      alert.properties.event,
      {
        body:
          alert.properties.areaDesc ||
          'Weather Alert'
      }
    );
  }