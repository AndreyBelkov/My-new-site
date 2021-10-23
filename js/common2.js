let barSocial = document.querySelector('.bars-social');
let social = document.querySelector('.social');
let closes = document.querySelector('.close');
let arrowUp = document.querySelector('.arrow-up');
let vectorDown = document.querySelector('.vector-down');
let footerOptionsContent = document.querySelector('.footer-options-content');
let header = document.querySelector('.header');
let windows = document.querySelector('window');
let sectionFifth = document.querySelector('.fifth');
let scrolls = document.querySelectorAll('[data-scroll]');
let openPopups = document.querySelectorAll('.openpopup');
let modalWrapper = document.querySelector('.modal-wrapper');
let modalClose = document.querySelector('.modal-close');
let footerLink = document.querySelector('.footer-column-third-link');
let modal = document.querySelector('.modal');
let modalInner = document.querySelector('.modal-inner');
let body = document.querySelector('body');
let burgerMobile = document.querySelector('.burger-mobile');
let headerMenu = document.querySelector('.header-menu');
let mobileMenuClose = document.querySelector('.mobile-menu-close');

burgerMobile.onclick = function () {
  headerMenu.classList.add('mobile-menu');
};

mobileMenuClose.onclick = function () {
  headerMenu.classList.remove('mobile-menu');
};

window.onscroll = function () {
  headerMenu.classList.remove('mobile-menu');
};

vectorDown.onclick = function () {
  footerOptionsContent.classList.toggle('close');
  vectorDown.classList.toggle('vector-up');
};


//modal********
footerLink.onclick = function (evt) {
  evt.preventDefault();
  modalWrapper.classList.add('open');
  body.classList.add('noscroll');
};

modalClose.onclick = function (evt) {
  evt.preventDefault();
  modalWrapper.style.visibility = "visible";
  modalWrapper.classList.remove('open');
  body.classList.remove('noscroll');
};

modal.onclick = function () {
  modalWrapper.style.visibility = "visible";
  modalWrapper.classList.remove('open');
  body.classList.remove('noscroll');
};

modalInner.onclick = function (event) {
  event.stopPropagation();
};

