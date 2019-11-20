

//A function that belongs to an object.
//Use the same name as the existing method to overwrite a method.

// alert("Hi, welcome to the world of Pokemon!");

// alert("Humans and Pokemon live together in harmony!")

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET"," "https://fizal.me/pokeapi/api/v2/id/706.json", true);
  xhttp.send();
}
