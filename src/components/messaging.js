import React from 'react';
import { MessageSvg, MessengerSvg } from '../components/Svgs'


const Messenging = () => {
  return (
    <div className="messanging">
      <input className="messanging__checkbox" type="checkbox" name="checkbox" id="toggle" />

      <label className="messanging__label" htmlFor="toggle">
        <a className="messanging__cover">
          <MessageSvg styling={"messanging__mesaj"} />
          {/* <svg className="messanging__mesaj">
            <use xlink:href="./sprite.svg#icon-mesaj"></use>
          </svg> */}
        </a>
      </label>

      <a href="http://m.me/vmwhoami" target="blank" className="messanging__messenger shaper">
        <MessengerSvg styling={"messanging__svg"} />
        {/* <svg className="messanging__svg">
          <use xlink:href="./sprite.svg#icon-messenger"></use>
        </svg> */}
      </a>

      <a href="tel:+37369136177" target="blank" className="messanging__phone shaper">
        {/* <svg className="messanging__svg">
          <use xlink:href="./sprite.svg#icon-phone"></use>
        </svg> */}
      </a>

      <a href="http://wa.me/+37369136177" target="blank" className="messanging__whatsapp shaper">
        {/* <svg className="messanging__svg fillgreen">
          <use xlink:href="./sprite.svg#icon-whatsapp"></use>
        </svg> */}
      </a>

      <a href="viber://chat?number=+37369136177" target="blank" className="messanging__viber shaper">
        {/* <svg className="messanging__svg">
          <use xlink:href="./sprite.svg#icon-viber"></use>
        </svg> */}
      </a>
    </div>
  )
}


export default Messenging;