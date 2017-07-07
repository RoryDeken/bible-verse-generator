
var data, version,url, book, randomChap, section, randomVerse, randomChap, randomBook, dest, size, includeTxt, versions = ["nasb","niv","nlt"], button, link = document.getElementById('link'), text = document.getElementById('text');

button = document.getElementById("start");
button.style.opacity = 0;
button.addEventListener("click", run);


var xmlhttp = new XMLHttpRequest();
url = "versions/nasb.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        data = data.bible.book;
        button.style.opacity = 1;
    }
};

// 0-38 OT  39-65 NT
function run(event){
event.preventDefault();
version = parseInt(document.getElementById('version').value);
section = parseInt(document.getElementById('section').value);
size = parseInt(document.getElementById('size').value);
book =  parseInt(Math.floor(Math.random() * (data.length - 0)) - 1);
randomBook = book;
randomChap =  parseInt(Math.floor(Math.random() * ( data[randomBook].chapter.length - 0)) - 1);
randomVerse =  parseInt(Math.floor(Math.random() * (data[randomBook].chapter[randomChap].verse.length - 0))  - 1);

switch(section){
  case 1: randomBook = book; break;
  case 2: if(book > 38){randomBook = book - 38; randomChap =  parseInt(Math.floor(Math.random() * ( data[randomBook].chapter.length - 0)) - 1); randomVerse =  parseInt(Math.floor(Math.random() * (data[randomBook].chapter[randomChap].verse.length - 0))  - 1);
 }else{randomBook = book;} break;
  case 3: if(book <= 38){randomBook = book + 38;  randomChap =  parseInt(Math.floor(Math.random() * ( data[randomBook].chapter.length - 0)) - 1); randomVerse =  parseInt(Math.floor(Math.random() * (data[randomBook].chapter[randomChap].verse.length - 0))  - 1); }else{randomBook = book;} break;
}


switch(size){

case 1: dest = "https://www.biblegateway.com/passage/?search="+ data[randomBook].name + "+" + data[randomBook].chapter[randomChap].name + "%3A" + data[randomBook].chapter[randomChap].verse[randomVerse].name + "&version=" + versions[version - 1 ];
text.innerHTML = data[randomBook].name + " " + data[randomBook].chapter[randomChap].name + ":" + data[randomBook].chapter[randomChap].verse[randomVerse].name;

break;

case 2: dest = "https://www.biblegateway.com/passage/?search="+ data[randomBook].name + "+" + data[randomBook].chapter[randomChap].name + "&version=" + versions[version - 1 ];
text.innerHTML = data[randomBook].name + " " + data[randomBook].chapter[randomChap].name;
break;

case 3: dest = "https://www.biblegateway.com/passage/?search="+ data[randomBook].name + "&version=" + versions[version - 1 ];
text.innerHTML = data[randomBook].name;

break;

default: text.innerHTML = "Something went wrong. Sorry. Try reloading the page.";

}

link.setAttribute("href", dest);
// window.open(dest);
console.log(data[randomBook].chapter.length + " " + data[randomBook].chapter[randomChap].name + ":" + data[randomBook].chapter[randomChap].verse[randomVerse].name);
console.log("Random Book: " + randomBook + "Random Chap: " + randomChap + "Random Verse: " + randomVerse);
}



// TODO: Randomize through books and then chapters and then verse each with a random selection


// TODO: Then open a new tab/window and take the user to that site with a url that is built based on their selection
