import React from 'react';
import planpng from '../assets/images/plan.png';
import coinpng from '../assets/images/coin.png';
import trainerpng from '../assets/images/trainer.png';

const Why = () => (
  <div className="why">
    <h2 className="why__heading white-color">Почему это удобно?</h2>
    <p className="why__p white-color">Тренируйтесь в комфортном ритме когда угодно и где угодно</p>

    <div className="why__container">
      <div className="why__section">
        <img className="why__img" src={planpng} alt="plan" />
        <p className="white-color">План занятий составляем индивидуально: он учитывает ваш образ жизни, цели и физические возможности</p>
      </div>

      <div className="why__section">
        <img className="why__img" src={coinpng} alt="coin" />
        <p className="white-color">Регулярная работа с личным тренером в онлайн-режиме стоит в несколько раз дешевле занятий с тренером в зале</p>
      </div>

      <div className="why__section">
        <img className="why__img" src={trainerpng} alt="plan" />
        <p className="white-color">Регулярная работа с личным тренером в онлайн-режиме стоит в несколько раз дешевле занятий с тренером в зале</p>
      </div>
    </div>
  </div>
);

export default Why;
