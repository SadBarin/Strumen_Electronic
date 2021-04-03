import React from 'react';
import './panel-button.css';

import AppIconButton from "../app-icon-button";

function PanelButton (props) {
  return (
    <AppIconButton icon={'bi-list'} onClick={props.onClick}/>
  )
}

export default PanelButton