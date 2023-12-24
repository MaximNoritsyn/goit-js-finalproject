import { galleryItems } from './gallery-items.js';
// Change code below this line

//constants
const galleryContainerEl = document.querySelector('.gallery');
galleryContainerEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const modalWindow = basicLightbox.create(`
        <div div class= "modal" >
            <img src="" width="800" height="600">
        </div>
    `, {
        onShow: () => {
            document.addEventListener('keydown', keydownHandler);
        },
        onclose: () => {
            document.removeEventListener('keydown', keydownHandler);
        }
    });

const keydownHandler = handlerModalClose.bind(modalWindow);

galleryContainerEl.addEventListener('click', handlerGalleryContainerElClick);

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
    
    modalWindow.element().querySelector('img').src = event.target.dataset.source;
    modalWindow.show();
}

function handlerModalClose(event) {
    if (event.key === 'Escape') {
        this.close();
        document.removeEventListener('keydown', keydownHandler);
    }
}
