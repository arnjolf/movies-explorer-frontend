import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <div className="notFoundPage__content">
        <h2 className="notFoundPage__title">404</h2>
        <p className="notFoundPage__text">Страница не найдена</p>
        <Link to="/" className="notFoundPage__link">
          Назад
        </Link>
      </div>
    </div>
  );
}
