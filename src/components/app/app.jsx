import React, { Component } from 'react';
import './app.css';

import AppPanel from '../panel/app-panel';
import AppGrid from '../layout/app-grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridList: [],
      removeStatus: false,
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
      x,
      y,
    };
  }

  render() {
    const { removeStatus, gridList } = this.state;

    return (
      <main className="layout position-relative offsetParent">
        <AppPanel
          activeRemove={removeStatus}
          onClickChangeRemoveStatus={() => this.handleChangeRemoveStatus()}
          onClickAdd={() => this.handleAddItem()}
        />

        <AppGrid
          items={gridList}
          statusRemove={removeStatus}
          onClickRemove={this.handleRemoveItem}
        />
      </main>
    );
  }
}

export default App;
