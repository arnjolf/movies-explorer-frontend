export default function AboutProject() {
  return (
    <div className="aboutpr">
      <div className="aboutpr__content" id="about-project">
        <h2 className="aboutpr__title">О проекте</h2>
        <div className="aboutpr__line"></div>
        <div className="aboutpr__main">
          <div className="aboutpr__item">
            <h3 className="aboutpr__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="aboutpr__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="aboutpr__item">
            <h3 className="aboutpr__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutpr__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="aboutpr__stages">
          <div className="aboutpr__stage">
            <p className="aboutpr__stage-text">1 неделя</p>
          </div>
          <div className="aboutpr__stage">
            <p className="aboutpr__stage-text">4 недели</p>
          </div>
          <p className="aboutpr__stage-name">Back-end</p>
          <p className="aboutpr__stage-name">Front-end</p>
        </div>
      </div>
    </div>
  );
}
