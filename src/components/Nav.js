import React, { useState, useEffect, useRef } from 'react';
import {
  Logo, Instagram, Vk, FaceBk,
} from './Svgs';

const Nav = () => {
  const [fade, setFade] = useState(false);

  const fadeOnScroll = () => {
    if (window.scrollY > 200) {
      setFade(true);
    } else {
      setFade(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fadeOnScroll);
    return () => {
      window.removeEventListener('scroll', fadeOnScroll);
    };
  }, []);

  return (
    <nav className={fade ? 'nav faded' : 'nav'}>
      <MobileNav />
      <DescktopNav />
    </nav>
  );
};

export default Nav;

const MobileNav = () => {
  const checkBoxChecker = useRef();
  function unsetCheckbox() {
    checkBoxChecker.current.checked = !checkBoxChecker.current.checked;
    return null;
  }
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <button type="button" className="logo__atag" href="#">
          <Logo styling="logo__svg" />
        </button>
      </div>
      <input type="checkbox" ref={checkBoxChecker} name="nav" id="nav" className="navigation-checkbox" />
      <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
      <label htmlFor="nav" className="navigation-handle">
        <span className="navigation-icon">&nbsp;</span>
      </label>
      <div className="navigation-background">&nbsp;</div>
      <div className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item"><a href="#trainer" className="navigation-link" onClick={unsetCheckbox}> Тренер </a></li>
          <li className="navigation-item"><a href="#testimonials" className="navigation-link" onClick={unsetCheckbox}> Отзывы</a></li>
          <li className="navigation-item"><a href="#form" className="navigation-link" onClick={unsetCheckbox}> Записаться</a></li>
        </ul>
      </div>
    </div>
  );
};

const DescktopNav = () => (
  <div className="nav__container">
    <div className="nav__logo">
      <a className="logo__atag" target="blank" href="#trainer">
        <Logo styling="logo__svg" />
      </a>
    </div>
    <div className="nav__list">
      <a className="nav__lsitem" href="#trainer"> Тренер</a>
      <a className="nav__lsitem" href="#testimonials">Отзывы</a>
      <a className="nav__lsitem" href="#form">Записаться</a>
    </div>
    <SocialBtns />

  </div>
);

const SocialBtns = () => (
  <div className="nav__socialbtns">
    <a className="nav__roundbtn" target="blank" href="https://www.instagram.com/innabogdan/">
      <Instagram styling="nav__svg" />
    </a>
    <a className="nav__roundbtn" target="blank" href="http://">
      <Vk styling="nav__svg" />
    </a>
    <a className="nav__roundbtn" target="blank" href="https://www.facebook.com/profile.php?id=100026188263111">
      <FaceBk styling="nav__svg" />
    </a>

  </div>
);
