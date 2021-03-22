import React, { Component } from 'react';
import './app-grid.css'

export default class AppGrid extends Component {
  render() {
    return (
      <div className="grid">
        <div className="p-5 grid-field">
          {this.props.gridElements}
        </div>
      </div>
    )
  }
}
