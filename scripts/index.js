import {
  Card
} from './Card.js';

import {
  FormValidator
} from './FormValidator.js';

import {
  initialCards
} from './constants.js';

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.profile-popup');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupFormProfile = document.forms["form-profile"];
const formInputTitle = document.querySelector('#popup__input-title');
const formInputSubtitle = document.querySelector('#popup__input-subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupAdd = document.querySelector('.popup_type_add')
const buttonAdd = document.querySelector('.profile__add-button');
const popupFormAdd = document.forms["form-add"];
const elementList = document.querySelector('.elements__list');

const formInputTitleAdd = document.querySelector('#popup__input-title_type_add');
const formInputSubtitleAdd = document.querySelector('#popup__input-subtitle_type_add');

const popupImage = document.querySelector('.popup-image');
const popupImageImage = popupImage.querySelector('.popup-image__image');
const popupImageText = popupImage.querySelector('.popup-image__discription');

const cardSelectors = {
  template: '.template__element',
  element: '.element',
  element__trashIcon: '.element__trash-icon',
  element__image: '.element__image',
  element__itemInfo: '.element__item-info',
  element__title: '.element__title',
  element__button: '.element__button',
  element__like: '.element__like',
};

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: '.popup__input-error',
  invalidInputClass: 'popup__input_type_error'
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    closeByEscape(evt, popup);
  });
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt, popup) {
  if (evt.key == 'Escape') {
    closePopup(popup);
  }
}

function deleteErrorMessage() {
  const errorTextElements = document.querySelectorAll(config.inputErrorClass);
  const errorClassElements = document.querySelectorAll('.' + config.invalidInputClass);
  errorTextElements.forEach((errorTextElement) => {
    errorTextElement.textContent = '';
  });
  errorClassElements.forEach((errorClassElement) => {
    errorClassElement.classList.remove('popup__input_type_error');
  });
}

function fillProfileInputs() {
  formInputTitle.value = profileTitle.textContent;
  formInputSubtitle.value = profileSubtitle.textContent;
}

function unfillAddInputs() {
  formInputSubtitleAdd.value = '';
  formInputTitleAdd.value = '';
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = formInputTitle.value;
  profileSubtitle.textContent = formInputSubtitle.value;
  closePopup(popupProfile);
}

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


function createNewCard() {
  return new Card(cardSelectors, popupImage, popupImageImage, popupImageText);
}

function renderCards() {
  const card = createNewCard();
  const cards = initialCards.map(item => {

    return card.createCard(item);
  });

  elementList.append(...cards);
}
renderCards();

function addCard(evt) {
  evt.preventDefault();
  const title = formInputTitleAdd.value;
  const link = formInputSubtitleAdd.value;
  const card = createNewCard();
  const newCard = card.createCard({
    name: title,
    link: link
  });

  closePopup(popupAdd);
  evt.target.reset();
  elementList.prepend(newCard);
}

buttonEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  fillProfileInputs();
  deleteErrorMessage();
});

popupFormProfile.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit', addCard);

buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
  unfillAddInputs();
  deleteErrorMessage();
});

const validationProfile = new FormValidator(config, popupFormProfile);
const validationAdd = new FormValidator(config, popupFormAdd);

validationProfile.enableValidation();
validationAdd.enableValidation();