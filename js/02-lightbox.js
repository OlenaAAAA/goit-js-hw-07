import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");
const renderList = (arr, container) => {
    const markup = arr.map(({ preview, original, description }) => 
        
    `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      width="1280"
      src="${preview}"
      alt="${description}"
      />
     </a>
    </li>`).join("");

container.insertAdjacentHTML("beforeend", markup);
};

renderList(galleryItems, galleryContainer)
console.log(galleryContainer);



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
    captionDelay: 250,
    });

