
var data, version,url, section, size, includeTxt, options = ["nasb.json","niv.json", "nlt.json"], button, text = document.getElementById('text');

button = document.getElementById("start");
button.addEventListener("click", run);


var xmlhttp = new XMLHttpRequest();
url = "versions/nasb.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        console.log(data);
    }
};




function run(event){
event.preventDefault();
version = document.getElementById('version').value.parseInt();
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
