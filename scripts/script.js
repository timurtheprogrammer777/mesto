const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupButton = document.querySelector('.popup__button');

const popupForm = document.querySelector('.popup__form');
const formInputTitle = document.querySelector('#popup__input-title');
const formInputSubtitle = document.querySelector('#popup__input-subtitle');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function openedPopup() {
    popup.classList.add('popup_opened');
    formInputTitle.value = profileTitle.textContent;
    formInputSubtitle.value = profileSubtitle.textContent;
} // функция открывает попап и заносит вэлью значние из инпутов в текст классов profile__title и profile__subtitle

function closedPopup() {
    popup.classList.remove('popup_opened');
} // функция закрывает попап

function getInput(evt) {
    evt.preventDefault();
    profileTitle.textContent = formInputTitle.value;
    profileSubtitle.textContent = formInputSubtitle.value;
    closedPopup();
} // функция получает значение влью введенное в поля и заменяет текст классов profile__title и profile__subtitle

buttonEdit.addEventListener('click', openedPopup);
popupClose.addEventListener('click', closedPopup);
popupForm.addEventListener('submit', getInput);