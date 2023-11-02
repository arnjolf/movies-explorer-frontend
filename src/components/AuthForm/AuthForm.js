import Logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export default function AuthForm({ isRegister }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(`/`);
  };

  return (
    <div className="auth-form">
      <div className="auth-form__content">
        <img
          src={Logo}
          className="auth-form__logo"
          alt="Logo"
          onClick={handleLogoClick}
        />
        <h2 className="auth-form__title">Рады видеть!</h2>
        <form className="auth-form__form">
          {isRegister && (
            <>
              <span className="auth-form__span">Имя</span>
              <input
                required
                name="name"
                type="text"
                className="auth-form__input"
              ></input>
            </>
          )}
          <span className="auth-form__span">E-mail</span>
          <input
            required
            name="email"
            type="email"
            className="auth-form__input"
          ></input>
          <span className="auth-form__span">Пароль</span>
          <input
            required
            name="password"
            type="password"
            className="auth-form__input"
          ></input>
          <div className="auth-form__submit-section">
            <button type="submit" className="auth-form__submit">
              {isRegister ? `Зарегистрироваться` : `Войти`}
            </button>
            <p className="auth-form__text">
              {isRegister
                ? `Уже зарегистрированы? `
                : `Ещё не зарегистрированы? `}
              <Link
                to={isRegister ? `/signin` : `/signup`}
                className="auth-form__link"
              >
                {isRegister ? `Войти` : `Регистрация`}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
