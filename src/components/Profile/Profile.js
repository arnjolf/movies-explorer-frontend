import Header from "../Header/Header";
import React, { useState, useEffect } from "react";

export default function Profile({ isAuthorized, onBurgerClick, isMovies }) {
  let currentName = `some-name`;
  let currentEmail = `some-email@gmail.com`;

  const [formData, setFormData] = useState({
    name: currentName,
    email: currentEmail,
  });
  const [isChanged, setIsChanged] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleSaveButtonClick = (evt) => {
    evt.preventDefault();

    currentName = formData.name;
    currentEmail = formData.email;

    setIsEdit(false);
    setIsChanged(false);
  };

  const handleOnEditClick = (evt) => {
    console.log(currentName);
    console.log(formData.name);
    evt.preventDefault();
    setIsEdit(true);
  };

  useEffect(() => {
    if (formData.name === currentName && formData.email === currentEmail) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [formData, currentEmail, currentName, isChanged]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(value);
  };

  return (
    <div className="profile">
      <Header
        isAuthorized={isAuthorized}
        onBurgerClick={onBurgerClick}
        isMovies={isMovies}
      />
      <div className="profile__content">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__input-box">
            <span className="profile__span">Имя</span>
            <input
              readOnly={!isEdit}
              onChange={handleInputChange}
              name="name"
              type="text"
              className="profile__input"
              defaultValue={currentName}
            />
          </div>
          <div className="profile__line" />
          <div className="profile__input-box">
            <span className="profile__span">Почта</span>
            <input
              readOnly={!isEdit}
              onChange={handleInputChange}
              name="email"
              type="email"
              className="profile__input"
              defaultValue={currentEmail}
            />
          </div>
          <div className="profile__footer">
            {isEdit ? (
              <button
                className={`profile__submit ${
                  !isChanged ? `profile__submit_disabled` : ``
                }`}
                type="submit"
                disabled={!isChanged}
                onClick={handleSaveButtonClick}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className="profile__edit"
                  type="submit"
                  onClick={handleOnEditClick}
                >
                  Редактировать
                </button>
                <button className="profile__logout" type="submit">
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
