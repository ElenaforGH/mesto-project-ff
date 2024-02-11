function openModal(popupType) {
  popupType.classList.add("popup_is-opened");
}

function closePopupbyClickSave(popupType) {
  popupType.classList.remove("popup_is-opened");
}

function closeModal(popupType) {
  const popupClose = popupType.querySelector(".popup__close");
  popupClose.addEventListener("click", function () {
    popupType.classList.remove("popup_is-opened");
  });
  document.addEventListener("keydown", closeModalByEsc);
  function closeModalByEsc(evt) {
    if (evt.key === "Escape") {
      popupType.classList.remove("popup_is-opened");
    }
  }
  popupType.addEventListener("click", function (evt) {
    const popupContent = popupType.querySelector(".popup__content");
    const popupCloseByClick = evt.composedPath().includes(popupContent);
    if (!popupCloseByClick) {
      popupType.classList.remove("popup_is-opened");
    }
  });
}

export { openModal, closeModal, closePopupbyClickSave };
