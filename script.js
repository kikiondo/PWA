;
//Registro de Caracteristicas de PWA's
((c,d,n,w)=>{
    // Voy a registrar un service worker SW
    if ('serviceWorker' in n) {
        w.addEventListener('load', () => {
            n.serviceWorker.register('./sw.js')
                .then(registration => {
                   c(registration)
                   c('Service Worker registrado con éxito', registration.scope)
                })
                .catch(err =>c(`Registro de Service Worker fallido`, err))
        })
    }
    //Activando el permiso de las notificaciones
    if (w.Notification && Notification.permisson !== 'denied') {
        Notification.requestPermission(status => {
           c(status)
            let n = new Notification('Titulo', {
                body: 'Soy una notificación :)',
                icon: './img/icon_192x192.png'
            })
        })
    }

    //Activar la sincronización de fondo
    if('serviceWorker' in n && 'SyncManager' in w){
        function registerBGSync(){
            n.serviceWorker.ready
            .then(registration =>{
                return registration.sync.register('github')
                .then(()=> c('Sincronización de fondo registrada')) //Necesito una palabra clave
                .catch(err => c('Falló la sincronización de fondo', err))
            })
            
        }
    }

    registerBGSync()
})(console.log, document, navigator, window);
//Deteccion del Estado de la Conexión
((c, d, n, w) => {
    const header = d.querySelector('.Header'),
        metaTagTheme = d.querySelector('meta[name=theme-color]')

        function networkStatus(e){// Es mi manejador de eventos
            c(e, e.type)

            if(n.onLine){
                metaTagTheme.setAttribute('content','#F7DF1E')
                header.classList.remove('u-offline')
                alert('Conexión Recuperada :)')
            }else{
                metaTagTheme.setAttribute('content', '#666')
                header.classList.add('u-offline')
                alert('Conexión Perdida :(')
            }
        }

        d.addEventListener('DOMContentLoaded', e=>{ //es como el documentReady de JQuery
            if(!n.onLine){
                networkStatus(this)
            }

            w.addEventListener('online', networkStatus)
            w.addEventListener('offline',networkStatus)
        })
})(console.log, document, navigator, window);
//Aplicación Demo interactuando con el API de Github y la sincronización de Fondo.
((c, d, n, w) => {

})(console.log, document, navigator, window);

((c, d, n, w) => {

})(console.log, document, navigator, window);
