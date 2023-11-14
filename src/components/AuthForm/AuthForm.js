import Logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../../utils/UseFormValidation";
import { useForm } from "react-hook-form";
import { regex } from "../../utils/regex";
import { useEffect } from "react";

export default function AuthForm({
  isRegister,
  submitAction,
  serverError,
  onServerError,
  isLoading,
}) {
  const navigate = useNavigate();
  const { isFormValid, values, handleChange, errorsMessages, resetForm } =
    useFormValidation();

  useEffect(() => {
    resetForm();
    onServerError("");
  }, []);

  const {
    getValues,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleSubmit = (e) => {
    e.preventDefault();

    submitAction({
      name: values["name"],
      email: getValues("email"),
      password: values["password"],
    });
  };

  const handleLogoClick = () => {
    navigate(`/`);
  };

  function validateForm() {
    return !isFormValid || !!errors?.email || isLoading;
  }

  return (
    <section className="auth-form">
      <div className="auth-form__content">
        <img
          src={Logo}
          className="auth-form__logo"
          alt="Logo"
          onClick={handleLogoClick}
        />
        <h2 className="auth-form__title">Рады видеть!</h2>
        <form className="auth-form__form" onSubmit={handleSubmit} noValidate>
          <div className="auth-form__inputs" disabled={isLoading}>
            {isRegister && (
              <>
                <span className="auth-form__span">Имя</span>
                <input
                  onChange={(e) => handleChange(e)}
                  name="name"
                  type="text"
                  className="auth-form__input"
                  minLength="2"
                  maxLength="30"
                  required
                ></input>
                <span className="auth-form__error">
                  {errorsMessages["name"]}
                </span>
              </>
            )}
            <span className="auth-form__span">E-mail</span>
            <input
              onChange={(e) => handleChange(e)}
              required
              name="email"
              type="email"
              className="auth-form__input"
              {...register("email", {
                required: "Email адрес обязательное поле",
                pattern: {
                  value: regex,
                  message: "Некорректный email",
                },
              })}
            ></input>
            <span className="auth-form__error">
              {errors?.email && errors?.email?.message}
            </span>
            <span className="auth-form__span">Пароль</span>
            <input
              onChange={(e) => handleChange(e)}
              required
              name="password"
              type="password"
              className="auth-form__input"
              minLength="6"
            ></input>
            <span className="auth-form__error">
              {errorsMessages["password"]}
            </span>
          </div>
          <span className="auth-form__error">{serverError}</span>
          <div className="auth-form__submit-section">
            <button
              type="submit"
              className={`auth-form__submit ${
                validateForm() ? "auth-form__submit_disabled" : ""
              }`}
              disabled={validateForm()}
            >
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
    </section>
  );
}
