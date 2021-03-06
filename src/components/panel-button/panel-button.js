import React, { Component } from 'react';
import './panel-button.css';

export default class PanelButton extends Component {
  render() {
    return (
      <button className="btn btn-primary panel-button">
        <i className="bi bi-list"/>
      </button>
    )
  }
}
