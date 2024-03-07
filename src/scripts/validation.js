const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
};

const enableSubmitButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  hasInvalidInput(inputList);
  return hasInvalidInput(inputList)
    ? disableSubmitButton(buttonElement, inactiveButtonClass)
    : enableSubmitButton(buttonElement, inactiveButtonClass);
};

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, inputErrorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = "";
};

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
            inputElement.validity.patternMismatch
              ? inputElement.setCustomValidity(
                  inputElement.dataset.errorMessage
                )
              : inputElement.setCustomValidity("");
            if (!inputElement.validity.valid) {
              showInputError(
                formElement,
                inputElement,
                inputElement.validationMessage,
                settingsObject.inputErrorClass
              );
              toggleButtonState(
                inputList,
                buttonElement,
                settingsObject.inactiveButtonClass
              );
            } else {
              hideInputError(
                formElement,
                inputElement,
                settingsObject.inputErrorClass
              );
              toggleButtonState(
                inputList,
                buttonElement,
                settingsObject.inactiveButtonClass
              );
            }
          };
          isValid(formElement, inputElement);
        });
      });
    };
    setEventListeners(formElement);
  });
};

const clearValidation = (form, settingsObject) => {
  const inputList = Array.from(
    form.querySelectorAll(settingsObject.inputSelector)
  );
  const buttonElement = form.querySelector(settingsObject.submitButtonSelector);
  inputList.forEach((formInput) => {
    hideInputError(form, formInput, settingsObject.inputErrorClass);
    formInput.setCustomValidity("");
  });
  toggleButtonState(
    inputList,
    buttonElement,
    settingsObject.inactiveButtonClass
  );
};

export { enableValidation, clearValidation };