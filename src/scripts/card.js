function createCard(item, removeCard, getOrRemovelike, openPopupTypeImage) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardContent = cardTemplate.cloneNode(true);
  cardContent.querySelector(".card__image").src = item.link;
  cardContent.querySelector(".card__image").alt = item.name;
  cardContent.querySelector(".card__title").textContent = item.name;
  const deleteButton = cardContent.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", removeCard);
  const likeButton = cardContent.querySelector(".card__like-button");
  likeButton.addEventListener("click", getOrRemovelike);
  const cardImage = cardContent.querySelector(".card__image");
  cardImage.addEventListener("click", openPopupTypeImage);
  return cardContent;
}

function removeCard(event) {
  event.target.closest(".card").remove();
}

function getOrRemovelike(event) {
  if (!event.target.classList.contains("card__like-button_is-active")) {
    event.target.classList.add("card__like-button_is-active");
  } else {
    event.target.classList.remove("card__like-button_is-active");
  }
}

export { createCard, removeCard, getOrRemovelike };
