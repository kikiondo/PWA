# Tecnologías Core PWA's

Todas las APIS de HTML5 con la que se interactuan es por medio de promesas

* Responsive Design
* App Shell Architecture
* Manifest.json
* Service Worker API
* Storage & Offline Support
* Push & Notifications API
* Y todo lo que la web pueda hacer (api de bateria, camara microfono etc) API's HTML5

Consumimos más que crear promesas n.n.<br>
Es más facil utilizar la API de Fetch

## Responsive Design <hr>

Buenas prácticas de CSS

1) Maquetación Fluída
2) Multimedios Flexibles (Todo lo que no es texto)
3) Uso de Media Queris

**Maquetación Fluída**: Nunca haga que los usuarios se desplacen horizontalmente.

No se olviden de la meta etiqueta Viewport n.n -> Le dice al navegador como debe de interpretar el contenido en base al area de visualización del dispositivo

**Multimedios Flexibles**: 

* Evitar imágenes siempre que sea posible
* Utilizar formatos vectoriales cuando sea posible
* Utilizar resolución y calidad más baja posible
* Utiliza el formato adecuado para el tipo de imagen (Webp, png, jpg, gif)

https://escss.blogspot.com/2014/10/responsive-images-picture-srcset.html

**Media Queris**

min-width. Los Breakpoints del menor al mayor n.n)/

Libro de responsive design

    320px
    480px
    600px
    768px
    1024px
    1200px

    Dependiendo la resolucíon podemos manejar que contenido mostrar, ayuda a la experiencia y depende de donde está el usuario n.n
    //Mejora su experiencia 

Podemos controlar las media queries con js

Objetos

**Window.matchMedia()**: Nos devuelve un true o un false si la mediaquery se cumple (metodo que cuelga de window)

**MediaQueryList**:  El objeto de la lista de las media queris

**MediaQueryListener**: Podemos lanzar y manejar eventos en media queris

## App Shell Architecture <hr>

Es la arquitectura que va a formar la interfaz basica que va a formar nuestra aplicación.

Es la coraza de nuestra aplicación, se va a cargar primero.

Nos permite separar la infra estructura de la aplicación, saber que es parte de los datos y que es de la interfaz basica

El objetivo es que primero cargue en cache la ui generica y ya despues los datos n.n

**Renderización**

* Server-side Rendering (SSR)
* Client-side Rendering (CSR)

**Content First**

Remover es como ultimo recurso del DOM original, ya que es una de las cosas más costosas del navegador.

elemento que al inicio de la renderización existe y lo eliminamos es costoso (documento html)

* Reordena
* Reposiciona
* Reemplaza
* Remueve (como último recurso)

Este ordenamiento se puede lograr con Flexbox y Grid

## Manifest.json

Es un archivo JSON que permite controlar cómo se muestra la PWA al usuario en áreas donde normalmente ven apps nativas, ademas indica su apariencia al iniciarse.

Nos ayuda a especificar:

* Nombre.
* Ícono.
* URL de inicio.
* Modo de Visualización (navegador o standalone) que se comporte como aplicación nativa.
* Orientación.
* Color de Fondo y de Tema. (pintar en el dispositivo movil o fondo de la aplicación si está en standalone).
* Iconos de nuestra aplicación.


El manifest va a compañado de un par de meta etiquetas en el html, para que los navegadores de los dispositivos detecten las caracteristicas de pwa.

Etiqueta para que el navegador lea el archivo manifest

```
 <link rel="manifest" href="./manifest.json">
 Barra de navegación del dispositivo
 <meta name="theme-color" content="#F7DF1E"> 

 <link rel="manifest" href="./manifest.json">
    <meta name="theme-color" content="#F7DF1E"> 

    <!-- Detección de Icono de PWA -->
    <link rel="icon" type="image/png" sizes="16x16" href="./img/icon_16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./img/icon_32x32.png">
    <link rel="icon" type="image/png" sizes="64x64" href="./img/icon_64x64.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./img/icon_96x96.png">
    <link rel="icon" type="image/png" sizes="128x128" href="./img/icon_128x128.png">
    <link rel="icon" type="image/png" sizes="192x192" href="./img/icon_192x192.png">
    <link rel="icon" type="image/png" sizes="256x256" href="./img/icon_256x256.png">
    <link rel="icon" type="image/png" sizes="384x384" href="./img/icon_384x384.png">
    <link rel="icon" type="image/png" sizes="512x512" href="./img/icon_512x512.png">
    <link rel="icon" type="image/png" sizes="1024x1024" href="./img/icon_1024x1024.png">
    
    <!-- Metatags iOS -->
    //Que se comporte como aplicación
    <meta name="apple-mobile-web-app-capable" content="yes">
    //Tema para la barra de estatus (black, white, transparetn)
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-title" content="PWA Demo">
    <link rel="apple-touch-icon" sizes="192x192" href="./img/icon_192x192.png">
   
    <!-- Metatags Windows -->
    <meta name="msapplication-TileColor" content="#F7DF1E">
    <meta name="msapplication-TileImage" content="./img/icon_192x192.png">
    
    <!-- Otros Metatags -->
    <meta property="og:title" content="PWA Demo">
    <meta property="og:locale" content="es_MX">
    <meta property="og:type" content="website">
    <meta property="og:image" content="./img/icon_128x128.png">
    <meta property="og:site_name" content="EDteam">
    <meta property="og:url" content="https://pwa.ed.team">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
```


"start_url": "./?utm=homescreen"

Desde donde va a comenzar mi url

La variable utm ayuda a que cuando la aplicación esté en un servidor seguro solita la aplicación sugiera guardar el acceso directo en la pantalla de inicio.


## Service Worker API <hr>

Es un proceso en segundo planoe en el navegador, tiene un ciclo de vida, require https, se registra en el objeto **navigator**,
se comunica con la apliación a través de mensajes, hace funciones de proxy.

Nos permite ejecutar las caracteristicas de las pwa y da ciertas interacciónes muy similares a un app nativa

Son secuencias de comando que el navegador ejecuta en segundo plano. Te permite acceder a funciones que no requiren interacción con el usuario, como notificaciones push, sincronización en segundo plano, expreiencias sin conexión.

Todas estas opciones se van a poder ejecutar y registrar en el service worker

Entra en **segundo plano** solicitando tareas por ejemplo

* Sincronisación en segundo plano
* Almacenamiento en cache (sistema de almacenamiento que queramos chrom dev tools)
* Deplegar notificaciones, etc

La primeras vez registra todo en cache, y cada vez que tengamos problemas de conexión, va a solicitar la información a caché.
Funciona como un servidor de proxy, dependiendo el estado de concexión solicita los datos.

Este solo se puede consumir en localhost o https.
(ya que se hacen peticiones en segundo plano y pueden ser interceptados).

**Ciclo de vida**

* Instala
* Activa