const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-open');
const modalBtnClose = document.querySelector('.modal-close');
const modalBtnOpenMobail = document.querySelector('.modal-open-mobile');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
modalBtnOpenMobail.addEventListener('click', toggleModal);
