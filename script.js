//var imageList = new Array("images/free_guy.jpg");
//var movieList = ["Titanic","Lego","Love, Rosie","d","fsffsafsfa"];

var text = document.getElementById("text");

var movie = [
{
    title : "Free Guy",
    image : "images/free-guy.jpg",
},
{
    title : "Booksmart",
    image : "images/booksmart.jpg",
},
{
    title : "The Kid Detective",
    image : "images/the-kid-detective.jpg",
},
{
    title : "Jojo Rabbit",
    image : "images/jojo-rabbit.jpg"
},
{
    title : "Boyhood",
    image : "images/boyhood.jpg",
},
{
    title : "Celeste and Jesse Forever",
    image : "images/celeste-and-jesse-forever.jpg",
},
{
    title : "Eight Grade",
    image : "images/eighth-grade.png",
},
{
    title : "The Farewell",
    image : "images/the-farewell.jpg",
},
{
    title : "The Florida Project",
    image : "images/the-florida-project.jpg",
},

];


function getMovie(){
    if (movie.length ===0){
        text.innerHTML = "Sorry, we are out of movies!"
        document.getElementById("image").src="images/end.jpg";

    } else{
        let randomPick = movie[Math.floor(Math.random() * movie.length)];
    
    text.innerHTML = randomPick.title; //randomPick;
    document.getElementById("image").src=randomPick.image;
    
    let index = movie.indexOf(randomPick);
    movie.splice(index,1);
    console.log(movie);
    

    }
    
};
