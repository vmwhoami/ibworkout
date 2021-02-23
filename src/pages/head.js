import React from 'react';

const Head = () => {
  return (
    <div className="head">
      <div className="head__bg"></div>
      <div className="head__container">
        <h1 className="head__h1">Онлайн-тренировки с личным тренером</h1>
        <p>В реальном времени.</p>
        <p>Когда удобно.</p>
        <p>Где удобно.</p>
        <a href="#" className="head__btn">Записаться на пробную тренировку</a>
      </div>
    </div>
  )
}

export default Head;