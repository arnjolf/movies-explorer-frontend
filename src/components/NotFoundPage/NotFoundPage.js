import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Переход на предыдущую страницу в истории
  };
  return (
    <section className="notFoundPage">
      <div className="notFoundPage__content">
        <h2 className="notFoundPage__title">404</h2>
        <p className="notFoundPage__text">Страница не найдена</p>
        <button to="/" onClick={handleGoBack} className="notFoundPage__button">
          Назад
        </button>
      </div>
    </section>
  );
}
