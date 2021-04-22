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
      hiddenPopupSelect: true,
      hiddenPopupInfo: true,
      connect: {
        from: { x: null, y: null },
        to: { x: null, y: null }
      }
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
      focus: false,
      pin: false,
      pointLeftTop: null,
      pointLeftBottom: null,
      pointRight: null,
    };
  }

  handleConnectElement(e, id) {
    console.log(e)
    console.log(id)

    if (this.state.connect.from.x === null) {
      const list = this.state.gridList
      let pos;

      this.setState({
        connect: {
          from: { x: e.clientX,  y: e.clientY },
          to: { x: null, y: null }
        }
      });

      for(let i = 0; i <= list.length; i++) {
        if(list[i].id === id) {
          pos = i
          break
        }
      }

      list[pos].pin = true

      this.setState({gridList: list})

      let elem = document.createElement("div");
      elem.className = 'connect-line'
      elem.style.left = e.clientX + 'px'
      elem.style.top = e.clientY + 'px'
      elem.style.width = '100px'
      let layout = document.querySelector('.layout')
      console.log(layout)
      layout.appendChild(elem)

    } else if(this.state.connect.from.x !== null && this.state.connect.to.x === null) {
      const list = this.state.gridList
      let pos;

      this.setState({
        connect: {
          from: { x: this.state.connect.from.x,  y: this.state.connect.from.y },
          to: { x: e.clientX,  y: e.clientY }
        }
      });

      for(let i = 0; i <= list.length; i++) {
        if(list[i].id === id) {
          pos = i
          break
        }
      }

      list[pos].pin = true

      this.setState({gridList: list})
    } else {
      this.setState({
        connect: {
          from: { x: null, y: null },
          to: { x: null, y: null }
        }
      });
    }
  }

  render() {
    const { gridList, selectElementID, hiddenPopupSelect, hiddenPopupInfo, connect} = this.state;

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
        />

        <AppLayout
          selectElementID={selectElementID}
          items={gridList}
          onClickSetSelectElementID={this.handleSetSelectElementID.bind(this)}
          onClickSetConnect={this.handleConnectElement.bind(this)}
        />

        <div className="info-element">
          <p>{`ID: ${String(selectElementID)}`}</p>
          <p>{`Hidden Popup Select: ${String(hiddenPopupSelect)}`}</p>
          <p>{`From x: ${connect.from.x} y: ${connect.from.y} to x: ${connect.to.x} y: ${connect.to.y}`}</p>
        </div>
      </main>
    );
  }
}

export default App;
