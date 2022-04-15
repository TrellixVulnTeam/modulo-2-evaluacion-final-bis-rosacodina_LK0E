'use strict';

console.log('>> Ready :)');
//CONSTANTS

const usersList = document.querySelector('.js__usersList');

////////cuando la pag cargue que se haga una peticion a la api con fecth, relleno un arrya con lo que devuelva la api. funcion que caundo la web cargue que se imprima consola "he cargado" y caundo eso pase meto el fecth y luego lo meto en la lista y después inteno implementar el onloa
//VARIABLES
let users = [];

//FUNCTIONS

/////////Function to refresh the web and then the list is reload again and again
function myFunction() {
  alert('Page in load');
  console.log('carga');
}

/* FOR cadaElementoDemilista OF milista{

    cadaElementoDemilista
}

let html = " ";

html += "h1";
html +="h2"

*/

//////////////I used fetch to take the data from an external site
function fetchApi() {
  fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((data) => {
      users = data.results;
      console.log(users);
      paintUsers();
    });
}

function handleClicUser(event) {
  console.log('cacac');
  console.log(event.currentTarget.id);
}

function paintUsers() {
  //To paint or
  let html = '';
  //////for to go through the array
  for (const item of users) {
    html += `_____________________________________________`;
    html += `<li class="js__user id=${item.id}">`;
    html += `<img src="${item.picture.medium}"</image>`;
    html += `<h2> Nombre: ${item.name.first}  ${item.name.last}</h2>`;
    html += `<h2>Nombre de usuario: ${item.login.username}</h2>`;
    html += `<h2> Ciudad: ${item.location.city}</h2>`;
    html += `</li>`;
    html += `</div>`;
    html += `_____________________________________________`;
    /////////////In my ul  I brought from my HTML, I introduce the html of the let variable
  }
  usersList.innerHTML = html;
}

const userButton = document.querySelectorAll('.js__user');
for (const item of userButton) {
  item.addEventListener('click', handleClicUser);
}

//# sourceMappingURL=main.js.map
