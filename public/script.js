//Permite pasar objetos globales n.n/ evitar ciclo con ;
((c, w, n, d)=>{
  //Para registrar mi service worker es solo una validación

  //REGISTRO DE SERVICE WORKER
  if('serviceWorker' in n){
    //Carga de la ventana
    w.addEventListener('load', ()=>{
      n.serviceWorker.register('./sw.js')
        .then( registration =>{
          c(registration)
          c('Service Worker registrado con éxito', registration.scope)
        })
        .catch( err => c(`Registro de Service Worker Fallido ${err}`) )
    })
  }

  //ACTIVANDO PERMISO DE NOTIFICACIONES
  if( w.Notification && Notification.permission !== 'denied'){
    Notification.requestPermission(status => {
      c(status)
      let n = new Notification('Titulo', {
        body: 'Soy una notificación',
        icon: './img/icon_192x192.png'
      })
    })
  }

  //Activar Sincronización de fondo
  if('serviceWorker' in n && 'SyncManager' in w){
    function registerBDSync(){
      n.serviceWorker.ready
        .then(registration => {
          return registration.sync.register('github')
            .then( () => c('Sincronización de Fondo Registrada'))
            .catch(err =>  c('No se segistró mi etiqueta'))
        })
        .catch( err => c('Fallo la Sincronización de Fondo ', err))
    }
    registerBDSync()
  }

  //Activar Share
  if(n.share !== undefined){
    d.addEventListener('DOMContentLoaded', e => {
      let shareBtn = d.getElementById('share')
      shareBtn.addEventListener('click', e =>{
        n.share({
          title: d.title,
          text: 'Hola soy un contenido para compartir',
          url: w.location.href
        })
          .then(()=>c('Contenido compartido con éxito'))
          .catch( err => c(`Error al compartir: `, err))
      })
    })
  }
})(console.log, window, navigator, document);

//Detección del Estado de la Conexión
((c, w, n, d)=>{
  const header = d.querySelector('.Header'),
    metaTagThem = d.querySelector('meta[name=theme-color]')

    function networkStatus (e) {
      c(e, e.type)

      if( n.onLine ){
        metaTagThem.setAttribute('content', '#F7FF1E')
        header.classList.remove('u-offline')
        alert('Conexión recuperada :)')
      }else{
        metaTagThem.setAttribute('content', '#666')
        header.classList.add('u-offline')
        alert('Conexión perdida :(')
      }
    }

    d.addEventListener('DOMContentLoaded', e => {
      if( !n.onLine ){
        networkStatus(this) //va a pasar el evento
      }
      w.addEventListener('online', networkStatus)
      w.addEventListener('offline', networkStatus)
    })
})(console.log, window, navigator, document);

//Interación con API de github y sincronizacion de fondo
((c, w, n, d)=>{
  const userInfo = d.querySelector('.GitHubUser'),
    searchForm = d.querySelector('.GitHubUser-form')

    //recupera
    function fetchGitHubUser (username, requestFromBGSync){
      let name = username || 'kikiondo',
        url = `https://api.github.com/users/${name}`
      
        fetch(url, { method: 'GET'})
          .then( response => response.json() )
          .then( userData => {
            if( !requestFromBGSync ) { //no a perdido la conexío en usuario
              localStorage.removeItem('github')
            }

            let template = `
            <article class="GitHubUser-info">
              <h2>${userData.name}</h2>
              <img src="${userData.avatar_url}" alt="${userData.login}"
              <p>${userData.bio}</p>
              <ul>
                <li>User GitHub ${userData.login}</li>
                <li>Url GitHub ${userData.html_url}</li>
                <li>Seguidores ${userData.followers}</li>
                <li>Siguiendo ${userData.following}</li>
                <li>Ubicación ${userData.location}</li>
              </ul>
            </article>
            `

            userInfo.innerHTML = template
          })  
          .catch( err => {
            //Si el usuario esta offline y evita una petición, está se almacenará en localStorage
            //Una vez que el usuario esté online, se activará la sincronización de fondo para recuperar la petición fallida
            localStorage.setItem('github', name)
            c(err)
          })
    }

    fetchGitHubUser(localStorage.getItem('github'))    

    searchForm.addEventListener('submit', e => {
      e.preventDefault()

      let user = d.getElementById('search').value

      if( user === '' ) return

      //Establecer parametro en localstorage
      localStorage.setItem('github', user)
      fetchGitHubUser(user)

      e.target.reset()
    })

    n.serviceWorker.addEventListener('message', e => {
      console.log('Desde la sincronización de Fondo', e.data)
      fetchGitHubUser(localStorage.getItem('github', true ))
    })
})(console.log, window, navigator, document);

//Compartiendo contenido con APi Share
((c,w,n,d)=>{

})(console.log, window, navigator, document)