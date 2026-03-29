self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.matchAll({type:'window'}).then(list => {
    for (const c of list) { if (c.url && 'focus' in c) return c.focus(); }
    return clients.openWindow('/');
  }));
});
