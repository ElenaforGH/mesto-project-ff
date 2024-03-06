import "../pages/index.css";
import { openModal, closeModal } from "./modal.js";
import {
  getInitialCards,
  getUserInfo,
  updateUserInformation,
  updateNewCard,
  updateNewAvatar,
} from "./api.js";
import { createCard, removeCard, getOrRemovelike } from "./card.js";
import {
  enableValidation,
  clearValidation,
  clearInputs,
} from "./validation.js";

const placesList = document.querySelector(".places__list");
const profileAddButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditIcon = document.querySelector(".profile__edit-icon");
const profileImage = document.querySelector(".profile__image");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeAvatar = document.querySelector(".popup_type_avatar");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");
const editFormElement = popupTypeEdit.querySelector(".popup__form");
const avatarFormElement = popupTypeAvatar.querySelector(".popup__form");
const nameInput = editFormElement.querySelector(".popup__input_type_name");
const jobInput = editFormElement.querySelector(
  ".popup__input_type_description"
);
const avatarInput = avatarFormElement.querySelector(
  ".popup__input_type_avatar-url"
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
const popypTypeAvatarForm = document.forms["avatar"];
const popupTypeNewPlaceForm = document.forms["new-place"];
const popupTypeEditFormName = popupTypeEditForm.elements.name;
const popupTypeEditFormDescription = popupTypeEditForm.elements.description;
const popups = document.querySelectorAll(".popup");
const settingsObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

popups.forEach((popupType) => {
  popupType.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__close")) {
      closeModal(popupType);
    }
  });
});

function checkInputs(popupType) {
  const inputs = popupType.querySelectorAll(".popup__input");
  const popupTypeButton = popupType.querySelector(".popup__button");
  inputs.forEach((input) => {
    if (input.value == "") {
      popupTypeButton.disabled = true;
      popupTypeButton.classList.add("popup__button_disabled");
    } else {
      popupTypeButton.disabled = false;
      popupTypeButton.classList.remove("popup__button_disabled");
    }
  });
}

function renderLoading(isLoading, popupType) {
  if (isLoading) {
    popupType.querySelector(".popup__button").textContent = "Сохранение...";
  }
}

function openPopupTypeImage(event) {
  openModal(popupTypeImage);
  popupImage.src = event.target.src;
  popupImage.alt = event.target.alt;
  popupCaption.textContent = event.target
    .closest(".card")
    .querySelector(".card__title").textContent;
}

profileEditButton.addEventListener("click", function () {
  clearValidation(popupTypeEditForm, settingsObject);
  openModal(popupTypeEdit);
  popupTypeEditFormName.value = profileTitle.textContent;
  popupTypeEditFormDescription.value = profileDescription.textContent;
});

profileEditIcon.addEventListener("click", function () {
  clearValidation(popypTypeAvatarForm, settingsObject);
  clearInputs(popypTypeAvatarForm, settingsObject);
  openModal(popupTypeAvatar);
  checkInputs(popupTypeAvatar);
});

profileAddButton.addEventListener("click", function () {
  clearValidation(popupTypeNewPlaceForm, settingsObject);
  clearInputs(popupTypeNewPlaceForm, settingsObject);
  openModal(popupTypeNewCard);
  checkInputs(popupTypeNewCard);
});

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  renderLoading(true, popupTypeEdit);
  updateUserInformation(nameInput.value, jobInput.value)
    .then((user) => {
      nameInput.value = user.name;
      jobInput.value = user.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    });
  closeModal(popupTypeEdit);
}
editFormElement.addEventListener("submit", function (evt) {
  handleFormSubmitEditProfile(evt);
});

function handleFormSubmitAvatarForm(evt) {
  evt.preventDefault();
  renderLoading(true, popupTypeAvatar);
  updateNewAvatar(avatarInput.value)
    .then((user) => {
      profileImage.style.backgroundImage = `url(${user.avatar})`;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    });
  closeModal(popupTypeAvatar);
}

avatarFormElement.addEventListener("submit", function (evt) {
  handleFormSubmitAvatarForm(evt);
});

function addCard(evt) {
  evt.preventDefault();
  renderLoading(true, popupTypeNewCard);
  const newCard = {
    name: placeName.value,
    link: placeUrl.value,
  };
  updateNewCard(newCard.name, newCard.link)
    .then((card) => {
      placesList.prepend(
        createCard(
          {
            name: card.name,
            link: card.link,
            likes: card.likes,
            _id: card._id,
            ownerId: card.owner._id,
          },
          removeCard,
          getOrRemovelike,
          openPopupTypeImage
        )
      );
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    });
  placeName.value = "";
  placeUrl.value = "";
  closeModal(popupTypeNewCard);
}
newCardFormElement.addEventListener("submit", addCard);

Promise.all([getUserInfo(), getInitialCards()])
  .then(([user, cards]) => {
    profileTitle.textContent = user.name;
    profileDescription.textContent = user.about;
    profileImage.style.backgroundImage = `url(${user.avatar})`;
    cards.forEach((card) => {
      placesList.prepend(
        createCard(
          {
            name: card.name,
            link: card.link,
            likes: card.likes,
            _id: card._id,
            ownerId: card.owner._id,
          },
          removeCard,
          getOrRemovelike,
          openPopupTypeImage
        )
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

enableValidation(settingsObject);
