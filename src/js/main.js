'use strict';

console.log('>> Ready :)');
//CONSTANTS

const usersSection = document.querySelector('.js__usersList');

////////cuando la pag cargue que se haga una peticion a la api con fecth, relleno un arrya con lo que devuelva la api. funcion que caundo la web cargue que se imprima consola "he cargado" y caundo eso pase meto el fecth y luego lo meto en la lista y después inteno implementar el onloa
//VARIABLES
let users = [];

//FUNCTIONS

function paintUsers() {
  let html = '';
  ///////for to go through the array
  for (const item of users) {
    html += `<div>`;

    html += `<li>`;
    html += `<h2>${users.name}h2>`;
    html += `<h2>${users.location}h2>`;
    html += `<h2>${users.picture}h2>`;
    html += `<h2>${users.id.name}h2>`;
    html += `</li>`;

    html += `</div>`;
  }
  /////////////In my ul  I brought from my HTML, I introduce the html of the let variable
  usersSection.innerHTML = html;
}

//////////////I used fetch to take the data from an external site
function fetchApi() {
  fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((data) => {
      users = data.results;
      paintUsers();
    });
}

/////////Function to refresh the web and then the list is reload again and again
function myFunction() {
  alert('Page in load');
  console.log('carga');
}

//function listUsers() {
//for (const item of users) {
//usersSection.innerHTML += `
// <div>
//<li> ${item.name} </li>
//<li> ${item.location} </li>
//<li> ${item.picture} </li>
//<li> ${item.id} </li>
//</div>    `;
//console.log('hola');
//}
//}
