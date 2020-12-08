import './style/style.scss';


const nav = document.querySelector('.nav');

let navbarFade = () => {

  let scroll = window.pageYOffset;
  if (scroll > 20) {
    nav.classList.add("faded")
  } else {
    nav.classList.remove("faded")
  }
}
window.addEventListener('scroll', navbarFade)



