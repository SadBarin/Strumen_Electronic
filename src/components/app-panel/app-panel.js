import React, { Component } from 'react';
import './app-panel.css'

import MenuButton from "../panel-button";
import MenuList from "../panel-list";

export default class AppPanel extends Component {
  render() {
    return (
      <div className="p-2 panel position-fixed">
        <MenuButton/>
        <MenuList/>
      </div>
    )
  }
}
