import React from 'react';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__social">
        <div class="footer__logo">
          <a class="footer__atag" target="blank" href="#">
            {/* <svg class="footer__svglogo">
            <use xlink:href="./sprite.svg#icon-ibw"></use>
          </svg> */}
          </a>
        </div>
        <div class="footer__socialbtns">
          <a class="footer__roundbtn" target="blank" href="https://www.instagram.com/innabogdan/">
            {/* <svg class="footer__svg">
            <use xlink:href="./sprite.svg#icon-instagram"></use>
          </svg> */}
          </a>
          <a class="footer__roundbtn" target="blank" href="http://">
            {/* <svg class="footer__svg">
            <use xlink:href="./sprite.svg#icon-vk1"></use>
          </svg> */}
          </a>
          <a class="footer__roundbtn" target="blank" href="https://www.facebook.com/profile.php?id=100026188263111">
            {/* <svg class="footer__svg">
            <use xlink:href="./sprite.svg#icon-facebook-official"></use>
          </svg> */}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;