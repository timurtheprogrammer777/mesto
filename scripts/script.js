const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const buttonEdit = document.querySelector('.profile__edit-button');

const popupForm = document.querySelector('.popup__form');
const formInputTitle = document.querySelector('#popup__input-title');
const formInputSubtitle = document.querySelector('#popup__input-subtitle');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup() {
    popup.classList.add('popup_opened');
    formInputTitle.value = profileTitle.textContent;
    formInputSubtitle.value = profileSubtitle.textContent;
} // функция открывает попап и заносит вэлью значние из инпутов в текст классов profile__title и profile__subtitle

function closePopup() {
    popup.classList.remove('popup_opened');
} // функция закрывает попап

function getInput(evt) {
    evt.preventDefault();
    profileTitle.textContent = formInputTitle.value;
    profileSubtitle.textContent = formInputSubtitle.value;
    closePopup();
} // функция получает значение влью введенное в поля и заменяет текст классов profile__title и profile__subtitle

buttonEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', getInput);

// втроя проктная работа //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const popupAdd = document.querySelector('.popup_type_add')
const buttonAdd = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.popup__close-button_type_add');
const popupFormAdd = document.querySelector('.popup__form_type_add');

const templateElement = document
    .querySelector('#template__element')
    .content.querySelector('.element');
const elementList = document.querySelector('.elements__list');
const popupButtonCreate = document.querySelector('.popup__button_type_add');
const formInputTitleAdd = document.querySelector('#popup__input-title_type_add');
const formInputSubtitleAdd = document.querySelector('#popup__input-subtitle_type_add');
const initialCards = [
  {
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
const cardImage = templateElement.querySelector('.element__image');
const cardTitle = templateElement.querySelector('.element__title');

function renderCards() {
    initialCards.forEach( item => {
        cardImage.src = item.link;
        cardTitle.textContent = item.name;
        const card = templateElement.cloneNode(true);
        elementList.append(card);
    });
}
renderCards();

function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
}
function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}
function addCard(evt) {
    evt.preventDefault();
    formInputSubtitleAdd.value =  cardTitle.textContent;
    formInputTitleAdd.value =  cardImage.src;
    console.log('123');
    closePopupAdd();
}

function createCard(){
    cardImage.src = item.link;
    cardTitle.textContent = item.name;
    const card = templateElement.cloneNode(true);
}

buttonAdd.addEventListener('click', openPopupAdd);
popupCloseAdd.addEventListener('click', closePopupAdd);
popupFormAdd.addEventListener('submit', addCard);
