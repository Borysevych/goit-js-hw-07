import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkUp(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', modalOnClick);

function createGalleryItemsMarkUp(galleryItems) {
    
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>
        `;
    }).join('');
}

function modalOnClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}">
`);
    instance.show();

    galleryRef.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            instance.close();
        }
    });
}