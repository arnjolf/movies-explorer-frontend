import { UserContext } from "../../contexts/CurrentUserContext";
import { useFormValidation } from "../../utils/UseFormValidation";
import { regex } from "../../utils/regex";
import Header from "../Header/Header";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Profile({
  loggedIn,
  onBurgerClick,
  isMovies,
  signOut,
  onUpdateUser,
  profileError,
  onProfileError,
  isLoading,
}) {
  const currentUser = React.useContext(UserContext);
  const [isEdit, setIsEdit] = useState(false);

  const {
    getValues,
    setValue,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { errorsMessages, isFormValid } = useFormValidation();

  const watchEmail = watch("email");
  const watchName = watch("name");

  useEffect(() => {
    if (currentUser.name) {
      setValue("email", currentUser.email);
      setValue("name", currentUser.name);
    }
  }, [currentUser, setValue]);

  const handleOnEditClick = (evt) => {
    evt.preventDefault();
    setIsEdit(true);
  };

  function handleSubmit(e) {
    e.preventDefault();

    let name = getValues("name");
    let email = getValues("email");

    console.log(name);
    console.log(email);

    onUpdateUser(name, email);
  }

  function validateForm() {
    return (
      (watchName === currentUser.name && watchEmail === currentUser.email) ||
      !isFormValid ||
      errors?.email
    );
  }

  return (
    <div className="profile">
      <Header
        loggedIn={loggedIn}
        onBurgerClick={onBurgerClick}
        isMovies={isMovies}
      />
      <main className="profile__content">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <div className="profile__input-box">
            <input
              readOnly={!isEdit || isLoading}
              {...register("name", {
                required: "Укажите имя",
                minLength: {
                  value: 2,
                  message: "Имя должно содержать минимум 2 символа",
                },
                maxLength: {
                  value: 30,
                  message: "Имя должно быть меньше 30 символов",
                },
              })}
              name="name"
              type="text"
              className="profile__input"
              required
            />
            <span className="profile__span">Имя</span>
          </div>
          <span className="profile__error">
            {errors?.name && errors?.name?.message}
          </span>
          <div className="profile__line" />
          <div className="profile__input-box">
            <input
              readOnly={!isEdit || isLoading}
              name="email"
              type="email"
              className="profile__input"
              required
              {...register("email", {
                required: "Укажите почту",
                pattern: {
                  value: regex,
                  message: "Некорректный email",
                },
              })}
            />
            <span className="profile__span">Почта</span>
          </div>
          <span className="profile__error">
            {errors?.email && errors?.email?.message}
          </span>
          <span className="profile__error">{profileError}</span>
          <div className="profile__footer">
            {isEdit ? (
              <button
                className={`profile__submit ${
                  validateForm() ? `profile__submit_disabled` : ``
                }
                }`}
                type="submit"
                disabled={validateForm()}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className="profile__edit"
                  type="button"
                  onClick={handleOnEditClick}
                >
                  Редактировать
                </button>
                <button
                  className="profile__logout"
                  type="button"
                  onClick={signOut}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}
