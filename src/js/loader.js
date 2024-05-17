

export const loader = {
  loader: document.querySelector('.loader-wraper'),

  show() {
    this.loader.classList.remove('hiden');
  },

  close() {
    this.loader.classList.add('hiden');
  },
};