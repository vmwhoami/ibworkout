import React from 'react';
import ProbeBtn from '../components/probeBtn';
import iphone from '../assets/images/iphone12black.png';
import {
  Barbel, Question, Present, Clock, Package, Trophy,
} from '../components/Svgs';

const Steps = () => (
  <>
    <ProbeBtn styling="head__btn center" />
    <h3 className="hcenter">
      Начните заниматься с тренером за несколько шагов
    </h3>
    <div className="steps">
      <StepsLeft />
      <div className="steps__imgcon">
        <img className="steps__img" src={iphone} alt="iphone12" />
      </div>
      <StepsRight />
    </div>
    <ProbeBtn styling="head__btn center mb-5" />
  </>
);

export default Steps;

const StepsLeft = () => (
  <div className="steps__left">
    <div className="steps__wrapper reverse">
      <div className="steps__textwrap">
        <h4>Выберите тип тренинга</h4>
        <p>
          Каждый из них решает разные задачи:
          помогает снизить вес, поддерживает тело в форме,
          укрепляет мышечный корсет или работает с растяжкой.
        </p>
      </div>
      <div className="steps__svgwrap">
        <Barbel />
      </div>
    </div>

    <div className="steps__wrapper reverse">
      <div className="steps__textwrap">
        <h4>Оставьте заявку</h4>
        <p>
          Заполните короткую анкету, и мы составим для
          вас оптимальную программу.
        </p>
      </div>
      <div className="steps__svgwrap">
        <Question />
      </div>
    </div>

    <div className="steps__wrapper reverse">
      <div className="steps__textwrap">
        <h4>Пройдите пробную тренировку</h4>
        <p>
          Начните заниматься с выбранным тренером бесплатно:
          так вы поймете, подходят ли вам программа и формат занятий.
        </p>
      </div>

      <div className="steps__svgwrap">
        <Present />
      </div>
    </div>

  </div>
);

const StepsRight = () => (
  <div className="steps__right">
    <div className="steps__wrapper">
      <div className="steps__svgwrap">
        <Clock />

      </div>
      <div className="steps__textwrap">
        <h4>Запланируйте занятия</h4>
        <p>Выберите удобное время и регулярно занимайтесь с персональным тренером.</p>
      </div>
    </div>

    <div className="steps__wrapper">
      <div className="steps__svgwrap">
        <Package />

      </div>
      <div className="steps__textwrap">
        <h4>Выберите пакет тренировок</h4>
        <p>
          Определите комфортную нагрузку и
          тренируйтесь один, два или три раза в
          неделю от 825 руб./час.
        </p>
      </div>
    </div>

    <div className="steps__wrapper">
      <div className="steps__svgwrap">
        <Trophy />

      </div>
      <div className="steps__textwrap">
        <h4>Достигайте результата</h4>
        <p>Добивайтесь целей с рекомендациями вашего наставника.</p>
      </div>
    </div>
  </div>
);
