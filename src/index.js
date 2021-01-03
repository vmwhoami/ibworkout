import './style/style.scss';
import scrollfade from './components/navscroll';

scrollfade();

const uncheckNavCheckbox = () => {
  const mobilenav = document.querySelectorAll('.navigation-item');
  mobilenav.forEach(el => {
    el.addEventListener('click', () => {
      const checkbox = document.querySelector('.navigation-checkbox');
      checkbox.checked = false;
    });
  });
};
uncheckNavCheckbox();