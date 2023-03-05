export class Card {
    static _template = document.querySelector('.template__element').content;
    constructor(selectors) {
        this._selectors = selectors;
    }

    createCard(item) {
        const card = Card._template.querySelector(this._selectors.element).cloneNode(true);
        const cardImage = card.querySelector(this._selectors.element__image);
        card.querySelector(this._selectors.element__title).textContent = item.name;
        cardImage.src = item.link;
        cardImage.alt = item.name;

        // card.querySelector(this._selectors.element__button).addEventListener('click', _toggleLike);
        card.querySelector(this._selectors.element__trashIcon).addEventListener('click', () => card.remove());

        cardImage.addEventListener('click', () => {
            openPopup(popupImage);
            popupImageImage.src = item.link;
            popupImageImage.alt = item.name;
            popupImageText.textContent = item.name;
        });

        return card;
    }
    _toggleLike(evt) {
        evt.target.classList.toggle('element__like_active');
    }
    getInfo() {
        console.log(this)
    }


}