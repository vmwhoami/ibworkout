// import './style/style.scss';
// import scrollfade from './components/navscroll';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/style.scss'
ReactDOM.render(<App />, document.getElementById('root'));
// scrollfade();

// const uncheckNavCheckbox = () => {
//   const mobilenav = document.querySelectorAll('.navigation-item');
//   mobilenav.forEach(el => {
//     el.addEventListener('click', () => {
//       const checkbox = document.querySelector('.navigation-checkbox');
//       checkbox.checked = false;
//     });
//   });
// };
// uncheckNavCheckbox();