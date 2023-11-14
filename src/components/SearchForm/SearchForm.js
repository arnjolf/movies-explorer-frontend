import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({
  onSearchSubmit,
  isShort,
  onCheckboxChange,
  keyword,
}) {
  const [inputValue, setInputValue] = useState(keyword);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    onSearchSubmit(inputValue);
  }

  return (
    <section className="search-form">
      <form className="search-form__content" onSubmit={handleSearchSubmit}>
        <div className="search-form__input">
          <input
            value={inputValue}
            type="text"
            className="search-form__input-text"
            placeholder="Фильм"
            onChange={handleInputChange}
          ></input>
          <button className="search-form__input-button">Поиск</button>
        </div>
        <FilterCheckbox onCheckboxChange={onCheckboxChange} isShort={isShort} />
        <div className="search-form__line"></div>
      </form>
    </section>
  );
}
