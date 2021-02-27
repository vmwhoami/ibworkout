import React from 'react';
import ProbeBtn from '../components/probeBtn';

const Head = () => (
  <div className="head">
    <div className="head__bg" />
    <div className="head__container">
      <h1 className="head__h1">Онлайн-тренировки с личным тренером</h1>
      <p>В реальном времени.</p>
      <p>Когда удобно.</p>
      <p>Где удобно.</p>
      <ProbeBtn styling="head__btn" />
    </div>
  </div>
);

export default Head;
