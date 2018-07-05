# Storage & Offline Support

Cache API sirve para almacenar todos los **activos** que tengan una URL.

<table>
  <ul>
    <th>Eventos del SW</th>
    <th>Acciones del Cache</th>
    <tr>
      <td>Install</td>
      <td>Se crea el cache y se inicializan los activos</td>
    </tr>
     <tr>
      <td>activate</td>
      <td>Actualiza el cache</td>
    </tr>
     <tr>
      <td>fetch</td>
      <td>Recupera activos, del cache, de la red o de cualquier otro medio disponible</td>
    </tr>
  </ul>
</table>

## Pasos <hr>

* Tener una lista de objetos en el cache
* Utilizar los metodos de cache en el evento install de sw
* Activar en el sw creado una lista con el nombre del cache a cargar para que detecte si hay cambios y lo activamos. 

### Metodos

En el evento que manipula el sw en install vamos a utilizar **waitUnitl** y aquí es donde vamos a empezar a registrar el cache y dentro abrimos el cache

    e.weitUntil(
      caches.open(nombre_de_lista_de_objetos)
    )
El metodo **open** de cache es una *Promesa*.

El metodo **addAll** agrega todas las url que asigné en el objeto de mi cache.

El metodo **keys** nos da acceso a las llaves de la cache (es una promesa) aquí podemos comprobar cambios.<br>
En la respuesta en el then comprobamos si alguna lista de caché a cambiado. Y cada **extracción** de archivo es una promesa.

Para activar el cache es el siguiente metodo **self.clients.claim()**, esta linea le dice al sw que active los elemento actuales y que esté a la espera por cambios.

El metodo **match** busca coincidencias de peticiones.

El metodo **put** permite que todo lo que esté en la petición se asigne a el cache

    cache.put(request, resToCache)

El metodo **setItem** de localstorage para definir parametro