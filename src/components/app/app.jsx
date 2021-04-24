import React, { Component } from 'react';
import './app.css';

import AppPanel from '../panel/app-panel';
import AppLayout from '../layout/app-layout';
import PopupSelect from '../layout/popups/popup-select';
import PopupInfo from "../layout/popups/popup-info";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridList: [],
      selectElementID: -1,
      hiddenDevInfo: false,
      hiddenPopupSelect: true,
      hiddenPopupInfo: true
    };
  }

  handleToggleHiddenPopupSelect() {
    if (this.state.selectElementID !== -1) {
      this.setState({ hiddenPopupSelect: !this.state.hiddenPopupSelect });
    }
  }

  handleToggleHiddenPopupInfo() {
    this.setState({ hiddenPopupInfo: !this.state.hiddenPopupInfo });
  }

  handleAddItem() {
    this.setState((state) => {
      const item = this.createItem(this.getRandomCoordinates());
      return { gridList: [...state.gridList, item] };
    });
  }

  handleSetSelectElementID(id) {
    this.setState({ selectElementID: id });
  }

  getRandomCoordinates() {
    return {
      x: this.getRandomNumber(10, window.innerWidth),
      y: this.getRandomNumber(10, window.innerHeight),
    };
  }

  getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  handleRemoveItem = (id) => {
    this.setState((state) => {
      const items = state.gridList.filter((item) => item.id !== id);
      return { gridList: items };
    });
  }

  handleChangeDevStatus() {
    this.setState({ hiddenDevStatus: !this.state.hiddenDevStatus });
  }

  handleChangePin() {
    const list = this.state.gridList
    const id = this.state.selectElementID

    let pos;

    for(let i = 0; i <= list.length; i++) {
      if(list[i].id === id) {
        pos = i
        break
      }
    }

    const elementPin = list[pos].pin
    list[pos].pin = !elementPin

    this.setState({gridList: list})
  }

  handleChangeLogic(event) {
    const list = this.state.gridList
    const id = this.state.selectElementID

    let pos;

    for(let i = 0; i <= list.length; i++) {
      if(list[i].id === id) {
        pos = i
        break
      }
    }

    list[pos].type = event.target.value
    this.setState({gridList: list})
  }

  createItem = (obj) => {
    const { x, y } = obj;

    return {
      id: Date.now(),
      type: 'AND',
      x,
      y,
      pin: false,
      inputTop: null,
      inputBottom: null,
      output: null
    };
  }

  render() {
    const { gridList, selectElementID, hiddenDevStatus, hiddenPopupSelect, hiddenPopupInfo} = this.state;

    return (
      <main className="layout">
        <PopupSelect hidden={hiddenPopupSelect} closePopup={() => this.handleToggleHiddenPopupSelect()} changeLogic={this.handleChangeLogic.bind(this)}/>
        <PopupInfo hidden={hiddenPopupInfo} closePopup={() => this.handleToggleHiddenPopupInfo()} />

        <AppPanel
          selectElementID={selectElementID}
          onClickChangeRemoveStatus={() => this.handleRemoveItem(selectElementID)}
          onClickToggleHiddenPopupSelect={() => this.handleToggleHiddenPopupSelect()}
          onClickChangePin={() => this.handleChangePin()}
          onClickAdd={() => this.handleAddItem()}
          onClickToggleHiddenPopupInfo={() => this.handleToggleHiddenPopupInfo()}
          onClockHiddenDevStatus={() => this.handleChangeDevStatus()}
        />

        <AppLayout
          selectElementID={selectElementID}
          items={gridList}
          onClickSetSelectElementID={this.handleSetSelectElementID.bind(this)}
        />

        <div className={`info-element ${(hiddenDevStatus)? "hidden" : ""}`}>
          <p>{`ID: ${String(selectElementID)}`}</p>
          <p>{`Count elements: ${String(gridList.length)}`}</p>
          <p>{`Hidden Popup Select: ${String(hiddenPopupSelect)}`}</p>
          <p>{`Hidden Popup Info: ${String(hiddenPopupInfo)}`}</p>
        </div>
      </main>
    );
  }
}

export default App;
