// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

// Change code below this line

const gallery = document.querySelector('.gallery');

const listGallery = galleryItems.map(
  ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__item" class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"      
      alt="${description}"      
    />
  </a>  
</div>`
);
gallery.innerHTML = listGallery.join(' ');
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
