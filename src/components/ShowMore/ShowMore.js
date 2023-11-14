export default function ShowMore({ onMoreClick }) {
  return (
    <section className="show-more">
      <button className="show-more__button" onClick={onMoreClick}>
        Ещё
      </button>
    </section>
  );
}
