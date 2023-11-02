import filmImage from "../../images/1stFilm.png";

export default function MoviesCard({ isSaved }) {
  return (
    <div className="movies-card">
      <div className="movies-card__title">
        <h2 className="movies-card__name">В погоне за Бенкси</h2>
        <p className="movies-card__duration">0ч 42м</p>
      </div>
      <img className="movies-card__image" src={filmImage} />
      <button
        className={`movies-card__button ${
          isSaved ? `movies-card__button_saved` : ``
        }`}
      >
        {isSaved ? "" : "Сохранить"}
      </button>
    </div>
  );
}
