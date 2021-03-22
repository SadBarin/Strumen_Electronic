import React, { Component } from 'react';
import './app-panel.css'

import MenuButton from "../panel-button";
import MenuList from "../panel-list";

export default class AppPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelVisible: false,
      simulation: true
    }
  }

  handleClickButton() {
    this.setState({
      panelVisible: !this.state.panelVisible,
    })
  }

  handleChangeSimulateStatus() {
    this.setState({
      simulation: !this.state.simulation
    })
  }

  render() {
    return (
      <div className="p-2 panel position-fixed">
        <MenuButton
          onClick={ () => this.handleClickButton() }
        />
        <MenuList
          onClickAdd={ this.props.onClickAdd }
          display={ this.state.panelVisible ? '' : 'panel-hidden' }
        />
      </div>
    )
  }
}
