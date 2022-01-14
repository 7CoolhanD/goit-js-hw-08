// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryImgItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item"
  href="${original}">
  <img class="gallery__image" src="${preview}"
  alt="${description}" />
  </a>`,
  )
  .join('');

refs.gallery.insertAdjacentHTML('beforeend', galleryImgItems);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
