const CACHE_NAME = 'pwa-demo-edteam-cache-v1',
urlsToCache = [
  './',
  '/',
  './?utm=homescreen',
  './index.html',
  '/index.html?utm=homescreen',
  './style.css',
  './script.js',
  './sw.js',
  './favicon.ico',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
]


self.addEventListener('install', e => {
  console.log('Evento: SW Instalado')
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then()
  )
})

self.addEventListener('active', e => {
  console.log('Evento: SW Activado')
})

self.addEventListener('fetch', e => {
  console.log('Evento: SW Recuperando')
})