

/*rain**************************/
function rain() {
	let amount = 50;
	let body = document.querySelector('.body-background');
	let i = 0;

	while (i < amount) {
		let drop = document.createElement('i');

		let posY = Math.floor(Math.random() * window.innerHeight);
		let delay = Math.random * -20;
		let duration = Math.random() * 5;

		drop.style.top = posY + 'px';
		drop.style.animationDelay = delay+'s';
		drop.style.animationDuration = 5 + duration+'s';

		body.appendChild(drop);
		i++;
	};
};

rain();


/*menu**************************/

let headerBars = document.querySelector('.header__bars');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');

headerBars.onclick = function() {
	menu.classList.toggle('open');
	headerBars.classList.toggle('close');
	body.classList.toggle('no-scroll');
}




/*fixed menu**************************/

let header = document.querySelector('.header');
let toUp = document.querySelector('.toup');
let section = document.querySelectorAll('.section');
let menuLink = document.querySelectorAll('.menu__link');
let workText = document.querySelectorAll('.work__text');
let start = 0;

toUp.onclick = () => {
	window.scrollTo(0,0)
}

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
const containFixed = () => header.classList.contains('fixed');

window.onscroll = function 	() {

	if (scrollPosition() < start && !containFixed() && scrollPosition() > 500) {
		header.classList.add('fixed');
		toUp.classList.add('open');
		setTimeout(function() {
			header.classList.add('down');
		}, 10)
	} else if (scrollPosition() > start && containFixed() || scrollPosition() < 500) {
		header.classList.remove('fixed');
		toUp.classList.remove('open');
		setTimeout(function() {
			header.classList.remove('down');
		}, 10)
	}
	start = scrollPosition();



	/*activeLink**************************/
	section.forEach((el, i) => {
		if (el.offsetTop - 150 <= pageYOffset) {
			menuLink.forEach((el) => {
				if (el.classList.contains('link--active')) {
					el.classList.remove('link--active');
				};
			});
			menuLink[i].classList.add('link--active');
		};
	});

	/*active Text**************************/
	workText.forEach((el, i) => {
		if (el.offsetTop - window.innerHeight * .8 <= pageYOffset) {
			workText[i].classList.add('open')
		} else {
			workText[i].classList.remove('open')
		}
	});

};




/*scroll**************************/
let scrolls = document.querySelectorAll('[data-scroll]');

for (let scroll of scrolls) {
  scroll.onclick = function (evt) {
    evt.preventDefault();
    let dataId = scroll.getAttribute('data-scroll');
    document.querySelector(dataId).scrollIntoView({ block: "start" });
    menu.classList.remove('open');
    headerBars.classList.remove('close');
		body.classList.remove('no-scroll');
  };
};

/*modal**************************/
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');
let modalBtn = document.querySelector('#modal');

modalBtn.onclick = function() {
	modal.classList.add('open');
}

modalClose.onclick = function() {
	modal.classList.remove('open');
}












