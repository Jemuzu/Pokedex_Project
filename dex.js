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

function greetingTrainer(){
  var text;
  var text2
  var Trainer = prompt('Enter your name',"");
  if (Trainer == null || Trainer == undefined || Trainer == "" ) {
  text = "You must enter your name, Trainer!"
} else {
  text = "Welcome to the world of Pokemon , Trainer " + Trainer + " , you're about to begin your Pokemon journey" + "!";
  text2 = "The next step is to pick your Pokemon Team!"
}
document.getElementById("Greeting").innerHTML = text2;
document.getElementById("changetoName").innerHTML = text;
}

function TrainerName(){
  prompt('Please enter your trainer name:')
  console.log(prompt)
}


class trainer {
  constructor(TrainerName) {
    Pokemon: pokemon.push.name
    Jay: []
  }
}
