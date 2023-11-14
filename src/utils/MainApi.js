class Api {
  constructor(basePath) {
    this._basePath = basePath;
  }

  _getHeaders() {
    return {
      authorization: `Bearer ${localStorage.jwt}`,
      "Content-Type": "application/json",
    };
  }

  _getJson(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }

  changeUserInfo(name, email) {
    return fetch(`${this._basePath}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({ name, email }),
    }).then(this._getJson);
  }

  deleteMovie(movieId) {
    return fetch(`${this._basePath}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  saveMovie(movie) {
    return fetch(`${this._basePath}/movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        owner: movie.owner,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._getJson);
  }

  getSaved() {
    return fetch(`${this._basePath}/movies`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }
}

// const MainApi = new Api("http://localhost:3000");
const MainApi = new Api("https://movies-explorer.api.nomoredomainsrocks.ru");
export { MainApi };
