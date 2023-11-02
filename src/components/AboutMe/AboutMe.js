import photo from "../../images/vitaliy.png";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="aboutMe__content">
        <h2 className="aboutMe__title">Студент</h2>
        <div className="aboutMe__line"></div>
        <div className="aboutMe__main">
          <div className="aboutMe__info">
            <p className="aboutMe__name">Виталий</p>
            <p className="aboutMe__desc">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutMe__bio">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href="#" className="aboutMe__github">
              Github
            </a>
          </div>
          <img src={photo} className="aboutMe__photo"></img>
        </div>
        <Portfolio />
      </div>
    </div>
  );
}
