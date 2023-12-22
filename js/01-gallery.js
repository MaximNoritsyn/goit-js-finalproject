import { galleryItems } from './gallery-items.js';
// Change code below this line

//constants
const galleryContainerEl = document.querySelector('.gallery');

//functions
function createGalleryItemMarkup({ preview, original, description }) {
    return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </li>`;
}

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(createGalleryItemMarkup).join('');
}

function handlerGalleryContainerElClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }
    const modalWindow = basicLightbox.create(`
        <div div class= "modal" >
            <img src="" width="800" height="600">
        </div>
    `);
    const keydownHandler = handlerModalClose.bind(modalWindow);
    modalWindow.keydownHandler = keydownHandler;
    modalWindow.element().querySelector('img').src = event.target.dataset.source;
    modalWindow.show();
    document.addEventListener('keydown', keydownHandler);
}

function handlerModalClose(event) {
    if (event.key === 'Escape') {
        this.close();
        document.removeEventListener('keydown', this.keydownHandler);
    }
}

//main code
galleryContainerEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

galleryContainerEl.addEventListener('click', handlerGalleryContainerElClick);
