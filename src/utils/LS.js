// методы для удобной работы с локальным хранилищем

const code = (data) => JSON.stringify(data);
const decode = (data) => JSON.parse(data);

export function getLocalData(keyword) {
  return decode(localStorage.getItem(keyword));
}

export function setLocalData(keyword, data) {
  return localStorage.setItem(keyword, code(data));
}
