import React, { useState } from 'react';
import users from "../users";
import { Instagram, NextIcon, PrevIcon } from "../components/Svgs"

const Testimonials = () => {

  const [index, setIndex] = useState(0)
  const [reviewer, setReviewer] = useState(users[index])
  const { id, name, image, comment, instalink } = reviewer

  const prevAction = () => {
    setIndex((index) => {
      let current = index - 1;
      return current;
    })

  }

  const nextAction = () => {
    setIndex((index) => {
      let current = index + 1;
      return current;
    })
  }
  return (
    <div class="testimonials" id="testimonials">
      <h3 class="hcenter">Отзывы наших клиентов</h3>
      <div class="testimonials__container">
        <div class="client">
          <div class="client__comment">
            <p>{comment}</p>
            <div class="client__img">
              <img src={image} alt="client" />
            </div>

            <h5>{name}</h5>
            <a class="nav__roundbtn" target="blank" href={instalink}>
              <Instagram styling={"nav__svg"} />
            </a>
            <div className="switch-container">
              <a className="switch-btn" onClick={prevAction}><PrevIcon styling={"switch-icon"} /></a>

              <a className="switch-btn" onClick={nextAction}><NextIcon styling={"switch-icon"} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials;


