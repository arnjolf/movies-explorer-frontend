export default function filterMovies(keyword = "", movieArr, isShort) {
  let filtered = movieArr;

  if (isShort) {
    filtered = filtered.filter((movie) => movie.duration <= 40);
  }

  if (!keyword) {
    return filtered;
  }

  return filtered.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(keyword.toLowerCase())
  );
}
