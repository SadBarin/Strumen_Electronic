import React, { Component } from 'react';
import './app.css';

import AppPanel from "../panel/app-panel";
import AppGrid from "../layout/app-grid";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridList: [],
      removeStatus: false,
    }
  }

  getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomCoordinates() {
    return {
      x: this.getRandomNumber(10, window.innerWidth),
      y: this.getRandomNumber(10, window.innerHeight)
    }
  }

  createItem(obj) {
    const {x, y} = obj

    return {
      id: Date.now(),
      x,
      y
    };
  }

  handleAddItem() {
    this.setState((state) => {
      const item = this.createItem(this.getRandomCoordinates());
      return {gridList: [...state.gridList, item]};
    })
  }

  handleChangeRemoveStatus() {
    this.setState({removeStatus: !this.state.removeStatus})
  }

  handleRemoveItem = (id) => {
    this.setState((state) => {
      const items = state.gridList.filter((item) => item.id !== id)
      return {gridList: items};
    })
  }

  render() {
    return (
      <main className='layout position-relative offsetParent'>
        <AppPanel
          activeRemove={this.state.removeStatus}
          onClickChangeRemoveStatus={() => this.handleChangeRemoveStatus()}
          onClickAdd={() => this.handleAddItem()}
        />

        <AppGrid
          items={this.state.gridList}
          statusRemove={this.state.removeStatus}
          onClickRemove={this.handleRemoveItem}
        />
      </main>
    )
  }
}