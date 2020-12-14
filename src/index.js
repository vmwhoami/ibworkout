import './style/style.scss';
import scrollfade from './components/navscroll';
scrollfade()


function messagingBtns() {
  const container = document.querySelector('.messanging');
  let cover = document.querySelector('.messanging__cover');
  let phone = document.querySelector('.messanging__phone');
  let messanger = document.querySelector('.messanging__messenger');
  let whatsapp = document.querySelector('.messanging__whatsapp')
  container.addEventListener('click', () => {
    // cover.classList.add('hide');
    // phone.classList.add('phone_tr')
    // messanger.classList.add('messanger_tr')
    // whatsapp.classList.add('whatsapp_tr')
    // console.log(cover);

  });


}

messagingBtns()

