const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.profile-popup');


const popupClose = document.querySelector('.close-icon__image');
const buttonEdit = document.querySelector('.profile__edit-button');

const popupForm = popup.querySelector('.popup__form');
const formInputTitle = document.querySelector('#popup__input-title');
const formInputSubtitle = document.querySelector('#popup__input-subtitle');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup(popup) {
  popup.classList.add('popup_opened');
} 
function gi() {
  formInputTitle.value = profileTitle.textContent;
  formInputSubtitle.value = profileSubtitle.textContent;
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
} // функция закрывает попап

function getInput(evt) {
    evt.preventDefault();
    profileTitle.textContent = formInputTitle.value;
    profileSubtitle.textContent = formInputSubtitle.value;
    closePopup(popupProfile);
} // функция получает значение влью введенное в поля и заменяет текст классов profile__title и profile__subtitle

buttonEdit.addEventListener('click', () => openPopup(popupProfile));
buttonEdit.addEventListener('click', gi);

popupClose.addEventListener('click', () => closePopup(popupProfile));
popupForm.addEventListener('submit', getInput);

// вторая проектная работа по JS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const popupAdd = document.querySelector('.popup_type_add')
const buttonAdd = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.close-icon_type_add');
const popupFormAdd = document.querySelector('.popup__form_type_add');

const templateElement = document.querySelector('#template__element').content.querySelector('.element');
const elementList = document.querySelector('.elements__list');
// const popupButtonCreate = document.querySelector('.popup__button_type_add');
// const formInputTitleAdd = document.querySelector('#popup__input-title_type_add');
// const formInputSubtitleAdd = document.querySelector('#popup__input-subtitle_type_add');

// const cardImage = templateElement.querySelector('.element__image');
// const cardTitle = templateElement.querySelector('.element__title');

const popupImage = document.querySelector('.popup-image');
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

function createCard(item) {
  const card = templateElement.cloneNode(true);
  const likeButton = card.querySelector('.element__button').addEventListener('click', likeFunc);
  const ButtonDelete = card.querySelector('.element__trash-icon').addEventListener('click', () => card.remove());
  const cardImage = card.querySelector('.element__image');
  const cardTitle = card.querySelector('.element__title');
  cardImage.src = item.link;
  cardTitle.textContent = item.name;
  cardImage.alt = item.name;

  return card;
}

function renderCards() {
  const cards = initialCards.map( item => {
    
  return createCard(item);

    // const popupTitleText = card.querySelector('.element__title-popup');
    // const cardImagePop = card.querySelector('.element__image-popup');
    // cardImagePop.addEventListener('click', () => {
    //   popupImage.classList.add('popup-image_opened');
    //   popupImageImage.src = cardImagePop.src;
    //   popupImageText.textContent = popupTitleText.textContent;
    // });

  });
  
  elementList.append(...cards);
}
renderCards();

function addCard(evt) {
  evt.preventDefault();
  const formInputTitleAdd = document.querySelector('#popup__input-title_type_add').value;
  const formInputSubtitleAdd = document.querySelector('#popup__input-subtitle_type_add');
  const cardTitle = formInputTitleAdd;
  card = createCard({cardImage : cardTitle});
  // cardTitle.textContent = formInputTitleAdd.value;
// cardTitle.textContent = formInputTitleAdd.value;
// cardImage.src =  formInputSubtitleAdd.value;
// cardImage.alt = cardTitle.textContent;
  closePopup(popupAdd);

  elementList.prepend(card);

  // return createCard(item);
}

popupFormAdd.addEventListener('submit', addCard);


// function closePopupImg() {
//     popupImage.classList.remove('popup-image_opened');
// } 
function likeFunc(evt){
    evt.target.classList.toggle('element__like_active');
}


// function addCard(evt) {
//   evt.preventDefault();
  
//   // cardTitle.textContent = formInputTitleAdd.value;
//   // cardImage.src =  formInputSubtitleAdd.value;
//   // cardImage.alt = cardTitle.textContent;
//   // const card = templateElement.cloneNode(true);   

//   // const likeButton = card.querySelector('.element__button').addEventListener('click', likeFunc);
//   // const ButtonDelete = card.querySelector('.element__trash-icon').addEventListener('click', () => {card.remove();});

//   const popupTitleText = card.querySelector('.element__title-popup');
//   const cardImagePop = card.querySelector('.element__image-popup');
//   cardImagePop.addEventListener('click', () => {
//     popupImage.classList.add('popup-image_opened');
//     popupImageImage.src = cardImagePop.src;
//     popupImageText.textContent = popupTitleText.textContent;
//   });

//   elementList.prepend(card);
//   closePopup(popupAdd);
// }

// popupCloseImg.addEventListener('click', closePopupImg);
buttonAdd.addEventListener('click', () => openPopup(popupAdd));
popupCloseAdd.addEventListener('click', () => closePopup(popupAdd));
// popupFormAdd.addEventListener('submit', addCard);



