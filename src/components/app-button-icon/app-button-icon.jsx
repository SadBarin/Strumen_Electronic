import React from 'react';
import PropTypes from 'prop-types';
import './app-button-icon.css';

function AppButtonIcon(props) {
  const { icon, onClick, propsClass } = props;

  return (
    <button type="button" className={`btn text-white icon-button ${propsClass}`} onClick={onClick}>
      <i className={`bi ${icon}`} />
    </button>
  );
}

AppButtonIcon.defaultProps = {
  propsClass: '',
};

AppButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  propsClass: PropTypes.string,
};

export default AppButtonIcon;
