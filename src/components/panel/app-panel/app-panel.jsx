import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app-panel.css'

import MenuList from "../panel-list";
import AppIconButton from "../../app-button-icon";

class AppPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelVisible: true,
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
        <AppIconButton icon={'bi-list'} onClick={() => this.handleClickButton()}/>

        <MenuList
          activeRemove={this.props.activeRemove}
          onClickAdd={ this.props.onClickAdd }
          onClickChangeRemoveStatus={ this.props.onClickChangeRemoveStatus }
          display={ this.state.panelVisible ? '' : ' panel-hidden' }
        />
      </div>
    )
  }
}

AppPanel.propTypes = {
  activeRemove: PropTypes.bool,
  onClickChangeRemoveStatus: PropTypes.func,
  onClickAdd: PropTypes.func
}

export default AppPanel
