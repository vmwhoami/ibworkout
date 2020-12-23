import './style/style.scss';
import scrollfade from './components/navscroll';
scrollfade()


let uncheckNavCheckbox = () => {
  let mobilenav = document.querySelectorAll('.navigation-item');
  mobilenav.forEach(el => {
    el.addEventListener('click', () => {
      let checkbox = document.querySelector('.navigation-checkbox')
      checkbox.checked = false;
    })
  })
}
uncheckNavCheckbox() 