//A function that belongs to an object.
//Use the same name as the existing method to overwrite a method.
const pokedex = document.getElementById('poke-container');
queryPokemonAPI = (id) => {
  const url = `https://fizal.me/pokeapi/api/v2/id/${id}.json`;
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      pokemon = new Pokemon(data)
      trainer.team.push(pokemon)
      var text5;
      text5 = `Your team is: ${trainer.team}`
      Pokemon.prototype.toString = function pokemonToString() {
      var ret = this.name + '      Stats:       ' + 'Attack:' + this.attack + ' Defense: ' + this.defense + '     Abilities: ' + this.abilities;
      return ret;
      console.log(ret)
    }

      document.getElementById("atk").innerHTML = text5;
      //hp = Pokemon
      //attack =
      //speed =
      //defense =
      //abilities =
      //let pokeTrainer = new Trainer()
    })
}

function greetingTrainer(data) {
  var text;
  var text2;
  var text3;
  var trainerName = prompt('Enter your name', "");
  if (trainerName == null || trainerName == undefined || trainerName == "") {
    text = "You must enter your name, Trainer!"
  } else {
    text = `Hi ${trainerName}, Welcome to the world of Pokemon, You are about to embark on your Pokemon journey!`
    text2 = `Create your Pokemon team, ${trainerName}`
    text3 = `${trainerName}'s Pokemon team is: ${trainer}`
    document.getElementById("Greeting").innerHTML = text2;
    document.getElementById("changetoName").innerHTML = text;
    document.getElementById("pokedex").innerHTML = text3;
    // let trainer = new trainer(trainerName)
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
    this.team = []
  }
}
all = () => {
  return this.team
}

get = (id) => {
  for (let i = 0; i < this.team.length; i++) {
    if (id == this.team[i].name) {
      return this.team[i]
    }
  }
}
trainer = new Trainer('James')
class Pokemon {
  constructor(data, trainerName) {
    this.sprites = data.sprites.front_default;
    this.name = data.name;
    this.defense = data.stats[3].base_stat
    this.attack = data.stats[4].base_stat
    this.hp = data.stats[5].base_stat
    this.abilities = data.abilities[0].ability.name

    var text6;
    var text7;
    var text8;

    text6 = `hitPoints ${this.hp}`
    text7 = `defense: ${this.defense}`
    text8 = `abilities ${this.abilities}`
    document.getElementById("hp").innerHTML = text6;
    document.getElementById("def").innerHTML = text7;
    document.getElementById("abilities").innerHTML = text8;
  }
}

function TrainerName() {
  prompt('Please enter your trainer name:')
}

function getPokemonName() {

  let id1 = prompt('Please enter your pokemon id:')
  queryPokemonAPI(id1)
  let id2 = prompt('Please enter another pokemon id:')
  queryPokemonAPI(id2)
  var id3 = prompt('Please enter a third pokemon id:')
  queryPokemonAPI(id3)
}
