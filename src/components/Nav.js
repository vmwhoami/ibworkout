import React from 'react';
import { Logo, Instagram, Vk, FaceBk } from './Svgs'

const Nav = () => {
  return (
    <nav className="nav">
      <MobileNav />
      <DescktopNav />
    </nav>
  )
}

export default Nav;

const MobileNav = () => {
  return (
    <div className="navigation">
      <div className="navigation__logo">
        <a className="logo__atag" href="#">
          <Logo />
        </a>
      </div>
      <input type="checkbox" name="nav" id="nav" className="navigation-checkbox" />
      <label htmlFor="nav" className="navigation-handle" >
        <span className="navigation-icon">&nbsp;</span>
      </label>
      <div className="navigation-background">&nbsp;</div>
      <div className="navigation-nav">
        <ul className="navigation-list">
          <li className="navigation-item"><a href="#trainer" className="navigation-link"> Тренер </a></li>
          <li className="navigation-item"><a href="#testimonials" className="navigation-link"> Отзывы</a></li>
          <li className="navigation-item"><a href="#form" className="navigation-link"> Записаться</a></li>
        </ul>
      </div>
    </div >
  )
}


const DescktopNav = () => {
  return (
    <div className="nav__container">
      <div className="nav__logo">
        <a className="logo__atag" target="blank" href="#">
          <Logo />
        </a>
      </div>
      <div className="nav__list">
        <a className="nav__lsitem" href="#trainer"> Тренер</a>
        <a className="nav__lsitem" href="#testimonials">Отзывы</a>
        <a className="nav__lsitem" href="#form">Записаться</a>
      </div>
      <SocialBtns />

    </div>
  )
}

const SocialBtns = () => {
  return (
    <div className="nav__socialbtns">
      <a className="nav__roundbtn" target="blank" href="https://www.instagram.com/innabogdan/">
        <Instagram />
      </a>
      <a className="nav__roundbtn" target="blank" href="http://">
        <Vk />
      </a >
      <a className="nav__roundbtn" target="blank" href="https://www.facebook.com/profile.php?id=100026188263111">
        <FaceBk />
      </a >

    </div >
  )
}

