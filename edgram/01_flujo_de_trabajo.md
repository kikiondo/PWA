
# Work flow

Es un zip que nos ayudan a trabajar con componentes o la programación reactiva.

Se accopla a react sin ningun problema.

npm i -g npm -> Para actualizar npm o instalarlo globalmente :3.

Yarn ya no es tan rapido que npm, ya que a partir de la versión 5 npm implementa un tipo cache que es el package-lock.json que antes no lo hacia.


## Archivos sueltos <hr>

* .babelrc: Es para programar basado en componentes, sin importar si es vanilla o react, con sus respectivos presets para interoretar estos dos.

* .editorconfig: Es una herramienta para utilizar una misma indentación y configuracion de varias caracteristicas, para poder utilizarlo necesitamos de un pluguin en visual code que se llama editorConfig.

    end_of_line = 1f (terminar con una linea sin codigo)
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    indent_style = space
    indent_size = 2
    trim_trailing_whitespace = true

* .gitignore: Indica que archivos va a ignorar

* postcss.config.js : Permite transformar el css y utilizamos el pluguin de autoprefixer :)

## package.json <hr>

**scripts**:

* dev: desarrollo
* prod: preparar entorno para producción
* clean: bundel de proudcción desde 0, borra carpeta publica
* build: clean y producción
* preview: previo para ver como se veria en producción
* start: Para desarrollar ademas de servidor de desarrollo

**Dependencias de proyecto**:

* react
* react-dom

**Dependencias de desarrollo**:

El principio de loader es lo que utiliza wabpack para interpretar diferentes tipos de archivos.

Webpack funciona dandoles puntos de entrada, son solo archivos js.

* autoprefixer: autoprefixear es un pluguin del archivos postcss
* babel-cli:
* babel-core: Es el nucle de las librerias que nos permite pasar de ES6 a ES5
* babel-loader: Permite utilizar a babel dentro de webpack
* babel-preset-env: Conjunto de configuraciónes de ES6
* babel-preset-react: Configuración para interpretar codigo react en archivos js o jsx
* css-loader: Permite que webpack permita leer los arcvhios css
* extract-text-webpack-pluguin: Permite a webpack extraer el codigo css (hojas de estilos) en un archivo externo css para que no se quede en el archivo js.
* file-loader: Permite que webpack interprete archivos multimedia
* glob-all: Permite concatenar e interpretar rutas a purify-css
* html-webpack-pluguin: Permite generar archivos html finales que la aplicación necesite (supongo que solo si no son proyectos spa)
* image-webpack-loader: Pluguin que funciona con el pluguin imge-min que permite optimizar las imagenes
* json-loader: Para que webpack pueda leer archivos json
* node-sass: Para leer el scss
* optimize-css-assets-webpack-pluguin: Es un ploguin para quitar comentarios y minificar hojas de estilos
* postcss-loader: Para que webpack pueda interpretar nuestro archivo postcss
* purify-css: Depurar codigo css que no funcione, necesita leer. Pero necesita saber que archivos va a leer.
* purifycss-webpack: Para que webpack pueda interpretar purify
* reload-html-webpack-pluguin: Para que webpack detecte los cambios en los html y actualize
* resolve-url-loader: Es necesario cuando utilizamos la función url en las hojas de estilo, url: es para mandar a llamar imagenes de fondo o tipografia.
* rimraf: Comando para eliminar carptas o archivos a travez de node.
* sass-loader: Para que webpack pueda interpretar los archivos scss.
* style-loader: Para interpretar la etiqueta style en archivos
* webpack
* webpack-dev-server: tener servidor en tiempo real

## Webpack <hr>

Dos archivos webpack uno para desarrollo y otro para producción

Webpack lo interpreta node, es por eso que utiliza require ._.)/

utiliza 4 que no pueden faltar -> entrada, salida, modulos, pluguins

**puntos**

constext: Da el context, osea la carpeta principal

devtool: Si van a ocupar una herramienta de desarrollo (source-map) errores

entry: Archivo principal donde webpack va a leer las dependencias de la aplicacion

    script: vanilla
    another_script: en react

output: Caperta de publicación
    [name].js -> nombre de la propiedad del objeto entry

devServer: Opciones del servidor web
    hot: true -> recarga en vivo

module: Son reglas para decir que archivos bajo que condiciones va a leer.
    test: archivos
    exclude: que va a excluir
    use: mediante que lo va a hacer

pluguins:


create-react-app: Por defecto toda la configuración de la aplicación la cargar desde la raiz del servidor, pero si la aplicación está en una subcarpeta o subdomino gg.


**Desarrollo**

Webpack no crea archivos en desarrollo ya que lo genera en memoria c: a diferencia de gulp o scripts.
hot no ayuda de la carga dinamica. Ayuda a desarrollo más rapido, optimiza recarga !!!! :).


## Quitar lo que no necesito ._.)/ (Depurar) <hr>

Puede ser el entrypoint, como el vanilla. En el archivo de producción y de dev

El pluguin de la pagina.

Ya con esto eliminado ya se puede eliminar el archivo index.js de vanilla

img eliminar los logos.



### suit css

Son basado en componentes n.n
