import './style/style.scss';


function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    let contest = this, args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(contest, args);
    };
    let callnow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callnow) func.apply(contest, args)
  }
}

const nav = document.querySelector('.nav');

let navbarFade = () => {

  let scroll = window.pageYOffset;
  if (scroll > 20) {
    nav.classList.add("faded")
  } else {
    nav.classList.remove("faded")
  }
}
window.addEventListener('scroll', debounce(navbarFade))



