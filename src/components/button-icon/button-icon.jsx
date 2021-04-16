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
  icon: 'bi-cpu',
  onClick: () => {},
  propsClass: '',
};

ButtonIcon.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  propsClass: PropTypes.string,
};

export default ButtonIcon;
