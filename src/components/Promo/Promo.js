import promoImage from "../../images/promoImage.svg";

export default function Promo() {
  return (
    <div className="promo">
      <div className="promo__content">
        <div className="promo__main">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <div className="promo__link-box">
            <a href="#about-project" className="promo__link">
              Узнать больше
            </a>
          </div>
        </div>
        <img src={promoImage} className="promo__image"></img>
      </div>
    </div>
  );
}
