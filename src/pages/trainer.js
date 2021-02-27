import React from 'react';
import inna from '../assets/images/Inngirea.jpg';

const Trainer = () => (
  <div className="trainer" id="trainer">
    <h3 className="hcenter text-white">Tренер</h3>
    <a className="trainer__container" href="https://www.instagram.com/innabogdan/">
      <div className="trainer__imgcontainer">
        <img src={inna} alt="Inna" />
      </div>
      <div className="trainer__description">
        <h1>Inna</h1>
        <h3>Силовые, функциональные, стретчинг</h3>
        <p>
          Инструктор тренажерного зала, персональный тренер, стретчинг,
          «Первая школа фитнеса», г. Москва. У Анны высшее образование по физической культуре и
          13-летний опыт в спорте и фитнесе.
        </p>
      </div>
    </a>
  </div>
);
export default Trainer;
