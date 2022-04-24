## USER GUIDE

· Every user has to have node_modules installed:
Before starting the project you must realize if you have node_modules file as one of the files in this project, in case you have it, you just should type "npm start" to through the project to the web. Otherwise, you should type the command "npm install" to download node_modules files. When this process is finished, you have to type "npm start" so then the project will be through it to the website, Chrome.

## USED TOOLS and PROGRAMMING LANGUAGES

# STYLE:

      · CSS
      · SASS

# CODE:

      · HTML
      · JAVASCRIPT

## FASES DEL EJERCICIOS

Vamos a utilizar https://randomuser.me/ que nos devuelve un listado de usuarios al azar.

1. LISTADO DE USUARIOS:
    . Cada vez que se arranca la página hay que obtener 10 usuarios al azar llamando a esta API:
   https://randomuser.me/api/?results=10
    . Limpiar los datos que nos vienen de la API y quedarnos solo con la información que nos interese.
    . Guardar los datos de los usuarios en un array.
    . Pintar el listado de usuarios con nombre, ciudad, foto y nombre de usuario en pantalla.

2. Marcar como amigos:
   Cuando se haga click en uno de los usuarios del listado hay que:
    . En el objeto del usuario clickado dentro del array, hay que añadir una propiedad para marcarlo como
   amigo, por ejemplo poniendo isFriend: true.
    . Volver a pintar el listado de usuarios en pantalla:
    . Comprobar si cada usuario pintado es un amigo y en caso afirmativo pintar el color de fondo
   de otro color, por ejemplo rosa.

3. Partiendo de los dos botones que hay en los diseños, hay que:
   . Cuando la usuaria haga click en Guardar usuarios hay que guardar el listado de usuarios que se esté
   mostrando en ese momento en pantalla en el local storage.
   . Cuando la usuaria haga click en Recuperar usuarios hay que:
   . Leer los datos que haya en el local storage.
   . Sobre escribir el array de datos.
   . Volver a pintar los datos de los usuarios en pantalla
