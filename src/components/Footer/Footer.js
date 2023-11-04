export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__line"></div>
        <div className="footer__main">
          <p className="footer__text">&#169; 2023</p>
          <div className="footer__links">
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com/arnjolf"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
