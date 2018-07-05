# Fetch

Evalua una petición.

Es una api que nos permite poder hacer peticiones azincronas, se podría decir que es la evolución de ajax pero un poco más sencillo.

Fetch devuelve una promesa, la salida de una promesa se convierte en la entrada de otra.

Dependiendo el contenido que yo haga a una petición metiante fetch, podrí decirle que la **respuesta** se convirta a otra cosa c:

```
  (response => <...>)
```

La respuesta es una interface y se puede transformar dependiendo lo que uno necesite.

* response.text()
* response.json()
* response.blob() -> binario, puedo manipularlo con js

Igual con fetch se puede manipular archivos binarios como imagenes.

    La fallback de fetch sería ajax

## Documentación <hr>

Para utilizarlo le tenemos que dar la ruta de acceso al recurso que desea recuperar. Despuesta esta regresa un Promise que resuelve en Response a esa peticioón sea o no correcta.

**Headers**  permite realizar diversas acciones en los encabezados de solicitud y respuesta HTTP. Estas acciones incluyen recuperar, establecer, agregar y eliminar. Un Header objeto tiene una lista de encabezado asociadam que inicialemnte está vacia y consta de cero o más pares de nombre y valor.

Una Cabecera HTTP son los parámetros que se envían en una petición o respuesta HTTP. Estas cabeceras proporcionan información mediante sintaxis 'Cabecera: Valor' y son enviadas autimaticamente por el navegador o el servidor Web.

    https://es.wikipedia.org/wiki/Anexo:Cabeceras_HTTP