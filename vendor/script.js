
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupButton = document.querySelector('.popup__button');

const formInput = document.querySelector('.popup__input');

function openedPopup() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openedPopup);

function closedPopup() {
    popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', closedPopup);
popupButton.addEventListener('click', closedPopup);



const input = document.querySelectorAll('.popup__input');
const inputTitle = document.querySelector('.popup__input-title');
const inputSubtitle = document.querySelector('.popup__input-subtitle');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

inputTitle.value = 'Жак-Ив Кусто';
inputSubtitle.value = 'Исследователь океана';

function getInput() {
    profileTitle.textContent = inputTitle.value;
    profileSubtitle.textContent = inputSubtitle.value;
}

popupButton.addEventListener('click', getInput);
