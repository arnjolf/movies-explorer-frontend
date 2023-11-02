export default function Techs() {
  return (
    <div className="techs">
      <div className="techs__content">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__line"></div>
        <div className="techs__main">
          <p className="techs__subtitle">7 технологий</p>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <div className="techs__grid">
            <div className="techs__item">
              <p className="techs__technology">HTML</p>
            </div>
            <div className="techs__item">
              <p className="techs__technology">CSS</p>
            </div>
            <div className="techs__item">
              <p className="techs__technology">JS</p>
            </div>
            <div className="techs__item">
              <p className="techs__technology">React</p>
            </div>
            <div className="techs__item">
              <p className="techs__technology">Git</p>
            </div>
            <div className="techs__item">
              <p className="techs__technology">Express.js</p>
            </div>
            <div className="techs__item">
              <p className="techs__technology">mongoDB</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
