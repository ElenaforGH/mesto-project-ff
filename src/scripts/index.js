import "../pages/index.css";
import { openModal, closeModal, closePopupbyClickSave } from "./modal.js";
import { initialCards } from "./cards.js";
import {
  placesList,
  profileAddButton,
  profileEditButton,
  popupTypeEdit,
  popupTypeEditButton,
  popupTypeNewCard,
  popupTypeNewCardButton,
  popupTypeImage,
  editFormElement,
  nameInput,
  jobInput,
  newCardFormElement,
  placeName,
  placeUrl,
  popupImage,
  popupCaption,
} from "./constants.js";
import { createCard, removeCard, getOrRemovelike } from "./card.js";

initialCards.forEach((item) => {
  placesList.append(
    createCard(item, removeCard, getOrRemovelike, openPopupTypeImage)
  );
});

function openPopupTypeImage(event) {
  openModal(popupTypeImage);
  popupImage.src = event.target.src;
  popupImage.alt = event.target.alt;
  popupCaption.textContent = event.target
    .closest(".card")
    .querySelector(".card__title").textContent;
  closeModal(popupTypeImage);
}

profileEditButton.addEventListener("click", function () {
  openModal(popupTypeEdit);
  closeModal(popupTypeEdit);
});

profileAddButton.addEventListener("click", function () {
  openModal(popupTypeNewCard);
  closeModal(popupTypeNewCard);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupTypeEditButton.addEventListener(
    "click",
    closePopupbyClickSave(popupTypeEdit)
  );
}
editFormElement.addEventListener("submit", handleFormSubmit);

function addCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeName.value,
    link: placeUrl.value,
  };
  placesList.prepend(
    createCard(newCard, removeCard, getOrRemovelike, openPopupTypeImage)
  );
  placeName.value = "";
  placeUrl.value = "";
  popupTypeNewCardButton.addEventListener(
    "click",
    closePopupbyClickSave(popupTypeNewCard)
  );
}
newCardFormElement.addEventListener("submit", addCard);
