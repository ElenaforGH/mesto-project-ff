const enableValidation = (settingsObject) => {
  const formList = Array.from(
    document.querySelectorAll(settingsObject.formSelector)
  );
  formList.forEach((formElement) => {
    const setEventListeners = (formElement) => {
      const inputList = Array.from(
        formElement.querySelectorAll(settingsObject.inputSelector)
      );
      const buttonElement = formElement.querySelector(
        settingsObject.submitButtonSelector
      );
      inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          const isValid = (formElement, inputElement) => {
            if (inputElement.validity.patternMismatch) {
              inputElement.setCustomValidity(inputElement.dataset.errorMessage);
            } else {
              inputElement.setCustomValidity("");
            }
            if (!inputElement.validity.valid) {
              const showInputError = (
                formElement,
                inputElement,
                errorMessage
              ) => {
                const errorElement = formElement.querySelector(
                  `.${inputElement.id}-error`
                );
                inputElement.classList.add(settingsObject.inputErrorClass);
                errorElement.textContent = errorMessage;
                toggleButtonState(inputList, buttonElement);
              };
              showInputError(
                formElement,
                inputElement,
                inputElement.validationMessage
              );
            } else {
              const hideInputError = (formElement, inputElement) => {
                const errorElement = formElement.querySelector(
                  `.${inputElement.id}-error`
                );
                inputElement.classList.remove(settingsObject.inputErrorClass);
                errorElement.textContent = "";
                toggleButtonState(inputList, buttonElement);
              };
              hideInputError(formElement, inputElement);
            }
          };
          isValid(formElement, inputElement);
        });
        function toggleButtonState(inputList, buttonElement) {
          function hasInvalidInput(inputList) {
            return inputList.some((inputElement) => {
              return !inputElement.validity.valid;
            });
          }
          if (hasInvalidInput(inputList)) {
            buttonElement.classList.add(settingsObject.inactiveButtonClass);
            buttonElement.disabled = true;
          } else {
            buttonElement.classList.remove(settingsObject.inactiveButtonClass);
            buttonElement.disabled = false;
          }
        }
      });
    };
    setEventListeners(formElement);
  });
};

const clearValidation = (profileForm, settingsObject) => {
  const inputList = Array.from(
    profileForm.querySelectorAll(settingsObject.inputSelector)
  );
  const buttonElement = profileForm.querySelector(
    settingsObject.submitButtonSelector
  );
  inputList.forEach((formInput) => {
    const errorElement = profileForm.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(settingsObject.inputErrorClass);
    errorElement.textContent = "";
    formInput.setCustomValidity("");
  });
  buttonElement.classList.remove(settingsObject.inactiveButtonClass);
  buttonElement.disabled = false;
};

const clearInputs = (profileForm, settingsObject) => {
  const inputList = Array.from(
    profileForm.querySelectorAll(settingsObject.inputSelector)
  );
  inputList.forEach((formInput) => {
    formInput.value = "";
  });
};

export { enableValidation, clearValidation, clearInputs };
