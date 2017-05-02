
var version, section, size, includeTxt, button, text = document.getElementById('text');

button = document.getElementById("start");
button.addEventListener("click", run);

function run(event){
  event.preventDefault();
version = document.getElementById('version').value;
section = document.getElementById('section').value;
size = document.getElementById('size').value;
includeTxt = document.getElementById('includeTxt').checked;

text.textContent = version + " " + section + " " + size + " " + includeTxt;

}



// Randomize through books and then chapters and then verse each with a random selection


// Then open a new tab/window and take the user to that site with a url that is built based on their selection
