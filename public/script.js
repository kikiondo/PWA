//Para registrar mi service worker es solo una validación

if('serviceWorker' in navigator){
  //Carga de la ventana
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('./sw.js')
      .then( registration =>{
        console.log(registration)
        console.log('Service Worker registrado con éxito', registration.scope)
      })
      .catch( err => console.log(`Registro de Service Worker Fallido ${err}`) )
  })
}