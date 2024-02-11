const placesList = document.querySelector(".places__list");
const profileAddButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeEditButton = popupTypeEdit.querySelector(".popup__button");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeNewCardButton = popupTypeNewCard.querySelector(".popup__button");
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

export {
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
};
