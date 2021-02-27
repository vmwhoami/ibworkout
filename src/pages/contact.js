import React from 'react';

const Form = () => {
  return (
    <div className="form" id="form">
      <h3 className="hcenter text-white">Записаться на консультацию c тренером</h3>
      <form action="POST" name="contact" className="form__form" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" placeholder="Ваше имя и фамилия" name="Ваше имя и фамилия" />
        <input type="email" name="Email" id="email" placeholder="E-mail" />
        <input type="tel" name="Телефон" id="telephone" placeholder="Телефон" />
        <div className="select">
          <select className="select__select" name=" цель  тренировок">
            <option value="">Выберите цель ваших тренировок</option>
            <option value="Держать все тело в тонусе">Держать все тело в тонусе</option>
            <option value="Прокачка мышц пресса, ног и ягодиц">Прокачка мышц пресса, ног и ягодиц</option>
            <option value="Увеличение силы / набор массы">Увеличение силы / набор массы</option>
            <option value="Снижение веса">Снижение веса</option>
            <option value="Здоровая спина ">Здоровая спина</option>
            <option value="Научиться регулярно медитировать">Научиться регулярно медитировать</option>
            <option value="Йога / Пилатес для здоровья">Йога / Пилатес для здоровья</option>
            <option value="Улучшить гибкость и растяжку">Улучшить гибкость и растяжку</option>
            <option value="Другое">Другое</option>
          </select>
        </div>
        <div className="textarea">
          <textarea name="comment" className="textarea__text" placeholder="Укажите, пожалуйста, ваш город или часовой пояс. Как с вами связаться (телефон, whatsapp и т.д.) и в какое время? Промокод (если есть) и прочие комментарии." rows="4" spellcheck="false"></textarea>
        </div>
      </form>
    </div>
  )
}

export default Form;


// <div className="form" id="form">
//       <h3 className="hcenter text-white">Записаться на консультацию c тренером</h3>
//       <div className="form__container">
//         <form action="POST" name="contact" className="form__form" method="post">
//         <input type="hidden" name="form-name" value="contact">
//           <input type="text" placeholder="Ваше имя и фамилия" name="Ваше имя и фамилия">
//           <input type="email" name="Email" id="email" placeholder="E-mail">
//           <input type="tel" name="Телефон" id="telephone" placeholder="Телефон">

//           <div className="select">
//             <select className="select__select" name=" цель  тренировок">
//               <option value="">Выберите цель ваших тренировок</option>
//               <option value="Держать все тело в тонусе">Держать все тело в тонусе</option>
//               <option value="Прокачка мышц пресса, ног и ягодиц">Прокачка мышц пресса, ног и ягодиц</option>
//               <option value="Увеличение силы / набор массы">Увеличение силы / набор массы</option>
//               <option value="Снижение веса">Снижение веса</option>
//               <option value="Здоровая спина ">Здоровая спина</option>
//               <option value="Научиться регулярно медитировать">Научиться регулярно медитировать</option>
//               <option value="Йога / Пилатес для здоровья">Йога / Пилатес для здоровья</option>
//               <option value="Улучшить гибкость и растяжку">Улучшить гибкость и растяжку</option>
//               <option value="Другое">Другое</option>
//             </select>
//           </div>

//           <div className="textarea">
//             <textarea name="comment" className="textarea__text" placeholder="Укажите, пожалуйста, ваш город или часовой пояс. Как с вами связаться (телефон, whatsapp и т.д.) и в какое время? Промокод (если есть) и прочие комментарии." rows="4" spellcheck="false"></textarea>
//           </div>
//           <div className="textarea">
//             <div><script src="https://www.google.com/recaptcha/api.js"></script>
// <div className="g-recaptcha" data-sitekey="6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9"><div style="width: 304px; height: 78px;"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9&amp;co=aHR0cHM6Ly9pYndvcmtvdXQubmV0bGlmeS5hcHA6NDQz&amp;hl=en&amp;v=jxFQ7RQ9s9HTGKeWcoa6UQdD&amp;size=normal&amp;cb=8f5n7aeay514" width="304" height="78" role="presentation" name="a-asodxszcx2eh" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
// <noscript>
//   <div>
//   <div style="width: 302px; height: 422px; position: relative;">
//   <div style="width: 302px; height: 422px; position: absolute;">
//   <iframe src="https://www.google.com/recaptcha/api/fallback?k=6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9" frameborder="0" scrolling="no"
//     style="width: 302px; height:422px; border-style: none;">
//   </iframe>
//   </div>
//   </div>
//   <div style="width: 300px; height: 60px; border-style: none; bottom: 12px; left: 25px; margin: 0px; padding: 0px; right: 25px; background: #f9f9f9; border: 1px solid #c1c1c1; border-radius: 3px;">
//     <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response"
//       style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;" >
//     </textarea>
//   </div>
//   </div>
// </noscript>
// </div>
//           </div>
//           <div className="btncontainer">
//             <button type="submit" className="formbtn">Отправить</button>
//           </div>
//         </form>
//       </div>
//     </div>