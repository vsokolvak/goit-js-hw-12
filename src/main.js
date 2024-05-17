import { button } from "./js/formSrc/button.js";
import { createGaleryItems } from "./js/gallerySrc/createGalery";
import { showModalMsg } from "./js/izitoast";
import { loader } from "./js/loader";
import { getImg } from "./js/pixabay-api";
import { gallery } from "./js/render-functions";

// page element
const formEl = document.querySelector('.search-form');
const btnLoadMore = document.querySelector('#load-more')
const btnLoadMoreWraper = document.querySelector('.button-wrapper');
const endCollectionsMessage = document.querySelector('.end-colections-message')

// main variables
let curentPage = 1
let pageCount = 0
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

    // get serch info from form
    form.preventDefault()
    endCollectionsMessage.classList.add('hiden');
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
          pageCount = 0;
          btnLoadMoreWraper.classList.add('hiden');
          endCollectionsMessage.classList.add('hiden');
          return;
        }

        pageCount = Math.ceil(res.data.totalHits / 15)
        gallery.addItems(createGaleryItems(res.data.hits));
        if (curentPage === pageCount) endCollectionsMessage.classList.remove('hiden');
      })
      .catch(err => {
        showModalMsg('error ' + err);
        return;
      })
      .finally(() => {
        loader.close();
        if (curentPage < pageCount) {
          btnLoadMoreWraper.classList.remove('hiden');
        };
        form.target.reset();
      });
    
}

function loadMore(btn) {

    curentPage += 1
  
    // fetching data from server
    btnLoadMoreWraper.classList.add('hiden');
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
      loader.close();
      if ( curentPage < pageCount ) btnLoadMoreWraper.classList.remove('hiden'); else endCollectionsMessage.classList.remove('hiden');
    });
}
