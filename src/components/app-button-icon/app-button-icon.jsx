import React from 'react';
import PropTypes from 'prop-types'
import './app-button-icon.css';

function AppButtonIcon(props) {
  return (
    <button className={'btn text-white icon-button ' + props.propsClass} onClick={props.onClick}>
      <i className={'bi ' + props.icon}/>
    </button>
  )
}

AppButtonIcon.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  propsClass: PropTypes.string
}

export default AppButtonIcon