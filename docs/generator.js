
var data, version,url, book, dice, randomChap, section, randomVerse, randomChap, randomBook, dest, size, includeTxt, versions = ["nasb","niv","nlt"], button = document.getElementById('start'), link = document.getElementById('link'), text = document.getElementById('text');

button = document.getElementById("start");
button.style.opacity = 0;
link.style.opacity = 0;
button.addEventListener("click", run);
dice = document.getElementById("dice");

var xmlhttp = new XMLHttpRequest();
url = "versions/nasb.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        data = data.bible.book;
        button.style.opacity = 1;
        button.click();
    }
};

// 1-39 OT  40-66 NT Psalms = 19  Proverbs = 20
function run(event){
event.preventDefault();
 if(dice.className == "spin"){
     dice.className = "";
 }else {
    dice.className = "spin";
 }
version = parseInt(document.getElementById('version').value);
section = parseInt(document.getElementById('section').value);
size = parseInt(document.getElementById('size').value);
switch(section){

  case 1: randomBook =  data[generateRand(data.length)];
  break;

  case 2: randomBook =  data[generateRand(39)];
  break;

  case 3: randomBook =  data[18 + generateRand(3)];
  break;

  case 4: randomBook =  data[generateRand(66,40 )]
  break;
        
  default: randomBook =  data[generateRand(data.length)];
}

randomChap =   Array.isArray(randomBook.chapter) ? generateRand(randomBook.chapter.length): randomBook.chapter;
randomVerse =  Array.isArray(randomBook.chapter) ? generateRand(randomBook.chapter[randomChap].verse.length) : generateRand(randomBook.chapter.verse.length);


switch(size){

case 1: dest = "https://www.biblegateway.com/passage/?search="+ randomBook.name + "+" + randomBook.chapter[randomChap].name + "%3A" + randomBook.chapter[randomChap].verse[randomVerse].name + "&version=" + versions[version - 1 ];
text.innerHTML = randomBook.name + " " + randomBook.chapter[randomChap].name + ":" + randomBook.chapter[randomChap].verse[randomVerse].name;

break;

case 2: dest = "https://www.biblegateway.com/passage/?search="+ randomBook.name + "+" + randomBook.chapter[randomChap].name + "&version=" + versions[version - 1 ];
text.innerHTML = randomBook.name + " " + randomBook.chapter[randomChap].name;
break;

case 3: dest = "https://www.biblegateway.com/passage/?search="+ randomBook.name + "&version=" + versions[version - 1 ];
text.innerHTML = randomBook.name;

break;

default: text.innerHTML = "Something went wrong. Sorry. Try reloading the page.";

}



link.setAttribute("href", dest);
 link.style.opacity = 1;

}

function generateRand(max, min = 0){


  max = max -1;


return  parseInt(Math.floor(Math.random() * (max - min) + min));

}

// TODO: Randomize through books and then chapters and then verse each with a random selection


// TODO: Then open a new tab/window and take the user to that site with a url that is built based on their selection
