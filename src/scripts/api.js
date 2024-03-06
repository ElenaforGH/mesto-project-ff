const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-7",
  headers: {
    authorization: "ad3367f2-61df-42e1-9fcf-1c800ea06b41",
    "Content-Type": "application/json",
  },
};

const getInitialCards = async () => {
  const res = await fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Что-то пошло не так: ${res.status}`);
};

const getUserInfo = async () => {
  const res = await fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Что-то пошло не так: ${res.status}`);
};

const updateUserInformation = async (userName, userAbout) => {
  const res = await fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: userName,
      about: userAbout,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Что-то пошло не так: ${res.status}`);
};

const updateNewCard = async (cardName, cardLink) => {
  const res = await fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Что-то пошло не так: ${res.status}`);
};

const deleteCard = async (cardId) => {
  const res = await fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Что-то пошло не так: ${res.status}`);
};

const getLikeCard = async (cardId) => {
  const res = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Что-то пошло не так: ${res.status}`);
};

const deleteLikeCard = async (cardId) => {
  const res = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Что-то пошло не так: ${res.status}`);
};

const updateNewAvatar = async (link) => {
  const res = await fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Что-то пошло не так: ${res.status}`);
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
