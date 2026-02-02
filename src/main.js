import './css/styles.css';

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import axios from "axios";

// import appendImagesToGallery from './js/render-functions.js';
import createGallery, {clearGallery} from './js/render-functions.js';
import {showLoader, hideLoader}  from './js/render-functions.js';
import getImagesByQuery from './js/pixabay-api.js';
const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');
const imageContainer = document.querySelector('.gallery');

 
const imagesPerPage = 12;
form.addEventListener('submit', onSearch);

async function onSearch(event){
    event.preventDefault();
    const query = input.value.trim();
    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query.',
            position: 'topRight'
        });
        return;
    }
    clearGallery();
    showLoader();
    try {
        const dataImg = await createGallery(query);
        console.log(dataImg);
        if (dataImg.hits.length === 0) {
            iziToast.error({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        } else {
            appendImagesToGallery(createGallery(dataImg.hits));
            iziToast.success({
                title: 'Success',
                message: `Found ${dataImg.totalHits} images.`,
                position: 'topRight'
            });
        }
    } catch (error) {
        console.log(error.message);
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images.',
            position: 'topRight'
        });
    } finally {
        hideLoader();
    }
}






