'use strict';

console.log('>> Ready :)');
//CONSTANTS

//cuando la pag cargue que se haga una peticion a la api con fecth, relleno un arrya con lo que devuelva la api. funcion que caundo la web cargue que se imprima consola "he cargado" y caundo eso pase meto el fecth y luego lo meto en la lista y después inteno implementar el onloa
//VARIABLES
let users = [];

//FUNCTIONS

//I used fetch to take the data from an external site
function fetchApi() {
  fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((data) => {
      users = data.results;
      console.log(users);
    });
}

console.log('enlazado');

function myFunction() {
  alert('Page in load');
  console.log('carga');
}

//# sourceMappingURL=main.js.map
