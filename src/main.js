import { button } from "./js/formSrc/button.js";
import { createGaleryItems } from "./js/gallerySrc/createGalery";
import { showModalMsg } from "./js/izitoast";
import { loader } from "./js/loader";
import { getImg } from "./js/pixabay-api";
import { gallery } from "./js/render-functions";

// page element
const formEl = document.querySelector('.search-form');
const btnLoadMore = document.querySelector('#load-more')

// main variables
let curentPage = 1
let pageCount = 1
let serchTxt = '' 
let serchCategory = '';

formEl.addEventListener('submit', submitForm);
formEl.addEventListener('input', inputForm);
btnLoadMore.addEventListener('click', loadMore);


function inputForm(form) {

    if (form.currentTarget.elements.searchText.value.length > 0) {
        button.active()
        return
    }
    button.disable()
}

function submitForm(form) {

  form.preventDefault();

    // get serch info from form
    // set default params if the search is repeated
    curentPage = 1;
    pageCount = 1;
    // get data from input field
    serchTxt = form.currentTarget.elements.searchText.value.trim();
    serchCategory = form.currentTarget.elements.category.value
    
    // data verification
    if (serchTxt.length < 2) {
        showModalMsg('the search word must contain at least 2 letters', 'red');
        form.currentTarget.reset();
        return
    }

    loader.show()
    gallery.clear()

    // fetching data from server
    getImg(serchTxt, serchCategory)
      .then(res => {
        if (res.data.hits.length === 0) {
          showModalMsg(
            'Sorry, there are no images matching your search query. Please try again!'
          );
          return;
        }

        pageCount = Math.ceil(res.data.totalHits / 15)
        gallery.addItems(createGaleryItems(res.data.hits));
        if (curentPage === pageCount)
          showModalMsg(
            "We're sorry, but you've reached the end of search results.",
            'blue'
          );
      })
      .catch(err => {
        showModalMsg('error ' + err);
        return;
      })
      .finally(() => {
        loader.close(curentPage, pageCount);
        form.target.reset();
      });
    
}

function loadMore(btn) {

    curentPage += 1
  
    // fetching data from server
    loader.show();
  getImg(serchTxt, serchCategory, curentPage)
    .then(res => {
      if (res.data.hits.length === 0) {
        showModalMsg(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      gallery.addItems(createGaleryItems(res.data.hits));
      const scrollHeight = document.querySelector('.gallery-item').clientHeight;
      window.scrollBy({
        top: scrollHeight * 2,
        behavior: 'smooth',
      });
    })
    .catch(err => {
      showModalMsg('error ' + err);
      return;
    })
    .finally(() => {
      loader.close(curentPage, pageCount);
      if ( curentPage === pageCount ) showModalMsg(
        "We're sorry, but you've reached the end of search results.",
        'blue'
      );
    });
}
