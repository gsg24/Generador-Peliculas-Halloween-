// Lista de películas (nombre y ruta de imagen)
const movies = [
    { title: "Coraline", img: "image1.jpg" },
    { title: "Casper", img: "image2.jpg" },
    { title: "Mansión Encantada", img: "image3.jpg" },
    { title: "Pesadilla antes de Navidad", img: "image4.jpg" },
    { title: "Cazafantasmas", img: "image5.jpg" }
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
