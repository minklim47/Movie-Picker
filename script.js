//var imageList = new Array("images/free_guy.jpg");
//var movieList = ["Titanic","Lego","Love, Rosie","d","fsffsafsfa"];

var text = document.getElementById("text");

var movie = [];
movie[0] = {
    title : "Free Guy",
    image : "images/free_guy.jpg",
};
movie[1] = {
    title : "Booksmart",
    image : "images/booksmart.jpg",
};

console.log(movie.length);


function getMovie(){
    let randomPick = movie[Math.floor(Math.random() * movie.length)];
    
    text.innerHTML = randomPick.title; //randomPick;
    document.getElementById("image").src=randomPick.image;
    

    

    //let index = movieList.indexOf(randomPick);
    //movieList.splice(index,1);
    
    
};
