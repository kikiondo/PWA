const CACHE_NAME = 'pwa-demo-edteam-cache-v1',
  urlsToCache = [
    './',
    './?utm=homescreen',
    './index.html',
    './index.html?utm=homescreen',
    './style.css',
    './script.js',
    './favicon.ico',
    './img/icon_192x192.png',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
  ]

self.addEventListener('install', e => {
  console.log('Evento: SW Instalado')
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos en cache')
        return cache.addAll(urlsToCache)
        .then( () => self.skipWaiting() )
        //skipWaiting forza al SW a activarse
      })
      .catch(err => console.log('Falló registro de cache', err) )
  )
})

self.addEventListener('activate', e => {
  console.log('Evento: SW Activado')
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          //Eliminamos lo que ya no se necesita en cache
          if ( cacheWhitelist.indexOf(cacheName) === -1 )
            return caches.delete(cacheName)
        })
      )
    })
    .then(() => {
      console.log('Cache actualizado')
      // Le indica al SW activar el cache actual
      return self.clients.claim()
    })
  )
})

self.addEventListener('fetch', e => {
  console.log('Evento: SW Recuperando')

  e.respondWith(
    //Miramos si la petición coincide con algún elemento del cache
    caches.match(e.request)
      .then(res => {
        console.log('Recuperando cache')
        if ( res ) {
          //Si coincide lo retornamos del cache
          return res
        }
        //Sino, lo solicitamos a la red
        return fetch(e.request)
      })
    )
})

//NOTIFICACIONES Y PUSH

self.addEventListener('push', e => {
  console.log('Evento: Push')

  let title = 'Notificación Demo',
    options = {
      body: 'Click para regresar a la aplicación',
      icon: './img/icon_192x192.png',
      vibratie: [100, 50, 100],
      data: {id: 1}, //podemos pasar data a travez de la notificación
      actions: [
        { 'action': 'Si', 'title': 'Amo esta aplicación n.n)/', icon: './img/icon_192x192.png'},
        { 'action': 'No', 'title': 'No me gusta esta aplicación u.u)/', icon: './img/icon_192x192.png'}
      ]
    }
   e.waitUntil( self.registration.showNotification(title, options) ) 
})

self.addEventListener('notificationclick', e => {
  console.log(e)

  if(e.action === 'Si'){
    console.log('Amo esta aplicacion :)')
    clients.openWindow('https://youtube.com')
  }else if( e.action === 'No'){
    console.log('No me gusta esta aplicación :(')
  }

  e.notification.close()
})

//Sincronización

self.addEventListener('sync', e => {
  console.log('Evento: Sincronización de Fondo', e)

  //Revisamos que la etiqueta de sincronización sea la que definimos o la que emula las devtools

  if(e.tag === 'github' || e.tag === 'test-tag-from-devtools'){
    e.waitUntil(
      //Comprabamos todas las pestañas abiertas y les enviamos postMessage
      self.clients.matchAll()
        .then( all => {
          return all.map(client => {
            return client.postMessage('online')
          })
        })
        .catch( err => console.log(err) )
    )
  }
})

//Message
//No tiene alcance ._.)/
// self.addEventListener('message', e => {
//   console.log('Desde la sincronización de Fondo', e.data)
//   fetchGitHubUser(localStorage.getItem('github', true ))
// })