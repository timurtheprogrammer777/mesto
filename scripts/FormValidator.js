export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._button = this._form.querySelector(this._config.submitButtonSelector);
    }

    enableValidation() {
        this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._button = this._form.querySelector(this._config.submitButtonSelector);
        this._inputs.forEach(input => {
            input.addEventListener('input', (evt) => this._handleFormInput(evt, this._form, this._config.invalidInputClass, this._button, this._config.inactiveButtonClass, this._inputs));
        });
        this._disableButton(this._button, this._config.inactiveButtonClass);
        this._form.addEventListener('reset', () => {
            this._disableButton(this._button, this._config.inactiveButtonClass);
        });
    }
    deleteErrorMessage() {
        const errorTextElements = document.querySelectorAll(this._config.inputErrorClass);
        const errorClassElements = document.querySelectorAll('.' + this._config.invalidInputClass);
        errorTextElements.forEach((errorTextElement) => {
            errorTextElement.textContent = '';
        });
        errorClassElements.forEach((errorClassElement) => {
            errorClassElement.classList.remove(this._config.invalidInputClass);
        });
    }


    _handleFormSubmit(evt) {
        evt.preventDefault();
    }
    _toggleButtonState(button, inactiveButtonClass, buttonState) {
        if (buttonState) {
            this._disableButton(button, inactiveButtonClass);
        } else
            this._enableButton(button, inactiveButtonClass);
    }

    _checkInputValidity(input, errorElement, invalidInputClass) {

        if (input.validity.valid) {
            this._hideError(input, errorElement, invalidInputClass);
        } else {
            this._showError(input, errorElement, invalidInputClass);
        }
    }

    _handleFormInput(evt, form, invalidInputClass, button, inactiveButtonClass, inputs) {
        const input = evt.target;
        const errorElement = form.querySelector(`.popup__input-error-${input.name}`);
        this._checkInputValidity(input, errorElement, invalidInputClass);
        const buttonState = this._hasInvalidInput(inputs);
        this._toggleButtonState(button, inactiveButtonClass, buttonState);
    }

    _showError(input, errorElement, invalidInputClass) {
        input.classList.add(invalidInputClass);
        errorElement.textContent = input.validationMessage;
    }

    _hideError(input, errorElement, invalidInputClass) {
        input.classList.remove(invalidInputClass);
        errorElement.textContent = '';
    }

    _disableButton(submitButtonSelector, inactiveButtonClass) {
        submitButtonSelector.classList.add(inactiveButtonClass);
        submitButtonSelector.disabled = true;
    }

    _enableButton(submitButtonSelector, inactiveButtonClass) {
        submitButtonSelector.classList.remove(inactiveButtonClass);
        submitButtonSelector.disabled = false;
    }

    _hasInvalidInput(inputs) {
        return inputs.some(input => !input.validity.valid);
    }

}