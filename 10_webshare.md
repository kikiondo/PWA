
#Web Share API

Se debe de activar en un escribr en el objeto navigator

* navigator.share()

Es una función que si no le pasas un argumento te marca undefined.

El share recibe un objeto

    n.share({
      title: d.title,
      text: 'Hola soy un contenido para compartir',
      url: w.location.href
    })