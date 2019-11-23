
//A function that belongs to an object.
//Use the same name as the existing method to overwrite a method.

// alert("Hi, welcome to the world of Pokemon!");

// alert("Humans and Pokemon live together in harmony!")
for (let i = 0; i <= 100; i++) {
 const url = `https://fizal.me/pokeapi/api/v2/id/${i}.json`;
 fetch(url)
    .then(res5 => res5.json())
   .then(pokemon => {
     console.log(pokemon)
   });
}

/*function pickTrainer(name, trainerAvatar) {
  class Trainer
  this.Trainer = Trainer
  this.trainerAvatar:
  this.name:
}
}*/

class trainer {
  constructor() {
  var Trainer = {pokemon: "name", def: "defense", atk: "attack", hitPoints: "hp"}
  poke: this.name
  atk: this.atk
  defense: this.defense
  hp: this.hp
  abilities: this.abilities

  let team = new name(name, abilities, def, atk, hitPoints)
  }
}
