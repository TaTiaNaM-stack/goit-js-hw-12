import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageContainer = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery_item a');

export default function createGallery(images = []) {
    const imagesMarkup = images.map(({id, webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
        return `<li class="gallery_item" id="${id}">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery_image"/>
    <div class="info">
        <p class="info_item">
            <b>Likes</b> ${likes}
        </p>
        <p class="info_item">   
            <b>Views</b> ${views}
        </p>
        <p class="info_item">
            <b>Comments</b> ${comments}
        </p>
        <p class="info_item">
            <b>Downloads</b> ${downloads}
        </p>
    </div>
    </a>
    </li>`;
    })
    .join('');
    return imagesMarkup;
};
export function clearGallery(){
    imageContainer.innerHTML = '';
};
export function showLoader(){
const loader = document.querySelector('.loader');
const visibility = document.querySelector('.visibility');
if (loader && visibility) {
    loader.style.display = 'block';
    document.body.appendChild(loader);
} 
class Loader {
    constructor() {
        this.loader = document.createElement('div');      
        document.body.appendChild(this.loader);
    }
}
new Loader();
};
export function hideLoader(){
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
        document.body.removeChild(loader);
    }
};

export function appendImagesToGallery(imagesMarkup){
    imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
        lightbox.refresh();
}
export function showLoadMoreButton(){
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'block';
    }
};
export function hideLoadMoreButton(){
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
};