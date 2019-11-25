//A function that belongs to an object.
//Use the same name as the existing method to overwrite a method.
function greetingTrainer() {
  var text;
  var text2;
  var text3;
  var trainerName = prompt('Enter your name', "");
  if (trainerName == null || trainerName == undefined || trainerName == "") {
    text = "You must enter your name, Trainer!"
  } else {
    text = `Hi ${trainerName}, Welcome to the world of Pokemon, You are about to embark on your Pokemon journey!;`
    text2 = `Create your Pokemon team, ${trainerName}`
    text3 = `${trainerName}'s Pokemon team is:`
    document.getElementById("Greeting").innerHTML = text2;
    document.getElementById("changetoName").innerHTML = text;
    document.getElementById("pokedex").innerHTML = text3;
    // let trainer = new trainer(trainerName)
  }
}

queryPokemonAPI = (id) => {
  const url = `https://fizal.me/pokeapi/api/v2/id/${id}.json`;
  fetch(url)
    .then(resp => resp.json())
    .then(data => {

      pokemon = new Pokemon(data)
      trainer.pokemonlist.push(pokemon)
      //hp = Pokemon
      //attack =
      //speed =
      //defense =
      //abilities =
      //let pokeTrainer = new Trainer()
      console.log(pokemon)
    })
  }


class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemonlist = []
    }
  }
  trainer = new Trainer('James')
class Pokemon {
  constructor(data){
    this.name = data.name;
    this.defense = data.stats[3].base_stat
    this.attack = data.stats[4].base_stat
    this.hp= data.stats[5].base_stat
    //this.abilities = abilities//
  }
}

function TrainerName() {
  prompt('Please enter your trainer name:')
  console.log(prompt)
}

function getPokemonName(){

  var id1 = prompt('Please enter your pokemon id:')
queryPokemonAPI(id1)
  var id2 =  prompt('Please enter another pokemon id:')
queryPokemonAPI(id2)
  var id3 =  prompt('Please enter a third pokemon id:')
queryPokemonAPI(id3)
  }

  all()
   let id = 0; id <= trainer.pokemonlist id++ 
  return pokemon[id]
     }
   }
