
var data, version,url, section, dest, size, includeTxt, versions = ["nasb","niv","nlt"], options = ["nasb.json","niv.json", "nlt.json"], button, link = document.getElementById('link'), text = document.getElementById('text');

button = document.getElementById("start");
button.addEventListener("click", run);


var xmlhttp = new XMLHttpRequest();
url = "versions/nasb.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        data = data.bible.book;
        run();
        var randomBook = Math.floor(Math.random() * (data.length - 0)) + 0;
        var randomChap = Math.floor(Math.random() * ( data[randomBook].chapter.length - 0)) + 0;
        var randomVerse = Math.floor(Math.random() * (data[randomBook].chapter[randomChap].verse.length - 0)) + 0;
      text.innerHTML = data[randomBook].name + " " + data[randomBook].chapter[randomChap].name + ":" + data[randomBook].chapter[randomChap].verse[randomVerse].name;
      link.setAttribute("href", dest);
// window.open(dest);
console.log(size);
switch(size){

case 0: dest = "https://www.biblegateway.com/passage/?search="+ data[randomBook].name + "+" + data[randomBook].chapter[randomChap].name + "%3A" + data[randomBook].chapter[randomChap].verse[randomVerse].name + "&version=" + versions[version - 1 ];
break;

case 1: dest = "https://www.biblegateway.com/passage/?search="+ data[randomBook].name + "+" + data[randomBook].chapter[randomChap].name + "&version=" + versions[version - 1 ];
break;

case 2: dest = "https://www.biblegateway.com/passage/?search="+ data[randomBook].name + "&version=" + versions[version - 1 ];


}

link.setAttribute("href", dest);
    }
};

function run(){
version = parseInt(document.getElementById('version').value);
section = document.getElementById('section').value - 1;
size = document.getElementById('size').value - 1;
includeTxt = document.getElementById('includeTxt').checked;
console.log(url);

xmlhttp.open("GET", url, true);
xmlhttp.send();
}



// Randomize through books and then chapters and then verse each with a random selection


// Then open a new tab/window and take the user to that site with a url that is built based on their selection
