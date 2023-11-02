import logoIcon from "../../images/logo.svg";
import { NavLink, useMatch, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Header({ isAuthorized, onBurgerClick, isMovies }) {
  const navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const isMoviesActive = useMatch("/movies");
  const isSavedMoviesActive = useMatch("/saved-movies");

  const handleOnLogoClick = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 1090px)");
    const handleMediaQueryChange = (event) => {
      setIsLargeScreen(event.matches);
    };

    mediaQueryList.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQueryList);

    return () => {
      mediaQueryList.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <header className={`header ${isMovies ? `header_movies` : ``}`}>
      <div className="header__content">
        <img
          src={logoIcon}
          className="header__logo"
          onClick={handleOnLogoClick}
          alt="Logo"
        ></img>
        <div className={isAuthorized ? "header__nav" : "header__nav_auth"}>
          {isAuthorized ? (
            isLargeScreen ? (
              <>
                <div className="header__films">
                  <NavLink
                    to="/movies"
                    className={`header__link ${
                      isMoviesActive ? `header__link_active` : ``
                    }`}
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    to="/saved-movies"
                    className={`header__link ${
                      isSavedMoviesActive ? `header__link_active` : ``
                    }`}
                  >
                    Сохраненные фильмы
                  </NavLink>
                </div>
                <NavLink to="/profile" className="header__profile">
                  <span>Аккаунт</span>
                  <div
                    className={`header__icon ${
                      isMovies ? `header__icon_movies` : ""
                    }`}
                  ></div>
                </NavLink>
              </>
            ) : (
              <button
                className="header__burger"
                onClick={onBurgerClick}
              ></button>
            )
          ) : (
            <>
              <NavLink className="header__register" to="/register">
                Регистрация
              </NavLink>
              <NavLink className="header__login" to="/login">
                Войти
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
