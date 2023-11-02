import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__content">
        <div className="search-form__input">
          <input
            type="text"
            className="search-form__input-text"
            placeholder="Фильм"
          ></input>
          <button className="search-form__input-button">Поиск</button>
        </div>
        <FilterCheckbox />
        <div className="search-form__line"></div>
      </form>
    </div>
  );
}
