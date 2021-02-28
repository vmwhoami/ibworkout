import React from 'react';
import PropTypes from 'prop-types';

const ProbeBtn = props => {
  const { styling } = props;
  return <a href="#form" className={styling}>Записаться на пробную тренировку</a>;
};
export default ProbeBtn;

ProbeBtn.propTypes = {
  styling: PropTypes.string.isRequired,
};
