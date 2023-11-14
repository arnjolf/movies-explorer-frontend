import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import SearchForm from "../SearchForm/SearchForm.js";
import ShowMore from "../ShowMore/ShowMore.js";

export default function Movies({ isAuthorized, onBurgerClick, isMovies }) {
  return (
    <div className="movies">
      <Header
        isAuthorized={isAuthorized}
        onBurgerClick={onBurgerClick}
        isMovies={isMovies}
      />
      <main>
        <SearchForm />
        <MoviesCardList />
        <ShowMore />
      </main>
      <Footer />
    </div>
  );
}
