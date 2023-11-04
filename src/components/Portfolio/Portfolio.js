import linkIcon from "../../images/portfolioLinkIcon.svg";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <a
            href="https://github.com/arnjolf/how-to-learn"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="portfolio__link-text">Статичный сайт</span>
            <img
              src={linkIcon}
              className="portfolio__link-icon"
              alt="arrow icon"
            />
          </a>
        </li>
        <li className="portfolio__link-item">
          <a
            href="https://github.com/arnjolf/russian-travel"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="portfolio__link-text">Адаптивный сайт</span>
            <img
              src={linkIcon}
              className="portfolio__link-icon"
              alt="arrow icon"
            />
          </a>
        </li>
        <li className="portfolio__link-item">
          <a
            href="https://github.com/arnjolf/react-mesto-api-full-gha"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="portfolio__link-text">
              Одностраничное приложение
            </span>
            <img
              src={linkIcon}
              className="portfolio__link-icon"
              alt="arrow icon"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
