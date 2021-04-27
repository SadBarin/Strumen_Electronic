import React, {Component} from 'react';
import './app.css';

import AppPanel from '../panel/app-panel';
import AppLayout from '../layout/app-layout';
import PopupSelect from '../layout/popups/popup-select';
import PopupInfo from "../layout/popups/popup-info";
import AppInfo from "../app-info";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridList: [],
      selectElementID: 0,
      hiddenDevInfo: false,
      hiddenPopupSelect: true,
      hiddenPopupInfo: true,
      hiddenListAdd: true,
      hiddenListGate: true
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
    const list = this.state.gridList
    let pos = this.getElementArrayPositionByID(list, id)

    return list[pos]
  }

  handleToggle(key) {
    let buffer = {}
    buffer[key] = !this.state[key]

    this.setState(buffer);
  }

  handleToggleHiddenPopupSelect() {
    if (this.state.selectElementID !== 0) this.handleToggle('hiddenPopupSelect')
  }

  handleAddItem() {
    this.setState((state) => {
      const item = this.createItem(this.getRandomCoordinates());
      return {gridList: [...state.gridList, item]};
    });
  }

  handleSetSelectElementID(id) {
    this.setState({selectElementID: id});

    if (id !== 0) {
      const element = this.getElementGridList(id)

      if (element.group === 'gate' && id !== 0) {
        this.setState({hiddenListGate: false});
      }
    } else {
      this.setState({hiddenListGate: true})
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

  handleChangeLogic(event) {
    const list = this.state.gridList
    const id = this.state.selectElementID
    const pos = this.getElementArrayPositionByID(list, id)

    list[pos].type = event.target.value
    this.setState({gridList: list})
  }

  createItem = (obj) => {
    const {x, y} = obj;

    return {
      id: Date.now(),
      group: 'gate',
      type: 'AND',
      x,
      y,
      pin: false
    };
  }

  render() {
    const {
      gridList,
      selectElementID,
      hiddenDevInfo,
      hiddenPopupSelect,
      hiddenPopupInfo,
      hiddenListAdd,
      hiddenListGate
    } = this.state;

    return (
      <main className="layout">
        <PopupSelect hidden={hiddenPopupSelect}
                     closePopup={() => this.handleToggleHiddenPopupSelect()}
                     changeLogic={this.handleChangeLogic.bind(this)}
        />
        <PopupInfo hidden={hiddenPopupInfo}
                   closePopup={() => this.handleToggle('hiddenPopupInfo')}
        />

        <AppPanel
          onClickChangeRemoveStatus={() => this.handleRemoveItem(selectElementID)}
          onClickToggleHiddenPopupSelect={() => this.handleToggleHiddenPopupSelect()}
          onClickChangePin={() => this.handleChangePin()}
          onClickAdd={() => this.handleAddItem()}
          onClickToggleHiddenListAdd={() => this.handleToggle('hiddenListAdd')}
          onClickToggleHiddenPopupInfo={() => this.handleToggle('hiddenPopupInfo')}
          onClockHiddenDevStatus={() => this.handleToggle('hiddenDevInfo')}

          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
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
          hiddenPopupSelect={hiddenPopupSelect}
          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
        />
      </main>
    );
  }
}

export default App;
