const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-7",
  headers: {
    authorization: "ad3367f2-61df-42e1-9fcf-1c800ea06b41",
    "Content-Type": "application/json",
  },
};

const handleResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`Что-то пошло не так: ${res.status}`);
};

const getInitialCards = async () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => handleResponse(res));
};

const getUserInfo = async () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => handleResponse(res));
};

const updateUserInformation = async (userName, userAbout) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: userName,
      about: userAbout,
    }),
  }).then((res) => handleResponse(res));
};

const updateNewCard = async (cardName, cardLink) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink,
    }),
  }).then((res) => handleResponse(res));
};

const deleteCard = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => handleResponse(res));
};

const getLikeCard = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => handleResponse(res));
};

const deleteLikeCard = async (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => handleResponse(res));
};

const updateNewAvatar = async (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  }).then((res) => handleResponse(res));
};

export {
  getInitialCards,
  getUserInfo,
  updateUserInformation,
  updateNewCard,
  deleteCard,
  getLikeCard,
  deleteLikeCard,
  updateNewAvatar,
};