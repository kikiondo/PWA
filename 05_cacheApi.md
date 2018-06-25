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
      <td>active</td>
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
* Utilizar los metodos de cache

### Metodos

En el evento que manipula el sw en install vamos a utilizar **waitUnitl** y aquí es donde vamos a empezar a registrar el cache y dentro abrimos el cache

    e.weitUntil(
      caches.open(nombre_de_lista_de_objetos)
    )

El metodo open de cache es una *Promesa*