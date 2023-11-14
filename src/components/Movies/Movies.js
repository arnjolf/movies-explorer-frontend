import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Preloader from "../Preloader/Preloader.js";
import SearchForm from "../SearchForm/SearchForm.js";
import ShowMore from "../ShowMore/ShowMore.js";
import { useEffect, useState } from "react";
import filterMovies from "../../utils/FilterMovie.js";
import { getLocalData, setLocalData } from "../../utils/LS.js";
import MovieSearchError from "../MovieSearchError/MovieSearchError.js";

export default function Movies({
  loggedIn,
  onBurgerClick,
  isMovies,
  allMovies,
  startCardsAmount,
  changeCurrentIndex,
  handleSaveMovie,
  handleMoreClick,
  currentIndex,
  onSubmitGetMovies,
  savedMovies,
}) {
  const [displayedMovies, setDisplayedMovies] = useState(
    getLocalData("displayedMovies") ? getLocalData("displayedMovies") : []
  );
  const [keyword, setKeyword] = useState(
    getLocalData("keyword") ? getLocalData("keyword") || "" : ""
  );
  const [isListReady, setIsListReady] = useState(false);
  const [isPreloading, setIsPreloading] = useState(false);
  const [isShort, setIsShort] = useState(
    getLocalData("isShort") ? getLocalData("isShort") || false : false
  );
  const [isError, setIsError] = useState(false);

  function handleSearchSubmit(keyword) {
    let movies = [];
    setKeyword(keyword);
    if (!allMovies.length) {
      setIsPreloading(true);
      onSubmitGetMovies()
        .then((res) => {
          changeCurrentIndex(startCardsAmount.current);
          movies = filterMovies(keyword, res, isShort);
          setDisplayedMovies(movies);
          setIsListReady(true);
          setIsPreloading(false);
          setIsError(false);
        })
        .catch(() => {
          setIsError(true);
        });
    } else {
      movies = filterMovies(keyword, allMovies, isShort);
      changeCurrentIndex(startCardsAmount.current);
      setDisplayedMovies(movies);
    }
    setLocalData("keyword", keyword);
    setLocalData("isShort", isShort);
  }

  useEffect(() => {
    setLocalData("displayedMovies", displayedMovies);
    changeCurrentIndex(startCardsAmount.current);
    setIsListReady(true);
  }, [displayedMovies]);

  // нажатие на чекбокс
  function onCheckboxChange(isShort) {
    changeCurrentIndex(startCardsAmount.current);
    setIsShort(isShort);
    setDisplayedMovies(filterMovies(keyword, allMovies, isShort));
    console.log(isShort);
    console.log(keyword);

    setLocalData("keyword", keyword);
    setLocalData("isShort", isShort);
  }

  function onMoreClick() {
    handleMoreClick(displayedMovies);
  }

  return (
    <div className="movies">
      <Header
        loggedIn={loggedIn}
        onBurgerClick={onBurgerClick}
        isMovies={isMovies}
      />
      <main className="movies__main">
        <SearchForm
          onSearchSubmit={handleSearchSubmit}
          onCheckboxChange={onCheckboxChange}
          isShort={isShort}
          keyword={keyword}
        />
        {isError && <MovieSearchError />}
        {isPreloading && <Preloader />}
        {!isError && isListReady && !isPreloading && (
          <MoviesCardList
            displayedMovies={displayedMovies.slice(0, currentIndex)}
            handleSaveMovie={handleSaveMovie}
            savedMovies={savedMovies}
            isSavedClass={"movies-card__button_saved"}
          />
        )}
        {isListReady &&
          !isPreloading &&
          displayedMovies.length - 1 >= currentIndex && (
            <ShowMore onMoreClick={onMoreClick} />
          )}
      </main>
      <Footer />
    </div>
  );
}
