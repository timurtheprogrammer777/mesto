
const enableValidation = ({formSelector, inputSelector,  invalidInputClass, submitButtonSelector, inactiveButtonClass}) => {
   const forms = document.querySelectorAll(formSelector);
   forms.forEach(form => {
      const inputs = Array.from(form.querySelectorAll(inputSelector));
      const button = form.querySelector(submitButtonSelector);
      inputs.forEach(input => {
         input.addEventListener('input', (evt) => handleFormInput(evt, form, invalidInputClass, button, inactiveButtonClass, inputs));
      });
      form.addEventListener('submit', handleFormSubmit);
   });
}

const handleFormSubmit = (evt) => {
   evt.preventDefault();
}

const toggleButtonState = (button, inactiveButtonClass, buttonState) => {
   if(buttonState) {
      disableButton(button, inactiveButtonClass);
   } else
   enableButton(button, inactiveButtonClass);
}

const checkInputValidity = (input, errorElement, invalidInputClass) => {

   if(input.validity.valid) {
      hideError(input, errorElement, invalidInputClass);
   } else {
      showError(input, errorElement, invalidInputClass);
   }
}
 
const handleFormInput = (evt, form, invalidInputClass, button, inactiveButtonClass, inputs) => {
   const input = evt.target;
   const errorElement = form.querySelector(`.popup__input-error-${input.name}`);
   checkInputValidity(input, errorElement, invalidInputClass);
   const buttonState = hasInvalidInput(inputs);
   toggleButtonState(button, inactiveButtonClass, buttonState);
}

const showError = (input, errorElement, invalidInputClass) => {
   input.classList.add(invalidInputClass);
   errorElement.textContent = input.validationMessage;
}
 
const hideError = (input, errorElement, invalidInputClass) => {
   input.classList.remove(invalidInputClass);
   errorElement.textContent = '';
}

const disableButton = (submitButtonSelector,  inactiveButtonClass) => {
   submitButtonSelector.classList.add(inactiveButtonClass);
   submitButtonSelector.disabled = true;
}
 
const enableButton = (submitButtonSelector,  inactiveButtonClass) => {
   submitButtonSelector.classList.remove(inactiveButtonClass);
   submitButtonSelector.disabled = false;
}

const hasInvalidInput = (inputs) => {
   return inputs.some(input => !input.validity.valid);
}

 enableValidation  (config);
    


