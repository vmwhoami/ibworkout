import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const options = [
  'Держать все тело в тонусе',
  'Прокачка мышц пресса, ног и ягодиц',
  ' Увеличение силы / набор массы',
  'Снижение веса',
  'Улучшить гибкость и растяжку',
  'Другое',
];
const Form = () => (
  <>
    <div className="form" id="form">
      <h3 className="formHeading">Записаться на консультацию c тренером</h3>
      <form
        action="POST"
        name="contact"
        className="form__form"
        method="post"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <input
          type="text"
          placeholder="Ваше имя и фамилия"
          name="Ваше имя и фамилия"
        />
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="E-mail"
        />

        <PhoneInput
          country="md"
        />
        <div className="select">
          <h2>Выберите цель ваших тренировок</h2>
          <select className="select__select" name="цель  тренировок">
            {options.map(option => <option key={option} value="option">{option}</option>)}
          </select>
        </div>
        <div className="textarea">
          <textarea
            name="comment"
            className="textarea__text"
            placeholder="Укажите, пожалуйста, ваш город или часовой пояс.
             Как с вами связаться (телефон, whatsapp и т.д.) и в какое время? Промокод (если есть)
              и прочие комментарии."
            rows="4"
            spellCheck="false"
          />
        </div>
        <div className="btncontainer">
          <button type="submit" className="formbtn">Отправить</button>
        </div>
      </form>
    </div>
  </>
);
export default Form;
