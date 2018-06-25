# Caracteristicas

**Progresiva**: funciona para todos los usuarios, sin importar la elección de navegador, porque está construida con mejora progresiva como principio central.

    Guerra de los navegadores -> cada navegador implementaba los estandares web como le diera la gana (internet explorer)
    JQuery ofrecía un metodo para el cross browser

**Adaptable**: Tiene que adaptarce a cualquier entorno sea escritorio, móvil, tablet o lo que venga en el futuro.

**Independiente de la conectividad**: mejora con service workers para trabajar sin conexión o con redes de mala calidad. (Dar certesa al usuario que puede utilizar y que no n.n)

Son un API lo service workers que viene implementada con html5

**Estilo App**: al usuario le parece una app con interacciones y navegación estilo app, porque está construida con el modelo de shell de app. (Google está impulsando las pwa con sus guias de estilo)

//shell es coraza de aplicación//

**Fresca**: siempre actualizada gracias al proceso de actualizacíon de service worker.

**Segura**: Emitida vía HTTPS para evitar intromisiones y para garantizar que el contenido no se haya manipulado.

//Los navegadores detectan que tiene caracterisiticas de aplicación progresiva (solito manda la notificación) todo depende del trafico y el tiempo//

**Descubrible**: se puede identificar como "app" gracias al manifesto W3C y al alcance de registro de service worker, lo que permite que los motores de búsqueda la encuentren. (archivo manifest -> ayuda al ceo gracias al algoritmo de google)

**Notificable**: facilita la posibilidad de volver a interactuar a través de funciones como notificaciónes push.

**Instalable**: les permite a los usuarios "conservar" las apps que le resultan más útiles en su pantalla principal sin la molestia de una tienda de app.

**Vinculable**: Se puede compartir fácilmente vía URL, no require instalación compleja (se puede poner el icono manual en el dispositivo sin problema n.n).