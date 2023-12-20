import { galleryItems } from './gallery-items.js';
// Change code below this line

//elements
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
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
`);
    instance.show();
}

//main code
galleryContainerEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

galleryContainerEl.addEventListener('click', handlerGalleryContainerElClick);

