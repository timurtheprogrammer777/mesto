import {
  Card
} from './Card.js';

// import {
//   FormValidator
// } from './FormValidator.js';




const sel = {
  popupImageText: '.popup-image__discription',
  popupImageImage: '.popup-image__image',
  popupImage: '.popup-image'
}
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.profile-popup');
// const popupClose = document.querySelector('.close-icon__image');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupFormProfile = document.forms["form-profile"];
const formInputTitle = document.querySelector('#popup__input-title');
const formInputSubtitle = document.querySelector('#popup__input-subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEscape);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEscape);
// }
function closePopup(popup) {
  if (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key == 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function fillProfileInputs() {
  formInputTitle.value = profileTitle.textContent;
  formInputSubtitle.value = profileSubtitle.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = formInputTitle.value;
  profileSubtitle.textContent = formInputSubtitle.value;
  closePopup(popupProfile);
}


buttonEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  fillProfileInputs();
});
popupFormProfile.addEventListener('submit', handleProfileFormSubmit);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('close-icon__image')) {
      closePopup(popup);
    }
  });
});

// вторая проектная работа по JS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const buttonSubmitAdd = document.querySelector('.popup__button_type_add');

const popupAdd = document.querySelector('.popup_type_add')
const buttonAdd = document.querySelector('.profile__add-button');

const popupFormAdd = document.forms["form-add"];

// const templateElement = document.querySelector('#template__element').content.querySelector('.element');
const elementList = document.querySelector('.elements__list');

const formInputTitleAdd = document.querySelector('#popup__input-title_type_add');
const formInputSubtitleAdd = document.querySelector('#popup__input-subtitle_type_add');

const popupImageText = document.querySelector('.popup-image__discription');
const popupImageImage = document.querySelector('.popup-image__image');
const popupImage = document.querySelector('.popup-image');
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// const sel = {
//   popupImageText: '.popup-image__discription',
//   popupImageImage: '.popup-image__image',
//   popupImage: '.popup-image'
// }

// function createCard(item) {
//   const card = templateElement.cloneNode(true);
//   const cardImage = card.querySelector('.element__image');
//   card.querySelector('.element__title').textContent = item.name;
//   cardImage.src = item.link;
//   cardImage.alt = item.name;

//   card.querySelector('.element__button').addEventListener('click', toggleLike);
//   card.querySelector('.element__trash-icon').addEventListener('click', () => card.remove());

//   cardImage.addEventListener('click', () => {
//     openPopup(popupImage);
//     popupImageImage.src = item.link;
//     popupImageImage.alt = item.name;
//     popupImageText.textContent = item.name;
//   });

//   return card;
// }

const selectors = {
  template: '.template__element',
  element: '.element',
  element__trashIcon: '.element__trash-icon',
  element__image: '.element__image',
  element__itemInfo: '.element__item-info',
  element__title: '.element__title',
  element__button: '.element__button',
  element__like: '.element__like',

  // popupImageText: '.popup-image__discription',
  // popupImageImage: '.popup-image__image',
  // popupImage: '.popup-image'
}


// function toggleLike(evt) {
//   evt.target.classList.toggle('element__like_active');
// }



function renderCards() {
  const card = new Card(selectors, sel);
  // card.getInfo();
  const cards = initialCards.map(item => {
    card.getInfo();

    return card.createCard(item);

  });

  elementList.append(...cards);
}
renderCards();

function addCard(evt) {
  evt.preventDefault();
  const title = formInputTitleAdd.value;
  const link = formInputSubtitleAdd.value;

  const card = new Card(selectors, sel);

  const newCard = card.createCard({
    name: title,
    link: link
  });


  closePopup(popupAdd);
  evt.target.reset();
  elementList.prepend(newCard);
}


popupFormAdd.addEventListener('submit', addCard);

buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});











const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: '.popup__input-error',
  invalidInputClass: 'popup__input_type_error'
};





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
        input.addEventListener('input', (evt) => handleFormInput(evt, form, this._config.invalidInputClass, button, this._config.inactiveButtonClass, inputs));
      });
      disableButton(button, this._config.inactiveButtonClass);
      form.addEventListener('reset', () => {
        disableButton(button, this._config.inactiveButtonClass);
      });
    });
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
  }

  _toggleButtonState(button, inactiveButtonClass, buttonState) {
    if (buttonState) {
      disableButton(button, inactiveButtonClass);
    } else
      enableButton(button, inactiveButtonClass);
  }

  _checkInputValidity(input, errorElement, invalidInputClass) {

    if (input.validity.valid) {
      hideError(input, errorElement, invalidInputClass);
    } else {
      showError(input, errorElement, invalidInputClass);
    }
  }

  _handleFormInput(evt, form, invalidInputClass, button, inactiveButtonClass, inputs) {
    const input = evt.target;
    const errorElement = form.querySelector(`.popup__input-error-${input.name}`);
    checkInputValidity(input, errorElement, invalidInputClass);
    const buttonState = hasInvalidInput(inputs);
    toggleButtonState(button, inactiveButtonClass, buttonState);
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


const validation = new FormValidator(config);