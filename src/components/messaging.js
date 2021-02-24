import React from 'react';
import { MessageSvg, MessengerSvg, WhatAppSvg, PhoneSvg, ViberSvg } from '../components/Svgs'


const Messenging = () => {
  return (
    <div className="messanging">
      <input className="messanging__checkbox" type="checkbox" name="checkbox" id="toggle" />
      <label className="messanging__label" htmlFor="toggle">
        <a className="messanging__cover">
          <MessageSvg styling={"messanging__mesaj"} />
        </a>
      </label>
      <a href="http://m.me/vmwhoami" target="blank" className="messanging__messenger shaper">
        <MessengerSvg styling={"messanging__svg"} />
      </a>
      <a href="tel:+37369136177" target="blank" className="messanging__phone shaper">
        <PhoneSvg styling={"messanging__svg"} />
      </a>
      <a href="http://wa.me/+37369136177" target="blank" className="messanging__whatsapp shaper">
        <WhatAppSvg styling={"messanging__svg fillgreen"} />
      </a>
      <a href="viber://chat?number=+37369136177" target="blank" className="messanging__viber shaper">
        <ViberSvg styling={"messanging__svg"} />
      </a>
    </div>
  )
}


export default Messenging;