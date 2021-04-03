import React from 'react';
import PropTypes from 'prop-types';
import './button-icon.css';

function ButtonIcon(props) {
  const { icon, onClick, propsClass } = props;

  return (
    <button type="button" className={`btn text-white icon-button ${propsClass}`} onClick={onClick}>
      <i className={`bi ${icon}`} />
    </button>
  );
}

ButtonIcon.defaultProps = {
  propsClass: '',
};

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  propsClass: PropTypes.string,
};

export default ButtonIcon;
