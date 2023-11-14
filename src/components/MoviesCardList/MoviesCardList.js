import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({
  displayedMovies,
  handleSaveMovie,
  savedMovies,
  isSavedClass,
}) {
  return (
    <>
      {displayedMovies.length ? (
        <section className="movies-list">
          <div className="movies-list__grid">
            {displayedMovies.map((movie) => (
              <MoviesCard
                movie={movie}
                key={movie.id ? movie.id : movie.movieId}
                handleSaveMovie={handleSaveMovie}
                isSavedClass={isSavedClass}
                savedMovies={savedMovies}
              />
            ))}
          </div>
        </section>
      ) : (
        <p className="movie-list__not-found">Ничего не найдено</p>
      )}
    </>
  );
}
