const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

function createCard(item) {
  const cardContent = cardTemplate.cloneNode(true);
  cardContent.querySelector(".card__image").src = item.link;
  cardContent.querySelector(".card__image").alt = item.name;
  cardContent.querySelector(".card__title").textContent = item.name;
  const deleteButton = cardContent.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", removeCard);
  return cardContent;
}

function removeCard() {
  event.target.closest(".card").remove();
}

initialCards.forEach((item) => {
  placesList.append(createCard(item));
});
