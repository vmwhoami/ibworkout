import React from 'react';
import Iframe from 'react-iframe';

const How = () => (
  <div className="how">
    <div className="how__h1">
      <h1 className="text-center">Как проходит тренировка?</h1>
    </div>
    <div className="how__description">
      <p>
        Вы занимаетесь с персональным тренером по видеосвязи.
        {' '}
        <br />
        Всё, что вам нужно, — это ноутбук или телефон с веб-камерой, интернет
        <br />
        и немного свободного пространства (2 м от камеры).
      </p>
    </div>
    <div className="how__vidcont">
      <Iframe
        className="how__vid"
        src="https://www.youtube.com/embed/ASwpaa74RGo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      />
    </div>
  </div>
);

export default How;
