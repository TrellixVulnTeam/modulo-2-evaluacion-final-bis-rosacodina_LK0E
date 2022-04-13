'use strict';

console.log('>> Ready :)');

//VARIABLES
let users = [];

//I used fetch to take the data from an external site
function fetchApi() {
  fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((data) => {
      users = data;
      console.log(users);
    });
}

//# sourceMappingURL=main.js.map
