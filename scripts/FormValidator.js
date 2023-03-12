export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    }

    enableValidation() {
        const forms = document.querySelectorAll(this._config.formSelector);
        forms.forEach(form => {
            const inputs = Array.from(form.querySelectorAll(this._config.inputSelector));
            const button = form.querySelector(this._config.submitButtonSelector);
            inputs.forEach(input => {
                input.addEventListener('input', (evt) => this._handleFormInput(evt, form, this._config.invalidInputClass, button, this._config.inactiveButtonClass, inputs));
            });
            this._disableButton(button, this._config.inactiveButtonClass);
            form.addEventListener('reset', () => {
                this._disableButton(button, this._config.inactiveButtonClass);
            });
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