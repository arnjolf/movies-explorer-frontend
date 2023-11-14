export default function FilterCheckbox({ onCheckboxChange, isShort }) {
  function handleCheckboxChange(e) {
    onCheckboxChange(e.target.checked);
  }

  return (
    <section className="filter-checkbox">
      <label className="filter-checkbox__content">
        <input
          onChange={handleCheckboxChange}
          checked={isShort}
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
