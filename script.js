var textArea = document.getElementById("text");

var movieList = ["Titanic","Lego","Love, Rosie","d","fsf"];

function getMovie(){
    let randomPick = movieList[Math.floor(Math.random() * movieList.length)];
    textArea.innerHTML = randomPick;

    let index = movieList.indexOf(randomPick);
    movieList.splice(index,1);
    
    console.log(movieList);
}
