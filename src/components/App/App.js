import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "../Main/Main.js";
import Burger from "../Burger/Burger.js";
import { useEffect, useState, useRef } from "react";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Profile from "../Profile/Profile.js";
import { UserContext } from "../../contexts/CurrentUserContext.js";
import { register, auth, tokenAuth } from "../../utils/Auth.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { MainApi } from "../../utils/MainApi.js";
import { getMovies } from "../../utils/MoviesApi.js";

function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [allMovies, setAllMovies] = useState([]); // all films
  const [savedMovies, setSavedMovies] = useState([]); // сохраненные фильмы

  const startCardsAmount = useRef(0); // сколько начальных карточек
  const [currentIndex, setCurrentIndex] = useState(0);
  const [amountMoreMovies, setAmountMoreMovies] = useState(3);

  const [serverError, setServerError] = useState("");
  const [profileError, setProfileError] = useState("");

  const navigate = useNavigate(); // для переадресации пользователя

  // сколько карточек и на каком разрешении добавлять
  useEffect(() => {
    const mediaQuerySmall = window.matchMedia("(max-width: 644px)");
    const mediaQueryMedium = window.matchMedia(
      "(min-width: 645px) and (max-width: 1275px)"
    );

    const handleMediaQueryChange = () => {
      if (mediaQuerySmall.matches) {
        setAmountMoreMovies(2);
        startCardsAmount.current = 5;
      } else if (mediaQueryMedium.matches) {
        setAmountMoreMovies(2);
        startCardsAmount.current = 8;
      } else {
        setAmountMoreMovies(3);
        startCardsAmount.current = 12;
      }
    };

    // Добавляем слушатели изменения разрешения экрана
    mediaQuerySmall.addListener(handleMediaQueryChange);
    mediaQueryMedium.addListener(handleMediaQueryChange);

    // Устанавливаем начальное значение в зависимости от текущего разрешения
    handleMediaQueryChange();

    // Очищаем слушатели при размонтировании компонента
    return () => {
      mediaQuerySmall.removeListener(handleMediaQueryChange);
      mediaQueryMedium.removeListener(handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);
    tokenCheck();
  }, []);

  const tokenCheck = async () => {
    const jwt = localStorage.getItem("jwt"); // получаем jwt из localStorage
    console.log(jwt);
    if (jwt) {
      await tokenAuth(jwt) // если есть jwt, то передаем в ф-ию token auth
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setIsLoading(false);
  };

  // Выход из аккаунта
  function signOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("keyword");
    localStorage.removeItem("displayedMovies");
    localStorage.removeItem("isShort");
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  function closeBurger() {
    setIsBurgerOpened(false);
  }

  function handleOpenBurgerClick() {
    setIsBurgerOpened(true);
  }

  function handleRegister({ name, email, password }) {
    register(name, email, password)
      .then(() => {
        handleAuth({ email, password }).then((res) => {
          console.log(`сюда не попали ${res}`);
          navigate("/movies", { replace: true });
        });
      })
      .catch((err) => {
        console.log(err);
        if (err === 409) {
          setServerError("Пользователь с таким email уже существует.");
        } else {
          setServerError("При регистрации пользоваетля произошла ошибка.");
        }
      });
  }

  function handleAuth({ email, password }) {
    setIsLoading(true); ///
    auth(email, password)
      .then((data) => {
        console.log("попали в then");
        if (data.data) {
          console.log(data.data);
          localStorage.setItem("jwt", data.data);
          tokenCheck()
            .then(() => {
              navigate("/movies", { replace: true });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        if (err === 401) {
          setServerError("Вы ввели неправильный логин или пароль");
        } else {
          setServerError("При авторизации произошла ошибка");
        }
      })
      .finally(() => setIsLoading(false)); ///
  }

  function handleChangeUserInfo(name, email) {
    setIsLoading(true); ///
    MainApi.changeUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res.data);
        setProfileError("Сохранения выполнены!");
      })
      .catch((err) => {
        console.log(err);
        if (err === 409) {
          setProfileError("Пользователь с таким email уже существует");
        } else if (err === 400) {
          setProfileError("Переданы некорректные данные");
        } else {
          setProfileError("При обновлении профиля произошла ошибка");
        }
      })
      .finally(() => setIsLoading(false));
  }

  function handleGetMovies() {
    return getMovies()
      .then((res) => {
        setAllMovies(res);
        return res;
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (loggedIn) {
      MainApi.getSaved()
        .then((res) => {
          setSavedMovies(res.data);
        })
        .catch((err) => {
          console.log(err);
          throw err; // Пробрасываем ошибку для обработки в следующем .catch()
        });
    }
  }, [loggedIn]);

  function changeCurrentIndex(value) {
    setCurrentIndex(value);
  }

  // нажатие на кнопаку "Ещё"
  function handleMoreClick() {
    const updatedIndex = currentIndex + amountMoreMovies;
    changeCurrentIndex(updatedIndex);
  }

  function handleMovieSaveAndDelete(movie, isSaved) {
    console.log(movie);
    console.log(isSaved);
    if (isSaved) {
      const currentSavedMovie = savedMovies.find(
        (savedMovie) => savedMovie.movieId === movie.id
      );
      MainApi.deleteMovie(currentSavedMovie._id)
        .then(() =>
          setSavedMovies(
            savedMovies.filter(
              (myMovie) => myMovie._id !== currentSavedMovie._id
            )
          )
        )
        .catch((err) => {
          console.warn(err);
        });
    } else {
      MainApi.saveMovie(movie)
        .then((res) => {
          setSavedMovies([...savedMovies, res.data]);
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }

  function handleDeleteMovie(movie) {
    MainApi.deleteMovie(movie._id)
      .then(() =>
        setSavedMovies(
          savedMovies.filter((myMovie) => myMovie._id !== movie._id)
        )
      )
      .catch((err) => {
        console.warn(err);
      });
  }

  function handleServerError(value) {
    setServerError(value);
  }

  function renderRoutes() {
    return (
      <>
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              onBurgerClick={handleOpenBurgerClick}
              isMovies={true}
              allMovies={allMovies}
              handleSaveMovie={handleMovieSaveAndDelete}
              startCardsAmount={startCardsAmount}
              changeCurrentIndex={changeCurrentIndex}
              handleMoreClick={handleMoreClick}
              currentIndex={currentIndex}
              onSubmitGetMovies={handleGetMovies}
              savedMovies={savedMovies}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              onBurgerClick={handleOpenBurgerClick}
              isMovies={true}
              savedMovies={savedMovies}
              handleDeleteMovie={handleDeleteMovie}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              onBurgerClick={handleOpenBurgerClick}
              isMovies={true}
              signOut={signOut}
              onUpdateUser={handleChangeUserInfo}
              profileError={profileError}
              onServerError={handleServerError}
              isLoading={isLoading}
            />
          }
        />
      </>
    );
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="wrapper">
        <Burger onClose={closeBurger} isOpened={isBurgerOpened} />
        <Routes>
          {!isLoading && renderRoutes()}
          <Route
            path="/"
            element={
              <Main
                loggedIn={loggedIn}
                onBurgerClick={handleOpenBurgerClick}
                isMovies={false}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                isRegister={true}
                handleRegister={handleRegister}
                isLoading={isLoading}
                serverError={serverError}
                onServerError={handleServerError}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                isRegister={false}
                handleAuth={handleAuth}
                isLoading={isLoading}
                serverError={serverError}
                onServerError={handleServerError}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
