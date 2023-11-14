export default function FilterCheckbox() {
  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__content">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          id="filter-checkbox"
        />
        <span className="filter-checkbox__span"></span>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </section>
  );
}
