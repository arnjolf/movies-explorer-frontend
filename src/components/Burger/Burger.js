import { NavLink, useMatch } from "react-router-dom";

export default function Burger({ onClose, isOpened }) {
  const isMoviesActive = useMatch("/movies");
  const isSavedMoviesActive = useMatch("/saved-movies");
  const isMainActive = useMatch("/");
  const isProfileActive = useMatch("/profile");

  return (
    <section className={`burger ${isOpened ? `burger_opened` : ""}`}>
      <div className="burger__content">
        <button className="burger__close-button" onClick={onClose}></button>
        <div className="burger__main">
          <div className="burger__links">
            <NavLink
              to="/"
              className={`burger__link ${
                isMainActive ? `burger__link_active` : ""
              }`}
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className={`burger__link ${
                isMoviesActive ? `burger__link_active` : ""
              }`}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={`burger__link ${
                isSavedMoviesActive ? `burger__link_active` : ""
              }`}
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink
            to="/profile"
            className={`burger__profile ${
              isProfileActive ? `burger__link_active` : ""
            }`}
          >
            <span>Аккаунт</span>
            <div className="burger__icon"></div>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
