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

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    const keydownHandler = handlerModalClose.bind(lightbox);
    lightbox.keydownHandler = keydownHandler;
    lightbox.on('show.simplelightbox', function () {
        document.addEventListener('keydown', keydownHandler);
    });
    
}

function handlerModalClose(event) {
    if (event.key === 'Escape') {
        this.close();
        document.removeEventListener('keydown', this.keydownHandler);
        return;
    }

    if (event.key === 'ArrowRight') {
        this.next();
        return;
    }

    if (event.key === 'ArrowLeft') {
        this.prev();
        return;
    }

}

//main code
galleryContainerEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

galleryContainerEl.addEventListener('click', handlerGalleryContainerElClick);