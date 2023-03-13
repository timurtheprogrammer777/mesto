export class Card {
    static _template = document.querySelector('.template__element').content;
    constructor(cardSelectors, popupImage, popupImageImage, popupImageText) {
        this._cardSelectors = cardSelectors;
        this._popupImage = popupImage;
        this._popupImageText = popupImageText;
        this._popupImageImage = popupImageImage;
        this._closeByEscape = this._closeByEscape.bind(this);
        this._handleCloseEsc = this._handleCloseEsc.bind(this);
    }

    createCard(item) {
        const card = this._getCardTemplate();

        this._setEventListeners(card, item);
        const cardImage = card.querySelector(this._cardSelectors.element__image);
        cardImage.src = item.link;
        cardImage.alt = item.name;
        card.querySelector(this._cardSelectors.element__title).textContent = item.name;

        return card;
    }
    _getCardTemplate() {
        return Card._template.querySelector(this._cardSelectors.element).cloneNode(true);
    }
    _setEventListeners(card, item) {
        card.querySelector(this._cardSelectors.element__button).addEventListener('click', this._toggleLike);
        card.querySelector(this._cardSelectors.element__trashIcon).addEventListener('click', () => card.remove());
        const cardImage = card.querySelector(this._cardSelectors.element__image);
        cardImage.addEventListener('click', () => {
            this._openPopup(this._popupSelectors, item);
            document.addEventListener('keydown', this._handleCloseEsc);
        });
    }
    _handleCloseEsc(evt) {
        this._closeByEscape(evt);
    }
    _openPopup(popupImage, item) {
        this._popupImageImage.src = item.link;
        this._popupImageImage.alt = item.name;
        this._popupImageText.textContent = item.name;

        this._popupImage.classList.add('popup_opened');
    }
    _closePopup() {
        this._popupImage.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleCloseEsc);
    }
    _closeByEscape(evt) {
        if (evt.key === 'Escape') {
            this._closePopup(this._popupImage);
        }
    }
    _toggleLike(evt) {
        evt.target.classList.toggle('element__like_active');
    }
}