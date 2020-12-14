import './style/style.scss';
import scrollfade from './components/navscroll';
scrollfade()


const phone = document.querySelector('.messanging__phone');
const cover = document.querySelector('.messanging__cover');
cover.addEventListener('click', e => {
  const cover = e.target.parentElement;

  if (!cover.classList.contains('hide')) {
    cover.classList.add('hide');
    phone.classList.left = 0;
    phone.classList.add('translate50');
  }

});
