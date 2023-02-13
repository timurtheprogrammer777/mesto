
const popupProfile = document.querySelector('.profile-popup');
const closeButtons = document.querySelectorAll('.close-icon');

const popupClose = document.querySelector('.close-icon__image');
const buttonEdit = document.querySelector('.profile__edit-button');

const popupFormProfile = document.querySelector('.popup__form_type_profile');
const formInputTitle = document.querySelector('#popup__input-title');
const formInputSubtitle = document.querySelector('#popup__input-subtitle');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');





function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      closePopup(popup);
    }
  })
} 


// function CloseEsc() {
//   document.addEventListener('keydowm', (evt) => {
//     if(evt.key =='Escape') {
//       closePopup();
//     }
//   });
// }


function closePopup(popup) {
  popup.classList.remove('popup_opened');
} 

function inputText() {
  formInputTitle.value = profileTitle.textContent;
  formInputSubtitle.value = profileSubtitle.textContent;
}

function getInput(evt) {
  evt.preventDefault();
  profileTitle.textContent = formInputTitle.value;
  profileSubtitle.textContent = formInputSubtitle.value;
  closePopup(popupProfile);
} // функция получает значение влью введенное в поля и заменяет текст классов profile__title и profile__subtitle

closeButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

buttonEdit.addEventListener('click', () => {
  openPopup(popupProfile);
  inputText();
});
popupFormProfile.addEventListener('submit', getInput);

// вторая проектная работа по JS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const buttonSubmitProfile = document.querySelector('.popup__button_type_profile');
const buttonSubmitAdd = document.querySelector('.popup__button_type_add');

const popupAdd = document.querySelector('.popup_type_add')
const buttonAdd = document.querySelector('.profile__add-button');
const popupFormAdd = document.querySelector('.popup__form_type_add');

const templateElement = document.querySelector('#template__element').content.querySelector('.element');
const elementList = document.querySelector('.elements__list');

const formInputTitleAdd = document.querySelector('#popup__input-title_type_add');
const formInputSubtitleAdd = document.querySelector('#popup__input-subtitle_type_add');

const popupImageText = document.querySelector('.popup-image__discription');
const popupImageImage = document.querySelector('.popup-image__image');
const popupImage = document.querySelector('.popup-image');
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
  card.querySelector('.element__title').textContent = item.name;
  card.querySelector('.element__image').src = item.link;
  card.querySelector('.element__image').alt = item.name;

  const likeButton = card.querySelector('.element__button').addEventListener('click', likeFunc);
  const ButtonDelete = card.querySelector('.element__trash-icon').addEventListener('click', () => card.remove());

  const cardImage = card.querySelector('.element__image');
  cardImage.addEventListener('click', () => {
  openPopup(popupImage);
  popupImageImage.src = item.link;
  popupImageImage.alt = item.name;
  popupImageText.textContent = item.name;
  });

  return card;
}

function renderCards() {
  const cards = initialCards.map( item => {
  return createCard(item);
  });

  elementList.append(...cards);
}
renderCards();

function addCard(evt) {
  evt.preventDefault();
  const title = formInputTitleAdd.value;
  const link =  formInputSubtitleAdd.value;
  const card = createCard({name: title, link: link});
  closePopup(popupAdd);
  evt.target.reset();
  elementList.prepend(card);
}

function likeFunc(evt){
  evt.target.classList.toggle('element__like_active');
}

popupFormAdd.addEventListener('submit', addCard);
buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
  disableButton(buttonSubmitAdd, config.inactiveButtonClass); 
});

//////////////////////////////////////////////////

