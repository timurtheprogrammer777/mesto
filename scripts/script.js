const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-icon');

const popupProfile = document.querySelector('.profile-popup');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup-image');

// const popupClose = document.querySelector('.close-icon');
const buttonEdit = document.querySelector('.profile__edit-button');

const popupForm = document.querySelector('.popup__form');
const formInputTitle = document.querySelector('#popup__input-title');
const formInputSubtitle = document.querySelector('#popup__input-subtitle');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(0));
  button.addEventListener('click', () => closePopup(1));
});

function openPopup(index) {
  popups[index].classList.add('popup_opened'); 
} 
function closePopup(index) {
  popups[index].classList.remove('popup_opened');
} 

function gInout() {
  formInputTitle.value = profileTitle.textContent;
  formInputSubtitle.value = profileSubtitle.textContent;
}
function getInput(evt) {
    evt.preventDefault();
    profileTitle.textContent = formInputTitle.value;
    profileSubtitle.textContent = formInputSubtitle.value;
    closePopup(0);
} // функция получает значение влью введенное в поля и заменяет текст классов profile__title и profile__subtitle

buttonEdit.addEventListener('click', ()=> openPopup(0));
buttonEdit.addEventListener('click', gInout);
popupForm.addEventListener('submit', getInput);

// вторая проектная работа по JS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const buttonAdd = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.close-icon_type_add');
const popupFormAdd = document.querySelector('.popup__form_type_add');

const templateElement = document.querySelector('#template__element').content.querySelector('.element');
const elementList = document.querySelector('.elements__list');
const popupButtonCreate = document.querySelector('.popup__button_type_add');
const formInputTitleAdd = document.querySelector('#popup__input-title_type_add');
const formInputSubtitleAdd = document.querySelector('#popup__input-subtitle_type_add');

const cardImage = templateElement.querySelector('.element__image');
const cardTitle = templateElement.querySelector('.element__title');


const popupImageText = document.querySelector('.popup-image__discription');
const popupImageImage = document.querySelector('.popup-image__image');
const popupCloseImg = document.querySelector('.close-icon_theme_popup-image');
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


function renderCards() {
  const cards = initialCards.map( item => {
    cardImage.src = item.link;
    cardTitle.textContent = item.name;
    cardImage.alt = cardTitle.textContent;
    const card = templateElement.cloneNode(true);
    const likeButton = card.querySelector('.element__button').addEventListener('click', likeFunc);
    const ButtonDelete = card.querySelector('.element__trash-icon').addEventListener('click', () => {card.remove();});

    const popupTitleText = card.querySelector('.element__title-popup');
    const cardImagePop = card.querySelector('.element__image-popup');
    cardImagePop.addEventListener('click', () => {
      popupImage.classList.add('popup-image_opened');
      popupImageImage.src = cardImagePop.src;
      popupImageText.textContent = popupTitleText.textContent;
    });

    return card;
  });
  
  elementList.append(...cards);
}
renderCards();


// function openPopupAdd() {
//     popupAdd.classList.add('popup_opened');
// }
// function closePopupAdd() {
//     popupAdd.classList.remove('popup_opened');
// }
// function closePopupImg() {
//     popupImage.classList.remove('popup-image_opened');
// } 
function likeFunc(evt){
    evt.target.classList.toggle('element__like_active');
}


function addCard(evt) {
  evt.preventDefault();
  cardTitle.textContent = formInputTitleAdd.value;
  cardImage.src =  formInputSubtitleAdd.value;
  cardImage.alt = cardTitle.textContent;
  const card = templateElement.cloneNode(true);   

  const likeButton = card.querySelector('.element__button').addEventListener('click', likeFunc);
  const ButtonDelete = card.querySelector('.element__trash-icon').addEventListener('click', () => {card.remove();});

  const popupTitleText = card.querySelector('.element__title-popup');
  const cardImagePop = card.querySelector('.element__image-popup');
  cardImagePop.addEventListener('click', () => {
    popupImage.classList.add('popup-image_opened');
    popupImageImage.src = cardImagePop.src;
    popupImageText.textContent = popupTitleText.textContent;
  });

  elementList.prepend(card);
  closePopupAdd();
}

// popupCloseImg.addEventListener('click', closePopupImg);
// popupClose.addEventListener('click', ()=> closePopup(1));
buttonAdd.addEventListener('click', ()=> openPopup(1));
// popupCloseAdd.addEventListener('click', closePopupAdd);
popupFormAdd.addEventListener('submit', addCard);



