import React from 'react';
import './panel-button.css';

function PanelButton (props) {
  return (
    <button className="p-1 btn panel-button text-white" onClick={ props.onClick }>
      <i className="bi bi-list"/>
    </button>
  )
}

export default PanelButton