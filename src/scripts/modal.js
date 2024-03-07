function openModal(popupType) {
  popupType.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeEscPopup);
  popupType.addEventListener("click", closePopupByOverlay);
}

function closeModal(popupType) {
  popupType.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeEscPopup);
  popupType.removeEventListener("click", closePopupByOverlay);
}

function closePopupByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

function closeEscPopup(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  }
}

export { openModal, closeModal };