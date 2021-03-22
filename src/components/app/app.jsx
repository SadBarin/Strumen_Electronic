import React, { Component } from 'react';
import './app.css';

import AppPanel from "../app-panel";
import AppGrid from "../app-grid";
import Draggable from "react-draggable";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridElements: []
    }
  }

  getRandValue () {
    return Math.floor(Math.random() * 98) + 2
  }

  handleAddButton() {
    let oldState = this.state.gridElements
    let x = this.getRandValue()
    let y = this.getRandValue()

    oldState.push(
      <Draggable defaultPosition={{x, y}}>
        <div className="element-grid d-flex flex-column justify-content-center align-items-center align-content-center text-white">
          <p className="m-0">X: {x}</p>
          <p className="m-0">Y: {y}</p>
        </div>
      </Draggable>
    )
    this.setState({gridElements: oldState})
  }

  render() {
    return (
      <main className='layout position-relative'>
        <AppPanel onClickAdd={() => this.handleAddButton()}/>
        <AppGrid gridElements={this.state.gridElements}/>
      </main>
    )
  }
}