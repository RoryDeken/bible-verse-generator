
var data, version,url, section, size, includeTxt, options = ["nasb.json","niv.json", "nlt.json"], button, text = document.getElementById('text');

button = document.getElementById("start");
button.addEventListener("click", run);


var xmlhttp = new XMLHttpRequest();
url = "versions/nasb.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        data = data.bible.book;
        var randomBook = Math.floor(Math.random() * (data.length - 0)) + 0;
        var randomChap = Math.floor(Math.random() * ( data[randomBook].chapter.length - 0)) + 0;
        var randomVerse = Math.floor(Math.random() * (data[randomBook].chapter[randomChap].verse.length - 0)) + 0;
        console.log(data[randomBook].-name + " " + data[randomBook].chapter[randomChap].-name + " " + data[randomBook].chapter[randomChap].verse[randomVerse].-name);

    }
};

function run(event){
event.preventDefault();
version = parseInt(document.getElementById('version').value);
section = document.getElementById('section').value;
size = document.getElementById('size').value;
includeTxt = document.getElementById('includeTxt').checked;
var ver = options[version - 1];
url = "versions/" + ver;
console.log(url);

xmlhttp.open("GET", url, true);
xmlhttp.send();
}



// Randomize through books and then chapters and then verse each with a random selection


// Then open a new tab/window and take the user to that site with a url that is built based on their selection
