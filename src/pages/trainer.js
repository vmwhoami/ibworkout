import React from 'react';
import inna from '../assets/images/Inngirea.jpg'

const Trainer = () => {
  return (
    <div class="trainer" id="trainer">
      <h3 class="hcenter text-white">Tренер</h3>
      <a class="trainer__container" href="#">
        <div class="trainer__imgcontainer">
          <img src={inna} alt="Inna" />
        </div>
        <div class="trainer__description">
          <h1>Inna</h1>
          <h3>Силовые, функциональные, стретчинг</h3>
          <p>Инструктор тренажерного зала, персональный тренер, стретчинг,
          «Первая школа фитнеса», г. Москва. У Анны высшее образование по физической культуре и
          13-летний опыт в спорте и фитнесе.
          </p>
        </div>
      </a>
    </div>
  )
}
export default Trainer;


{/* <div class="trainer" id="trainer">
        <h3 class="hcenter text-white">Tренер</h3>
        <a class="trainer__container" href="#">
          <div class="trainer__imgcontainer">
            <img src="./Inngirea.jpg" alt="Inna">
          </div>
          <div class="trainer__description">
            <h1>Inna</h1>
            <h3>Силовые, функциональные, стретчинг</h3>
            <p>Инструктор тренажерного зала, персональный тренер, стретчинг, «Первая школа фитнеса», г. Москва. У Анны высшее образование по физической культуре и 13-летний опыт в спорте и фитнесе.</p>
          </div>
        </a>
      </div> */}