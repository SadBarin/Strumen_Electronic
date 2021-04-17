import React, { Component } from 'react';
import './app.css';

import AppPanel from '../panel/app-panel';
import AppLayout from '../layout/app-layout';
import PopupSelect from '../layout/popups/popup-select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridList: [],
      selectElementID: -1,
      hiddenPopupSelect: true,
    };
  }

  handleToggleHiddenPopupSelect() {
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    if (this.state.selectElementID !== -1) {
      // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
      this.setState({ hiddenPopupSelect: !this.state.hiddenPopupSelect });
    }
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

  createItem = (obj) => {
    const { x, y } = obj;

    return {
      id: Date.now(),
      type: 'AND',
      x,
      y,
      focus: false,
      pin: false,
    };
  }

  render() {
    const { gridList, selectElementID, hiddenPopupSelect } = this.state;

    return (
      <main className="layout">
        <PopupSelect hidden={hiddenPopupSelect} closePopup={() => this.handleToggleHiddenPopupSelect()} />

        <AppPanel
          selectElementID={selectElementID}
          onClickChangeRemoveStatus={() => this.handleRemoveItem(selectElementID)}
          onClickToggleHiddenPopupSelect={() => this.handleToggleHiddenPopupSelect()}
          onClickChangePin={() => this.handleChangePin()}
          onClickAdd={() => this.handleAddItem()}
        />

        <AppLayout
          selectElementID={selectElementID}
          items={gridList}
          onClickSetSelectElementID={this.handleSetSelectElementID.bind(this)}
        />

        <div className="info-element">
          <p>{`ID: ${String(selectElementID)}`}</p>
          <p>{`Hidden Popup Select: ${String(hiddenPopupSelect)}`}</p>
        </div>
      </main>
    );
  }
}

export default App;
