import {
  Card
} from './Card.js';

import {
  FormValidator
} from './FormValidator.js';

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

const popupSelectors = {
  popupImageText: '.popup-image__discription',
  popupImageImage: '.popup-image__image',
  popupImage: '.popup-image'
};

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

const formsValidation = {
  formProfile: 'form-profile',
  formAdd: 'form-add'
};


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

function renderCards() {
  const card = new Card(cardSelectors, popupSelectors);
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
  const card = new Card(cardSelectors, popupSelectors);
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
});

popupFormProfile.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit', addCard);

buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});

const validation = new FormValidator(config, formsValidation);
validation.enableValidation();