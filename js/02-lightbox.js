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

//main code
galleryContainerEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });