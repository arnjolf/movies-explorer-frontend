export default function MoviesCard({
  movie,
  handleSaveMovie,
  isSavedClass,
  savedMovies,
}) {
  let min, hours;
  let idOfMovie = movie.id ? movie.id : movie.movieId;

  const isSaved = savedMovies.some(
    (savedMovie) => savedMovie.movieId === idOfMovie
  );
  function getDuration() {
    min = movie.duration % 60;
    hours = Math.floor(movie.duration / 60);
  }

  getDuration();

  function onSave() {
    handleSaveMovie(movie, isSaved);
  }

  let imageUrl;
  if (movie.image.url) {
    imageUrl = `https://api.nomoreparties.co/${movie.image.url}`;
  } else {
    imageUrl = movie.image;
  }

  return (
    <div className="movies-card">
      <div className="movies-card__title">
        <h2 className="movies-card__name">{movie.nameRU}</h2>
        <p className="movies-card__duration">
          {hours}ч {min}м
        </p>
      </div>
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className={"movies-card__link"}
      >
        <img
          className="movies-card__image"
          src={imageUrl}
          alt="Карточка фильма"
        />
      </a>
      <button
        onClick={onSave}
        className={`movies-card__button ${isSaved ? isSavedClass : ``}`}
      >
        {isSaved ? "" : "Сохранить"}
      </button>
    </div>
  );
}
