import React from 'react';
import PropTypes from 'prop-types';
import './button-icon.css';

function ButtonIcon(props) {
  const { icon, active, onClick, propsClass } = props;

  return (
    <button type="button" className={`icon-button ${propsClass} ${(active)? ' active' : ''}`} onClick={onClick}>
      <i className={`bi ${icon}`} />
    </button>
  );
}

ButtonIcon.defaultProps = {
  icon: 'bi-cpu',
  active: false,
  onClick: () => {},
  propsClass: '',
};

ButtonIcon.propTypes = {
  icon: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  propsClass: PropTypes.string,
};

export default ButtonIcon;
