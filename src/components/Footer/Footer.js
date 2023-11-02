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
            <a href="#" className="footer__link">
              Яндекс.Практикум
            </a>
            <a href="#" className="footer__link">
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
