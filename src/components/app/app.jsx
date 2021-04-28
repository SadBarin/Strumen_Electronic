import React, {Component} from 'react';
import './app.css';

import PopupInfo from "../layout/popups/popup-info";
import PopupChangeGate from '../layout/popups/popup-change-gate';
import PopupChangeLine from "../layout/popups/popup-change-line";
import AppPanel from '../panel/app-panel';
import AppLayout from '../layout/app-layout';
import AppInfo from "../app-info";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridList: [],
      selectElementID: 0,

      hiddenPopupGate: true,
      hiddenPopupLine: true,
      hiddenPopupInfo: true,

      hiddenDevInfo: false,
      hiddenListAdd: true,
      hiddenListGate: true,
      hiddenListLine: true
    };
  }

  getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  getRandomCoordinates() {
    return {
      x: this.getRandomNumber(100, window.innerWidth - 100),
      y: this.getRandomNumber(100, window.innerHeight - 100),
    };
  }

  getElementArrayPositionByID(array, id) {
    const list = this.state.gridList
    let pos;

    for (let i = 0; i <= list.length; i++) {
      if (list[i].id === id) {
        pos = i
        break
      }
    }

    return pos
  }

  getElementGridList(id) {
    if(id !== 0) {
      const list = this.state.gridList
      let pos = this.getElementArrayPositionByID(list, id)

      return {...list[pos]}
    }else {
      return {}
    }
  }

  handleToggle(key) {
    let buffer = {}
    buffer[key] = !this.state[key]

    this.setState(buffer);
  }

  handleSetSelectElementID(id) {
    this.setState({selectElementID: id});

    if (id !== 0) {
      const element = this.getElementGridList(id)

      if (element.group === 'gate' && id !== 0) {
        this.setState({hiddenListGate: false});
      }else if (element.group === 'line' && id !== 0){
        this.setState({hiddenListLine: false});
      }
    } else {
      this.setState({hiddenListGate: true, hiddenListLine: true})
    }
  }

  handleRemoveItem = (id) => {
    this.setState((state) => {
      const items = state.gridList.filter((item) => item.id !== id);
      return {gridList: items, selectElementID: 0, hiddenListGate: true};
    });
  }

  handleChangePin() {
    const list = this.state.gridList
    const id = this.state.selectElementID
    const pos = this.getElementArrayPositionByID(list, id)

    const elementPin = list[pos].pin
    list[pos].pin = !elementPin

    this.setState({gridList: list})
  }

  handleCloneElement() {
    const list = this.state.gridList
    const id = this.state.selectElementID

    let element = this.getElementGridList(id)
    element.id = Date.now()

    list.push(element)
    this.setState({gridList: list})
    this.setState({selectElementID: element.id})
  }

  handleChangeLogic(event) {
    const list = this.state.gridList
    const id = this.state.selectElementID
    const pos = this.getElementArrayPositionByID(list, id)

    list[pos].type = event.target.value
    this.setState({gridList: list})
  }

  handleChangeTurnGate(event) {
    const list = this.state.gridList
    const id = this.state.selectElementID
    const pos = this.getElementArrayPositionByID(list, id)

    list[pos].turn = event.target.value
    this.setState({gridList: list})
  }

  handleAdd(item) {
    this.setState((state) => {
      return {gridList: [...state.gridList, item]};
    });
  }

  createGate = (obj) => {
    const {x, y} = obj;

    return {
      id: Date.now(),
      group: 'gate',
      type: 'AND',
      x,
      y,
      turn: 0,
      pin: false
    };
  }

  handleAddGate = () => this.handleAdd(this.createGate(this.getRandomCoordinates()))

  createLine = (obj) => {
    const {x, y} = obj;

    return {
      id: Date.now(),
      group: 'line',
      x, y,
      width: 150,
      height: 5,
      turn: 0,
      pin: false
    };
  }

  handleAddLine = () => this.handleAdd(this.createLine(this.getRandomCoordinates()))

  render() {
    const {
      gridList,
      selectElementID,

      hiddenDevInfo,
      hiddenListAdd,
      hiddenListGate,
      hiddenListLine,

      hiddenPopupGate,
      hiddenPopupInfo,
      hiddenPopupLine
    } = this.state;

    const currentElement = this.getElementGridList(selectElementID)

    return (
      <main className="layout">
        <PopupInfo hidden={hiddenPopupInfo}
                   closePopup={() => this.handleToggle('hiddenPopupInfo')}
        />

        <PopupChangeGate hidden={hiddenPopupGate}
                         closePopup={() => this.handleToggle('hiddenPopupGate')}
                         changeLogic={this.handleChangeLogic.bind(this)}
                         changeTurn={this.handleChangeTurnGate.bind(this)}
                         currentElement={currentElement}
        />

        <PopupChangeLine hidden={hiddenPopupLine}
                         closePopup={() => this.handleToggle('hiddenPopupLine')}/>

        <AppPanel
          onClickChangeRemoveStatus={() => this.handleRemoveItem(selectElementID)}
          onClickChangePin={() => this.handleChangePin()}
          onClickCloneElement={() => this.handleCloneElement()}
          onClickToggleHiddenListAdd={() => this.handleToggle('hiddenListAdd')}
          onClockHiddenDevStatus={() => this.handleToggle('hiddenDevInfo')}

          onClickToggleHiddenPopupInfo={() => this.handleToggle('hiddenPopupInfo')}
          onClickToggleHiddenPopupGate={() => this.handleToggle('hiddenPopupGate')}
          onClickToggleHiddenPopupLine={() => this.handleToggle('hiddenPopupLine')}

          onClickAddGate={() => this.handleAddGate()}
          onClickAddLine={() => this.handleAddLine()}

          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
          hiddenListLine={hiddenListLine}
        />

        <AppLayout
          selectElementID={selectElementID}
          items={gridList}
          onClickSetSelectElementID={this.handleSetSelectElementID.bind(this)}
        />

        <AppInfo
          selectElementID={selectElementID}
          gridListLength={gridList.length}

          hiddenPopupInfo={hiddenPopupInfo}
          hiddenDevInfo={hiddenDevInfo}
          hiddenPopupSelect={hiddenPopupGate}
          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
        />
      </main>
    );
  }
}

export default App;
