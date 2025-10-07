// Lista de películas (nombre y ruta de imagen)
const movies = [
    { title: "Hocus Pocus", img: "image1.jpg" },
    { title: "El Extraño Mundo de Jack", img: "image2.jpg" },
    { title: "Casper", img: "image3.jpg" },
    { title: "Coraline", img: "image4" },
    { title: "Pesadilla en Elm Street", img: "image5.jpg" }
];

const btn = document.getElementById('randomBtn');
const movieImage = document.getElementById('movieImage');
const movieTitle = document.getElementById('movieTitle');

btn.addEventListener('click', () => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    movieImage.src = randomMovie.img;
    movieImage.style.display = "block";
    movieTitle.textContent = randomMovie.title;
});
