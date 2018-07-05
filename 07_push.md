# Push & Notificatios API

## Push API

* Maneja el evento push
* Suscribe los servicios push
* Envía mensajes push (cliente servidor)

## Notification API

* Crear y configurar notificaciones
* Maneja eventos de notificaciones

Se registran en la ventana c:, se pide permiso al usuario para que se pueda interactuar con las notifiaciones

    if( window.Notification && Notification.permission !== 'denied'){
      Notification.requestPermission(status => {
        console.log(status)
        let n = new Notification('Titulo', {
          body: 'Soy una notificación',
          icon: './img/'
        })
      })
    }

Quien ejecuta push es el service worker

Metodo **self.registration.showNotification(titulo, opciones)**

## Eventos de notificaciones <hr>

**notificationclick**: Cuando se cierra

**notificationclose**: Cuando se da click

Estas dos tienen una propiedad que es action, depende donde se de click es lo que tendrá de contenido.

Se pueden cerrar con e.notification.close()

Se pueden abrir paginas nuevas al clickear una notificación con el objeto **clients.openWindow**