import { useEffect, useState } from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import SearchForm from "../SearchForm/SearchForm.js";
import filterMovies from "../../utils/FilterMovie.js";

export default function Movies({
  loggedIn, // зашел ли пользователь
  onBurgerClick, // нажатие на бургер
  isMovies, // для отображения в хедере
  savedMovies, // массив сохраненных фильмов
  handleDeleteMovie,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isShort, setIsShort] = useState(false);

  function handleSearchSubmit(keyword) {
    setKeyword(keyword);
    setFilteredMovies(filterMovies(keyword, savedMovies, isShort));
  }

  useEffect(
    () => setFilteredMovies(filterMovies(keyword, savedMovies, isShort)),
    [savedMovies]
  );

  // нажатие на чекбокс
  function onCheckboxChange(isShort) {
    setIsShort(isShort);

    setFilteredMovies(filterMovies(keyword, savedMovies, isShort));
  }

  return (
    <div className="saved-movies">
      <Header
        loggedIn={loggedIn}
        onBurgerClick={onBurgerClick}
        isMovies={isMovies}
      />
      <main>
        <SearchForm
          onSearchSubmit={handleSearchSubmit}
          onCheckboxChange={onCheckboxChange}
          isShort={isShort}
          keyword={keyword}
        />
        <MoviesCardList
          displayedMovies={filteredMovies}
          handleSaveMovie={handleDeleteMovie}
          isSavedClass={"movies-card__button_delete-saved"}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </div>
  );
}
