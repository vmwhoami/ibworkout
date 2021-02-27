import React from 'react';
import PropTypes from 'prop-types';
import functional from '../assets/images/functional.jpg';
import silovie from '../assets/images/silovie.jpg';
import yoga from '../assets/images/yoga.jpg';
import weightloss from '../assets/images/weightloss.jpg';

const Types = () => (
  <div className="types">
    <h3 className="hcenter">Типы тренинга</h3>
    <div className="types__container">
      <div className="types__training">

        <Img adress={functional} alt="functional" />
        <div className="types__desc">
          <h4>Функциональный тренинг</h4>
          <p>
            Развивает выносливость и улучшает общий
            тонус организма — появится больше сил и мотивации для других задач.
          </p>
        </div>
      </div>

      <div className="types__training">
        <Img adress={silovie} alt="silovie" />
        <div className="types__desc">
          <h4>Силовой тренинг</h4>
          <p>
            Развивает мышцы за счет тренировок с собственным
            весом или утяжелителями — упражнения помогают создать
            красивый рельеф и прийти в спортивную форму.
          </p>
        </div>
      </div>

      <div className="types__training">
        <Img adress={yoga} alt="yoga" />
        <div className="types__desc">
          <h4>Пилатес и йога</h4>
          <p>
            Восстанавливают эластичность мышц, работают с растяжкой —
            этот тренинг помогает расслабиться и повысить гибкость тела.
          </p>
        </div>
      </div>

      <div className="types__training">
        <Img adress={weightloss} alt="weightloss" />
        <div className="types__desc">
          <h4>Снижение веса</h4>
          <p>
            Сочетает интенсивные силовые и
            функциональные тренировки — они помогут снизить вес и прийти в форму.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Img = props => {
  const { adress, alt } = props;
  return (
    <div className="types__imgcont">
      <img src={adress} alt={alt} />
    </div>

  );
};

export default Types;

Img.propTypes = {
  adress: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
