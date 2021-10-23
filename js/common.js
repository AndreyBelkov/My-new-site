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

barSocial.onclick = function (evt) {
  evt.preventDefault();
  social.classList.remove('hidden');
};

closes.onclick = function (evt) {
  evt.preventDefault();
  social.classList.add('hidden');
};

arrowUp.onclick = function (evt) {
  evt.preventDefault();
  window.scrollTo(0, 0);
};

vectorDown.onclick = function () {
  footerOptionsContent.classList.toggle('close');
  vectorDown.classList.toggle('vector-up');
};

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  };
  if (window.pageYOffset > 1400) {
    barSocial.classList.remove('visibility');
  } else {
    barSocial.classList.add('visibility');
  };
  if (window.pageYOffset > 4000) {
    arrowUp.classList.remove('visibility');
  } else {
    arrowUp.classList.add('visibility');
  };
  headerMenu.classList.remove('mobile-menu');
};

for (let scroll of scrolls) {
  scroll.onclick = function (evt) {
    evt.preventDefault();
    let dataId = scroll.getAttribute('data-scroll');
    document.querySelector(dataId).scrollIntoView({ block: "start" });
    headerMenu.classList.remove('mobile-menu');
  };
};

for (let openPopup of openPopups) {
  openPopup.onclick = function (evt) {
    evt.preventDefault();
    modalWrapper.classList.add('open');
    body.classList.add('noscroll');
  };
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