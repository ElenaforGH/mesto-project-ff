import "../pages/index.css";
import { openModal, closeModal } from "./modal.js";
import { initialCards } from "./cards.js";
import { createCard, removeCard, getOrRemovelike } from "./card.js";

const placesList = document.querySelector(".places__list");
const profileAddButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");
const editFormElement = popupTypeEdit.querySelector(".popup__form");
const nameInput = editFormElement.querySelector(".popup__input_type_name");
const jobInput = editFormElement.querySelector(
  ".popup__input_type_description"
);
const newCardFormElement = popupTypeNewCard.querySelector(".popup__form");
const placeName = popupTypeNewCard.querySelector(
  ".popup__input_type_card-name"
);
const placeUrl = popupTypeNewCard.querySelector(".popup__input_type_url");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const popupTypeEditForm = document.forms["edit-profile"];
const popupTypeEditFormName = popupTypeEditForm.elements.name;
const popupTypeEditFormDescription = popupTypeEditForm.elements.description;
const popups = document.querySelectorAll(".popup");

initialCards.forEach((item) => {
  placesList.append(
    createCard(item, removeCard, getOrRemovelike, openPopupTypeImage)
  );
});

popups.forEach((popupType) => {
  popupType.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__close")) {
      closeModal(popupType);
    }
  });
});

function openPopupTypeImage(event) {
  openModal(popupTypeImage);
  popupImage.src = event.target.src;
  popupImage.alt = event.target.alt;
  popupCaption.textContent = event.target
    .closest(".card")
    .querySelector(".card__title").textContent;
}

profileEditButton.addEventListener("click", function () {
  openModal(popupTypeEdit);
  popupTypeEditFormName.value = profileTitle.textContent;
  popupTypeEditFormDescription.value = profileDescription.textContent;
});

profileAddButton.addEventListener("click", function () {
  openModal(popupTypeNewCard);
});

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupTypeEdit);
}
editFormElement.addEventListener("submit", handleFormSubmitEditProfile);

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
  closeModal(popupTypeNewCard);
}
newCardFormElement.addEventListener("submit", addCard);
