import React, { useState } from 'react';
import users from '../users';
import { Instagram, NextIcon, PrevIcon } from '../components/Svgs';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const {
    name, image, comment, instaLink,
  } = users[index];
  const checkNum = num => {
    if (num < 0) {
      return users.length - 1;
    } if (num > users.length - 1) {
      return 0;
    }
    return num;
  };
  const prevAction = () => {
    setIndex(index => {
      const current = index - 1;
      return checkNum(current);
    });
  };
  const nextAction = () => {
    setIndex(index => {
      const current = index + 1;
      return checkNum(current);
    });
  };
  return (
    <div className="testimonials" id="testimonials">
      <h3 className="hcenter">Отзывы наших клиентов</h3>
      <div className="testimonials__container">
        <button aria-label="previous-btn" type="button" className="switch-btn" onKeyDown={e => (e.key === 37 ? prevAction : null)} onClick={prevAction}><PrevIcon styling="switch-icon" /></button>

        <div className="client">
          <div className="client__testimonial">
            <div className="client__img">
              <img src={image} alt="client" />
            </div>
            <a className="instagramLink" target="blank" href={instaLink}>
              <h5>{name}</h5>
              <Instagram styling="instagramSvg" />
            </a>
            <p>{comment}</p>
          </div>
        </div>
        <button aria-label="next-btn" type="button" className="switch-btn" onKeyDown={e => (e.key === 40 ? nextAction : null)} onClick={nextAction}><NextIcon styling="switch-icon" /></button>


      </div>

    </div>
  );
};
export default Testimonials;
