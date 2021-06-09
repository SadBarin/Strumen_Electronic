import React, {Component} from 'react';
import './app-screen.css';

import packageApp from '../../../package.json'

import PopupGridSettings from "./screen-elements/popups/popup-grid-settings";
import PopupInfo from "./screen-elements/popups/popup-info";
import PopupChangeGate from "./screen-elements/popups/popup-change-gate";
import PopupChangeLine from "./screen-elements/popups/popup-change-line";
import PopupChangeText from "./screen-elements/popups/popup-change-text";
import PopupUpload from "./screen-elements/popups/popup-upload";

import ScreenPanel from "./screen-elements/screen-panel/screen-panel";
import ScreenGrid from "./screen-elements/screen-grid";
import ScreenInfo from "./screen-elements/screen-info/screen-info";


class AppScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.generateProjectName(),
      version: packageApp.version,

      grid: {
        width: 2000,
        height: 1000,
        background: 'hsl(0, 0%, 98%)',
        emergenceCordX: 200,
        emergenceCordY: 200,
        emergenceBalancer: 35,
        list: [],
        selectElementID: 0,
      },

      hiddenPopupGridSettings: false,
      hiddenPopupGate: true,
      hiddenPopupLine: true,
      hiddenPopupInfo: true,
      hiddenPopupText: true,
      hiddenPopupUpload: true,

      popupsStatuses: {
        popupGridSettings: false,
        popupGate: true,
        popupLine: true,
        popupInfo: true,
        popupText: true,
        popupUpload: true,
      },

      panelStatuses: {
        devInfo: true,
        add: true,
        gate: true,
        line: true,
        text: true
      }
    };
  }

  generateProjectName() {
    console.groupCollapsed('generateProjectName')
    console.log(this.state)
    console.groupEnd()

    return 'Strumen_' + (
           new Date().toLocaleDateString().replace(/\//gi, '-')
           + '_' +
           new Date().toLocaleTimeString().replace(/:/gi, '-'))
           .replace(/\s/gi, '_')
  }

  changeStateValue(value, key) {
    console.groupCollapsed('changeStateValue')
    console.log(this.state)
    console.groupEnd()

    const state = this.state
    state[key] = value
    this.setState(state)
  }

  changeStateObjectValue(value, object, key) {
    console.groupCollapsed('changeStateObjectValue')
    console.log(this.state)
    console.groupEnd()

    const state = this.state
    state[object][key] = value
    this.setState(state)
  }

  propertyToggle = (key) => this.changeStateValue(!this.state[key], key)
  objectPropertyToggle = (object, key) => this.changeStateObjectValue(!this.state[object][key], object, key)

  changeGridElementValue(event, key) {
    console.groupCollapsed('changeGridElementValue')
    console.log(this.state)
    console.groupEnd()

    const grid = this.state.grid
    const pos = this.getElementArrayPositionByID(grid.list, this.state.grid.selectElementID)
    grid[pos][key] = event.target.value
    this.setState({grid})
  }

  handleChangePin() {
    console.groupCollapsed('handleChangePin')
    console.log(this.state)
    console.groupEnd()

    const grid = this.state.grid
    const pos = this.getElementArrayPositionByID(grid.list, this.state.grid.selectElementID)
    grid[pos].pin = !grid[pos].pin
    this.setState({grid})
  }

  dischargePanelsSettings() {
    console.groupCollapsed('dischargePanelsSettings')
    console.log(this.state)
    console.groupEnd()

    const panelStatuses = this.state.panelStatuses
    panelStatuses.gate = panelStatuses.line = panelStatuses.text = true
    this.setState({panelStatuses});
  }

  setSelectElementID(id) {
    console.groupCollapsed('setSelectElementID')
    console.log(this.state)
    console.groupEnd()

    this.dischargePanelsSettings()
    const element = this.getElementGridList(id)
    const panelStatuses = this.state.panelStatuses
    const grid = this.state.grid
    if (Number(id) !== 0) panelStatuses[element.group] = false
    grid.selectElementID = id
    this.setState({panelStatuses, grid})
  }

  getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  getOffsetCoordinates = () => this.getRandomNumber(0, this.state.grid.emergenceBalancer)

  getCoordinates() {
    console.groupCollapsed('getCoordinates')
    console.log(this.state)
    console.groupEnd()

    let x = this.state.grid.emergenceCordX + this.getOffsetCoordinates()
    let y = this.state.grid.emergenceCordY + this.getOffsetCoordinates()
    let width = this.state.grid.width - 100
    let height = this.state.grid.height - 100

    if (x > width) x = width
    if (y > height) y = height

    return {
      x,
      y
    };
  }

  getElementArrayPositionByID(array, id) {
    console.groupCollapsed('getElementArrayPositionByID')
    console.log(this.state)
    console.groupEnd()

    const list = this.state.grid.list
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
    console.groupCollapsed('getElementGridList')
    console.log(this.state)
    console.groupEnd()

    if (id !== 0) {
      const list = this.state.grid.list
      let pos = this.getElementArrayPositionByID(list, id)

      return {...list[pos]}
    } else {
      return {}
    }
  }

  removeItem = (id) => {
    console.groupCollapsed('removeItem')
    console.log(this.state)
    console.groupEnd()

    this.dischargePanelsSettings()
    const grid = this.state.grid
    grid.list.filter((item) => item.id !== id)
    grid.selectElementID = 0
    this.setState({grid})
  }

  handleCloneElement() {
    console.groupCollapsed('handleCloneElement')
    console.log(this.state)
    console.groupEnd()

    const grid = this.state.grid
    const id = this.state.grid.selectElementID

    let element = this.getElementGridList(id)
    element.id = Date.now()

    let x = this.getOffsetCoordinates()
    let y = this.getOffsetCoordinates()
    let width = this.state.grid.width - 80
    let height = this.state.grid.height - 60

    element.x += x
    element.y += y

    if (element.x > width) element.x = width
    if (element.y > height) element.y = height

    grid.list.push(element)
    grid.selectElementID = element.id
    this.setState({grid})
  }

  changeCord(id, cord, size) {
    console.groupCollapsed('changeCord')
    console.log(this.state)
    console.groupEnd()

    const balance = 10
    const width = this.state.grid.width - size.width - balance
    const height = this.state.grid.height - size.height - balance
    const grid = this.state.grid

    let element = grid.list[this.getElementArrayPositionByID(grid.list, id)]

    element.x = (cord.x > width)? width : cord.x
    element.y = (cord.y > height)? height : cord.y
    element.x = (element.x < balance)? balance : element.x
    element.y = (element.y < balance)? balance : element.y

    this.setState({grid})
  }

  handleSetNewCord(id, event, size) {
    console.groupCollapsed('handleSetNewCord')
    console.log(this.state)
    console.groupEnd()

    const element = event.target
    const screenGrid = document.querySelector('#screen-grid-wrapper')

    const cord = {
      x: (element.getBoundingClientRect().left - element.offsetLeft + screenGrid.scrollLeft) - 8,
      y: (element.getBoundingClientRect().top - element.offsetTop + screenGrid.scrollTop) - 8,
    }

    this.changeCord(id, cord, size)
  }

  handleAdd(item) {
    console.groupCollapsed('handleAdd')
    console.log(this.state)
    console.groupEnd()

    const grid = this.state.grid
    grid.list.push(item)
    this.setState({grid})
  }

  createObjectGrid = (cord, group) => {
    console.groupCollapsed('createObjectGrid')
    console.log(this.state)
    console.groupEnd()

    const {x, y} = cord
    const object = {
      id: Date.now(),
      x, y,
      group,
      pin: false,
      active: false,
    }

    switch (group) {
      case 'gate':
        object.width = 90
        object.height = 50
        object.content = '1'
        object.status = true
        object.backgroundColor = 'hsl(20, 100%, 73%)'
        object.textColor = 'hsl(0, 0%, 98%)'
        break;
      case 'line':
        object.width = 170
        object.height = 8
        object.status = false
        object.backgroundColor = 'hsl(20, 100%, 73%)'
        break;
      case 'text':
        object.textColor = 'hsl(0, 0%, 0%)'
        object.content = 'Блок комментария'
        break;
    }

    return object
  }

  addObjectGrid = (group) => this.handleAdd(this.createObjectGrid(this.getCoordinates(), group))

  handleSave() {
    let a = document.createElement("a");
    let file = new Blob([JSON.stringify(this.state)], {type: 'application/json'});

    a.href = URL.createObjectURL(file);
    a.download = `${this.state.name}.json`;
    a.click();
  }

  setSaveFile(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
      let saveData = JSON.parse(reader.result)
      this.setState(saveData)
    }
  }

  checkCollide(activeElement, passiveElement) {
    return activeElement.x < passiveElement.x + passiveElement.width &&
           activeElement.x + activeElement.width > passiveElement.x &&
           activeElement.y < passiveElement.y + passiveElement.height &&
           activeElement.height + activeElement.y > passiveElement.y;
  }

  render() {
    const {
      name,
      grid,

      hiddenPopupGridSettings,
      hiddenPopupGate,
      hiddenPopupInfo,
      hiddenPopupLine,
      hiddenPopupText,
      hiddenPopupUpload,

      panelStatuses
    } = this.state;

    const currentElement = this.getElementGridList(grid.selectElementID)

    return (
      <main id="app-screen">
        <section className="screen-popups-container">
          <PopupGridSettings hidden={hiddenPopupGridSettings}
                             name={name}
                             grid={grid}
                             closePopup={() => this.propertyToggle('hiddenPopupGridSettings')}
                             changeStateValue={this.changeStateValue.bind(this)}
                             changeStateObjectValue={this.changeStateObjectValue.bind(this)}
          />

          <PopupInfo hidden={hiddenPopupInfo}
                     closePopup={() => this.propertyToggle('hiddenPopupInfo')}
          />

          <PopupChangeGate hidden={hiddenPopupGate}
                           grid={grid}
                           closePopup={() => this.propertyToggle('hiddenPopupGate')}
                           changeGridElementValue={this.changeGridElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupChangeLine hidden={hiddenPopupLine}
                           grid={grid}
                           closePopup={() => this.propertyToggle('hiddenPopupLine')}
                           changeGridElementValue={this.changeGridElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupChangeText hidden={hiddenPopupText}
                           grid={grid}
                           closePopup={() => this.propertyToggle('hiddenPopupText')}
                           changeGridElementValue={this.changeGridElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupUpload hidden={hiddenPopupUpload}
                       closePopup={() => this.propertyToggle('hiddenPopupUpload')}
                       setSaveFile={this.setSaveFile.bind(this)}
          />
        </section>

        <ScreenPanel
          onClickChangeRemoveStatus={() => this.removeItem(grid.selectElementID)}
          onClickChangePin={() => this.handleChangePin()}
          onClickCloneElement={() => this.handleCloneElement()}
          onClickSave={() => this.handleSave()}
          propertyToggle={this.propertyToggle.bind(this)}
          objectPropertyToggle={this.objectPropertyToggle.bind(this)}

          addObjectGrid={this.addObjectGrid.bind(this)}

          selectElement={this.getElementGridList(grid.selectElementID)}
          panelStatuses={panelStatuses}
        />

        <ScreenGrid
          grid={grid}
          onClickSetSelectElementID={this.setSelectElementID.bind(this)}
          handleSetNewCord={this.handleSetNewCord.bind(this)}
        />

        <ScreenInfo
          grid={grid}
          hiddenDevInfo={panelStatuses.devInfo}
        />
      </main>
    );
  }
}

export default AppScreen;
