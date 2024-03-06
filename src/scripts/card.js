import { deleteCard, getLikeCard, deleteLikeCard } from "./api.js";

function createCard(item, removeCard, getOrRemovelike, openPopupTypeImage) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardContent = cardTemplate.cloneNode(true);
  cardContent.querySelector(".card__image").src = item.link;
  cardContent.querySelector(".card__image").alt = item.name;
  cardContent.querySelector(".card__title").textContent = item.name;
  cardContent.querySelector(".card__like-counter").textContent =
    item.likes.length;
  const deleteButton = cardContent.querySelector(".card__delete-button");
  const myId = "077949f569e3c439b04cae24";
  if (item.ownerId !== myId) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener("click", function (evt) {
      removeCard(evt, item._id);
    });
  }
  const likeButton = cardContent.querySelector(".card__like-button");
  const likeCounter = cardContent.querySelector(".card__like-counter");
  if (item.likes.some((item) => item._id === myId)) {
    likeButton.classList.add("card__like-button_is-active");
  }
  likeButton.addEventListener("click", function (evt) {
    getOrRemovelike(evt, item._id, likeCounter);
  });
  const cardImage = cardContent.querySelector(".card__image");
  cardImage.addEventListener("click", openPopupTypeImage);
  return cardContent;
}

function removeCard(event, cardId) {
  event.target.closest(".card").remove();
  deleteCard(cardId).catch((err) => {
    console.log(err);
  });
}

function getOrRemovelike(event, cardId, likeCounter) {
  if (!event.target.classList.contains("card__like-button_is-active")) {
    event.target.classList.add("card__like-button_is-active");
    getLikeCard(cardId)
      .then((res) => {
        likeCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    event.target.classList.remove("card__like-button_is-active");
    deleteLikeCard(cardId)
      .then((res) => {
        likeCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export { createCard, removeCard, getOrRemovelike };
