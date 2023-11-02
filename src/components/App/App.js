import { Route, Routes } from "react-router-dom";

import Main from "../Main/Main.js";
import Burger from "../Burger/Burger.js";
import { useState } from "react";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Profile from "../Profile/Profile.js";

function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  function closeBurger() {
    setIsBurgerOpened(false);
  }

  function handleOpenBurgerClick() {
    setIsBurgerOpened(true);
    console.log("onBurgerClick");
    console.log(isBurgerOpened);
  }

  return (
    <div className="wrapper">
      <Burger onClose={closeBurger} isOpened={isBurgerOpened} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isAuthorized={true}
              onBurgerClick={handleOpenBurgerClick}
              isMovies={false}
            />
          }
        />
        <Route path="/signup" element={<Register isRegister={true} />} />
        <Route path="/signin" element={<Login isRegister={false} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="movies"
          element={
            <Movies
              isAuthorized={true}
              onBurgerClick={handleOpenBurgerClick}
              isMovies={true}
            />
          }
        />
        <Route
          path="saved-movies"
          element={
            <SavedMovies
              isAuthorized={true}
              onBurgerClick={handleOpenBurgerClick}
              isMovies={true}
            />
          }
        />
        <Route
          path="profile"
          element={
            <Profile
              isAuthorized={true}
              onBurgerClick={handleOpenBurgerClick}
              isMovies={true}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
