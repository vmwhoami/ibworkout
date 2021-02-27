import React from 'react';

const ProbeBtn = props => {
  const { styling } = props;
  return <a href="#form" className={styling}>Записаться на пробную тренировку</a>;
};
export default ProbeBtn;
