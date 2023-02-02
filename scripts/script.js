const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.profile-popup');

const closeButtons = document.querySelectorAll('.close-icon');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});



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

// const popupAdd = document.querySelector('.popup_type_add')
// const buttonAdd = document.querySelector('.profile__add-button');
// const popupCloseAdd = document.querySelector('.close-icon_type_add');
// const popupFormAdd = document.querySelector('.popup__form_type_add');

// const templateElement = document.querySelector('#template__element').content.querySelector('.element');
// const elementList = document.querySelector('.elements__list');

// const formInputTitleAdd = document.querySelector('#popup__input-title_type_add');
// const formInputSubtitleAdd = document.querySelector('#popup__input-subtitle_type_add');

// const popupImageText = document.querySelector('.popup-image__discription');
// const popupImageImage = document.querySelector('.popup-image__image');
// const popupCloseImg = document.querySelector('.close-icon_theme_popup-image');
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ]; 

// const popupImage = document.querySelector('.popup-image');


// function createCard(item) {
//   const card = templateElement.cloneNode(true);
//   card.querySelector('.element__title').textContent = item.name;
//   card.querySelector('.element__image').src = item.link;
//   card.querySelector('.element__image').alt = item.name;

//   const likeButton = card.querySelector('.element__button').addEventListener('click', likeFunc);
//   const ButtonDelete = card.querySelector('.element__trash-icon').addEventListener('click', () => card.remove());

  
//   const cardImage = card.querySelector('.element__image');
//   cardImage.addEventListener('click', () => {
//   openPopup(popupImage);
//   popupImageImage.src = item.link;
//   popupImageImage.alt = item.name;
//   popupImageText.textContent = item.name;
//   });

//   return card;
// }

// function renderCards() {
//   const cards = initialCards.map( item => {
//   return createCard(item);
//   });
  
//   elementList.append(...cards);
// }
// renderCards();

// function addCard(evt) {
//   evt.preventDefault();
//   const title = formInputTitleAdd.value;
//   const link =  formInputSubtitleAdd.value;
//   const card = createCard({name: title, link: link});
//   closePopup(popupAdd);
//   evt.target.reset();
//   elementList.prepend(card);
// }




// function likeFunc(evt){
//     evt.target.classList.toggle('element__like_active');
// }



// popupFormAdd.addEventListener('submit', addCard);
// popupCloseImg.addEventListener('click', () => closePopup(popupImage));
// buttonAdd.addEventListener('click', () => openPopup(popupAdd));
// popupCloseAdd.addEventListener('click', () => closePopup(popupAdd));
