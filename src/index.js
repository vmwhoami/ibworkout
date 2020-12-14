import './style/style.scss';


function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const contest = this; const
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(contest, args);
    };
    const callnow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callnow) func.apply(contest, args);
  };
}

const nav = document.querySelector('.nav');

const navbarFade = () => {
  const scroll = window.pageYOffset;
  if (scroll > 20) {
    nav.classList.add('faded');
  } else {
    nav.classList.remove('faded');
  }
};
window.addEventListener('scroll', debounce(navbarFade));

const phone = document.querySelector('.messanging__phone');
const cover = document.querySelector('.messanging__cover');
cover.addEventListener('click', e => {
  const cover = e.target.parentElement;

  if (cover.classList.contains('hide')) {

  } else {
    cover.classList.add('hide');
    phone.classList.left = 0;
    phone.classList.add('translate50');
  }
});


