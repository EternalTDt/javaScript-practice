const numberOfFilms = +prompt("How many films did you already watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastViewedFilm = prompt("One of your's last viewed films?", ""),
      lastViewedFilmMark = prompt("How do you rank it?", ""),
      lastViewedFilm2 = prompt("One of your's last viewed films?", ""),
      lastViewedFilmMark2 = prompt("How do you rank it?", "");

personalMovieDB.movies[lastViewedFilm] = lastViewedFilmMark;
personalMovieDB.movies[lastViewedFilm2] = lastViewedFilmMark2;

console.log(personalMovieDB);