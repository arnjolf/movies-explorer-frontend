import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    <div className="movies-list">
      <div className="movies-list__grid">
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={false} />
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={true} />
        <MoviesCard isSaved={true} />
      </div>
    </div>
  );
}
