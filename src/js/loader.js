

export const loader = {
  loader: document.querySelector('.loader-wraper'),
  btnLoadMore: document.querySelector('.button-wrapper'),

  show() {
    this.loader.classList.remove('hiden');
    this.btnLoadMore.classList.add('hiden');
  },

  close(curentPage, totalPage) {
    this.loader.classList.add('hiden');
    if (curentPage < totalPage) this.btnLoadMore.classList.remove('hiden');
  },
};