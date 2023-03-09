export class Card {
    static _template = document.querySelector('.template__element').content;
    constructor(cardSelectors, popupSelectors) {
        this._cardSelectors = cardSelectors;
        this._popupSelectors = popupSelectors;
    }

    createCard(item) {

        const card = Card._template.querySelector(this._cardSelectors.element).cloneNode(true);
        const cardImage = card.querySelector(this._cardSelectors.element__image);
        cardImage.src = item.link;
        cardImage.alt = item.name;
        card.querySelector(this._cardSelectors.element__title).textContent = item.name;
        card.querySelector(this._cardSelectors.element__button).addEventListener('click', this._toggleLike);
        card.querySelector(this._cardSelectors.element__trashIcon).addEventListener('click', () => card.remove());
        cardImage.addEventListener('click', () => {
            this._openPopup(this._popupSelectors, item);
            document.addEventListener('keydown', this._closeByEscape.bind(this));
        });

        return card;
    }
    _openPopup(popupSelectors, item) {
        const popupImage = document.querySelector(this._popupSelectors.popupImage);
        const popupImageImage = popupImage.querySelector(this._popupSelectors.popupImageImage);
        const popupImageText = popupImage.querySelector(this._popupSelectors.popupImageText);

        popupImageImage.src = item.link;
        popupImageImage.alt = item.name;
        popupImageText.textContent = item.name;

        popupImage.classList.add('popup_opened');
    }
    _closePopup(popup) {
        if (popup) {
            popup.classList.remove('popup_opened');
            document.removeEventListener('keydown', this._closeByEscape.bind(this));
        }
    }
    _closeByEscape(evt) {
        if (evt.key == 'Escape') {
            const openedPopup = document.querySelector('.popup_opened');
            this._closePopup(openedPopup);
        }
    }
    _toggleLike(evt) {
        evt.target.classList.toggle('element__like_active');
    }
}