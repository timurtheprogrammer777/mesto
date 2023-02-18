const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.profile-popup');
const popupClose = document.querySelector('.close-icon__image');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupFormProfile = document.forms["form-profile"];
const formInputTitle = document.querySelector('#popup__input-title');
const formInputSubtitle = document.querySelector('#popup__input-subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
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

const templateElement = document.querySelector('#template__element').content.querySelector('.element');
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

function createCard(item) {
  const card = templateElement.cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  card.querySelector('.element__title').textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  card.querySelector('.element__button').addEventListener('click', toggleLike);
  card.querySelector('.element__trash-icon').addEventListener('click', () => card.remove());

  cardImage.addEventListener('click', () => {
    openPopup(popupImage);
    popupImageImage.src = item.link;
    popupImageImage.alt = item.name;
    popupImageText.textContent = item.name;
  });

  return card;
}

function toggleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function renderCards() {
  const cards = initialCards.map(item => {
    return createCard(item);
  });

  elementList.append(...cards);
}
renderCards();

function addCard(evt) {
  evt.preventDefault();
  const title = formInputTitleAdd.value;
  const link = formInputSubtitleAdd.value;
  const card = createCard({
    name: title,
    link: link
  });
  closePopup(popupAdd);
  evt.target.reset();
  elementList.prepend(card);
}


popupFormAdd.addEventListener('submit', addCard);

buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});