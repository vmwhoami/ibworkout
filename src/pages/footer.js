import React from 'react';
import {
  Logo, Instagram, Vk, FaceBk,
} from '../components/Svgs';

const Footer = () => (
  <footer className="footer">
    <div className="footer__social">
      <div className="footer__logo">
        <button type="button" aria-label="footer-logo" className="footer__atag" target="blank" href="#">
          <Logo styling="footer__svglogo" />
        </button>
      </div>
      <div className="footer__socialbtns">
        <a className="footer__roundbtn" target="blank" href="https://www.instagram.com/innabogdan/">
          <Instagram styling="footer__svg" />
        </a>
        <a className="footer__roundbtn" target="blank" href="http://">
          <Vk styling="footer__svg" />
        </a>
        <a className="footer__roundbtn" target="blank" href="https://www.facebook.com/profile.php?id=100026188263111">
          <FaceBk styling="footer__svg" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
