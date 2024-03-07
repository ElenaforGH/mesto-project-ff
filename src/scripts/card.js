import { deleteCard, getLikeCard, deleteLikeCard } from "./api.js";

function createCard(
  item,
  userId,
  removeCard,
  getOrRemovelike,
  openPopupTypeImage
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardContent = cardTemplate.cloneNode(true);
  cardContent.querySelector(".card__image").src = item.link;
  cardContent.querySelector(".card__image").alt = item.name;
  cardContent.querySelector(".card__title").textContent = item.name;
  cardContent.querySelector(".card__like-counter").textContent =
    item.likes.length;
  const deleteButton = cardContent.querySelector(".card__delete-button");
  if (item.owner._id !== userId) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener("click", function (evt) {
      removeCard(evt, item._id);
    });
  }
  const likeButton = cardContent.querySelector(".card__like-button");
  const likeCounter = cardContent.querySelector(".card__like-counter");
  if (item.likes.some((item) => item._id === userId)) {
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
  deleteCard(cardId)
    .then(() => event.target.closest(".card").remove())
    .catch((err) => console.log(err));
}

function getOrRemovelike(event, cardId, likeCounter) {
  const likeMethod = event.target.classList.contains(
    "card__like-button_is-active"
  )
    ? deleteLikeCard
    : getLikeCard;
  likeMethod(cardId)
    .then((res) => {
      event.target.classList.toggle("card__like-button_is-active");
      likeCounter.textContent = res.likes.length;
    })
    .catch((err) => console.log(err));
}

export { createCard, removeCard, getOrRemovelike };