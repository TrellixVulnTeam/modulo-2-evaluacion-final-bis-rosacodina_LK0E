FASES DEL EJERCICIOS

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
