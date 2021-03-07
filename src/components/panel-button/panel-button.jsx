import React from 'react';
import './panel-button.css';

function PanelButton (props) {
  return (
    <button className="p-1 btn btn-primary panel-button" onClick={ props.onClick }>
      <i className="bi bi-list"/>
    </button>
  )
}

export default PanelButton