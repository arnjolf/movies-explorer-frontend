// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://movies-explorer.api.nomoredomainsrocks.ru";

function getResponse(res) {
  if (!res.ok) {
    return Promise.reject(res.status);
  }
  return res.json();
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => getResponse(res));
};

export const auth = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => getResponse(res))
    .then((token) => {
      return token;
    });
};

export const tokenAuth = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => getResponse(res));
};
