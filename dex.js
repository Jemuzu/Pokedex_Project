

//A function that belongs to an object.
//Use the same name as the existing method to overwrite a method.

// alert("Hi, welcome to the world of Pokemon!");

// alert("Humans and Pokemon live together in harmony!")
for (let i = 0; i <= 100; i++) {
 const url = `https://fizal.me/pokeapi/api/v2/id/${i}.json`;
 fetch(url)
    .then(res5 => res5.json())
   .then(res5 => {
     console.log(res5.name)
   });
}

class trainer {
  constructor() {
  pokemon=[]
  this.id
  this.abilities

  let pokemon= new Pokemon()
}};

function navBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
