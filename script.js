var textArea = document.getElementById("text");
var imageArea = document.getElementById("image")

var movieList = ["Titanic","Lego","Love, Rosie","d","fsffffffffffffffffffffffffffffffffffffffffffffffffffffffffsafssafsfa"];
var imageList = ["images/free_guy.jpg"]

function getMovie(){
    let randomPick = movieList[Math.floor(Math.random() * movieList.length)];
    textArea.innerHTML = movieList[0]; //randomPick;
    imageArea.innerHTML = imageList[0];

    let index = movieList.indexOf(randomPick);
    movieList.splice(index,1);
    
    console.log(movieList);
}
