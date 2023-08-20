import { galleryItems } from './gallery-items.js';
// Change code below this line


// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryContainer = document.querySelector(".gallery");
const renderList = (arr, container) => {
    const markup = arr.map(({ preview, original, description }) => 
        
    `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      width="300"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
     </a>
    </li>`).join("");

container.insertAdjacentHTML("beforeend", markup);

};

renderList(galleryItems, galleryContainer)
console.log(galleryContainer);



// Реалізація делегування на ul.gallery і отримання url великого зображення.

galleryContainer.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    // console.log(event.target);
    const originalImg = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src="${originalImg}"
         width="1280" height="auto"
      >`,
        {
        onShow: () => { document.addEventListener('keydown', onEscape) },
        onClose: () => { document.removeEventListener('keydown', onEscape) }
        });

    instance.show();


function onEscape(event) {
    if (event.key === 'Escape') {
    instance.close();
    }
    };   
};

