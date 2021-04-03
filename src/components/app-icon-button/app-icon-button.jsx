import React from 'react';
import './app-icon-button.css';

export default function AppIconButton(props) {
  return (
    <button className={'btn text-white icon-button ' + props.propsClass} onClick={props.onClick}>
      <i className={'bi ' + props.icon}/>
    </button>
  )
}