import React, { Component } from 'react';
import './app.css';

import AppPanel from '../panel/app-panel';
import AppLayout from '../layout/app-layout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridList: [],
      selectElementID: null,
    };
  }

  handleAddItem() {
    this.setState((state) => {
      const item = this.createItem(this.getRandomCoordinates());
      return { gridList: [...state.gridList, item] };
    });
  }

  handleChangeRemoveStatus() {
    const { removeStatus } = this.state;

    this.setState({ removeStatus: !removeStatus });
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

  createItem = (obj) => {
    const { x, y } = obj;

    return {
      id: Date.now(),
      type: 'AND',
      x,
      y,
    };
  }

  render() {
    const { gridList, selectElementID } = this.state;

    return (
      <main className="layout position-relative offsetParent">
        <AppPanel
          selectElementID={selectElementID}
          onClickChangeRemoveStatus={() => this.handleRemoveItem(selectElementID)}
          onClickAdd={() => this.handleAddItem()}
        />

        <AppLayout
          items={gridList}
          onClickSetSelectElementID={this.handleSetSelectElementID.bind(this)}
        />

        <p className="info-element">{`ID: ${String(selectElementID)}`}</p>
      </main>
    );
  }
}

export default App;
