export class Card {
    static _template = document.querySelector('.template__element').content;
    constructor(selectors, sel) {
        this._selectors = selectors;
        this._sel = sel;
    }

    createCard(item) {

        const card = Card._template.querySelector(this._selectors.element).cloneNode(true);
        const cardImage = card.querySelector(this._selectors.element__image);
        cardImage.src = item.link;
        cardImage.alt = item.name;
        card.querySelector(this._selectors.element__title).textContent = item.name;
        card.querySelector(this._selectors.element__button).addEventListener('click', this._toggleLike);
        card.querySelector(this._selectors.element__trashIcon).addEventListener('click', () => card.remove());
        cardImage.addEventListener('click', () => {
            this._openPopup(this._sel, item);
            document.addEventListener('keydown', this._closeByEscape.bind(this));
        });

        return card;
    }
    _openPopup(sel, item) {
        const popupImage = document.querySelector(sel.popupImage);
        const popupImageImage = popupImage.querySelector(sel.popupImageImage);
        const popupImageText = popupImage.querySelector(sel.popupImageText);

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
    getInfo() {
        console.log(this);
    }
}