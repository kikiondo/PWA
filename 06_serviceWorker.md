
# Service Worker 

Los sw tienen eventos donde dentro las apis hacen acciones

<table>
  <ul>
    <th>Eventos del SW</th>
    <th>Acciones del Cache</th>
    <th>Información</th>
    <tr>
      <td>Install</td>
      <td>Se instala y se registra el service worker</td>
      <td>Se pueden crear e inicializar todos los objetos</td>
    </tr>
     <tr>
      <td>activate</td>
      <td>Se activa y está a la espera de cualquier cambio</td>
    </tr>
     <tr>
      <td>fetch</td>
      <td>Recupera activos, del cache, de la red o de cualquier otro medio disponible</td>
      <td>Si el cache falla, automaticamente busca en la red</td>
    </tr>
  </ul>
</table>

    Podemos invocarlo a si mismo con la palabra reservada **self**

## Importante <hr>
Los activos son archivos que tienen URL.

* Hojas de estilos
* Archivos js
* Imagenes
* Petición de una pagina

## Servidor proxy (procurador) <hr>

Es un intermediario en las peticiones de recursos que realiza un cliente (A) a otro servidor (C).

*  Intercepta conexiones de red hechas desde un cliente a un servidor de destino.

### Metodos 

**waitUntil()** es un método que nos dice que el evento está en curso o sirve para detectar si ese trabajo fue exitoso.

En los sw el metodo le dice al navegador que el trabajo está en curso hasta que la promesa se resuelva y no debe de terminar el sw si desea que ese trabajo se complete.

En las pwa nos permite tener interacción con el cache

https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil

**self.clients.claim()** Es un metodo de los sw esta linea le dice al sw que active los elemento actuales y que esté a la espera por cambios.

**respondWith** es un metodo que permite mirar el cache al sw

<hr>

### Propiedad

**ready**: Cuando ya está registrado. Este lanza una promesa 

**sync**: Propiedad paea sincronización y tiene un metodo que se llama **register()** que dentro necesita de una etiqueta, que es una palabra clave con la cual voy a evaluar la tarea. Y regresa una promesa