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
    super(props)
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

      popupStatuses: {
        gridSettings: false,
        changeGate: true,
        changeLine: true,
        changeText: true,
        uploadSave: true,
        info: true,
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
    return 'Strumen_' + (
      new Date().toLocaleDateString().replace(/\//gi, '-')
      + '_' +
      new Date().toLocaleTimeString().replace(/:/gi, '-'))
      .replace(/\s/gi, '_')
  }

  getGridElementPosition(id) {
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

  changeStateValue = (value, key) => this.setState({[key]:[value]})

  changeStateObjectValue(value, object, key) {
    const localObject = {...this.state[object]}
    localObject[key] = value
    this.setState({[object]:localObject})
  }

  propertyToggle = (key) => this.changeStateValue(!this.state[key], key)
  objectPropertyToggle = (object, key) => this.changeStateObjectValue(!this.state[object][key], object, key)

  changeGridElementValue(value, key) {
    const grid = {...this.state.grid}
    const pos = this.getGridElementPosition(grid.selectElementID)
    grid.list[pos][key] = value
    this.setState({grid})
  }

  toggleGridElementProperty(key) {
    const pos = this.getGridElementPosition(this.state.grid.selectElementID)
    this.changeGridElementValue(!this.state.grid.list[pos][key], key)
  }

  dischargePanelsSettings() {
    const panelStatuses = {...this.state.panelStatuses}
    panelStatuses.gate = panelStatuses.line = panelStatuses.text = true
    return panelStatuses
  }

  setSelectElementID(id) {
    const element = this.getElementGridList(id)
    const panelStatuses = this.dischargePanelsSettings()
    const grid = {...this.state.grid}

    if (Number(id) !== 0) panelStatuses[element.group] = false
    grid.selectElementID = id

    this.setState({panelStatuses, grid})
  }

  getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  getOffsetCoordinates = () => this.getRandomNumber(0, this.state.grid.emergenceBalancer)

  getCoordinates() {
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

  getElementGridList(id) {
    if (id !== 0) {
      const list = {...this.state.grid.list}
      let pos = this.getGridElementPosition(id)

      return {...list[pos]}
    } else {
      return {}
    }
  }

  removeGridElement(id) {
    const grid = {...this.state.grid}
    grid.list = grid.list.filter((item) => item.id !== id)
    grid.selectElementID = 0
    this.setState({grid})

    console.log('1')

    const panelStatuses = this.dischargePanelsSettings()
    this.setState({panelStatuses});
  }

  cloneGridElement() {
    const grid = {...this.state.grid}
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

  changeCordGridElement(id, cord, size) {
    const balance = 10
    const width = this.state.grid.width - size.width - balance
    const height = this.state.grid.height - size.height - balance
    const grid = {...this.state.grid}

    let element = grid.list[this.getGridElementPosition(id)]

    element.x = (cord.x > width)? width : cord.x
    element.y = (cord.y > height)? height : cord.y
    element.x = (element.x < balance)? balance : element.x
    element.y = (element.y < balance)? balance : element.y

    this.setState({grid})
  }

  getNewCord(id, event, size) {
    const element = event.target
    const screenGrid = document.querySelector('#screen-grid-wrapper')

    const cord = {
      x: (element.getBoundingClientRect().left - element.offsetLeft + screenGrid.scrollLeft) - 8,
      y: (element.getBoundingClientRect().top - element.offsetTop + screenGrid.scrollTop) - 8,
    }

    this.changeCordGridElement(id, cord, size)
  }

  addGridElement(item) {
    const grid = {...this.state.grid}
    grid.list.push(item)
    this.setState({grid})
  }

  createGridElement(cord, group) {
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

  builderGridElement = (group) => this.addGridElement(this.createGridElement(this.getCoordinates(), group))

  downloadSaveFile() {
    let a = document.createElement("a");
    let file = new Blob([JSON.stringify(this.state)], {type: 'application/json'});

    a.href = URL.createObjectURL(file);
    a.download = `${this.state.name}.json`;
    a.click();
  }

  uploadSaveFile(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
      let saveData = JSON.parse(reader.result)
      this.setState(saveData)
    }
  }

  checkGridElementsCollide(activeElement, passiveElement) {
    return activeElement.x < passiveElement.x + passiveElement.width &&
      activeElement.x + activeElement.width > passiveElement.x &&
      activeElement.y < passiveElement.y + passiveElement.height &&
      activeElement.height + activeElement.y > passiveElement.y;
  }

  render() {
    const {
      name,
      grid,
      panelStatuses,
      popupStatuses
    } = this.state;

    const currentElement = this.getElementGridList(grid.selectElementID)
    const togglePopupStatus = (key) => this.objectPropertyToggle('popupStatuses', key)

    return (
      <main id="app-screen">
        <section className="screen-popups-container">
          <PopupGridSettings hidden={popupStatuses.gridSettings}
                             closePopup={() => togglePopupStatus('gridSettings')}
                             name={name}
                             grid={grid}
                             changeStateValue={this.changeStateValue.bind(this)}
                             changeStateObjectValue={this.changeStateObjectValue.bind(this)}
          />

          <PopupInfo hidden={popupStatuses.info}
                     closePopup={() => togglePopupStatus('info')}
          />

          <PopupChangeGate hidden={popupStatuses.changeGate}
                           closePopup={() => togglePopupStatus('changeGate')}
                           grid={grid}
                           changeGridElementValue={this.changeGridElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupChangeLine hidden={popupStatuses.changeLine}
                           closePopup={() => togglePopupStatus('changeLine')}
                           grid={grid}
                           changeGridElementValue={this.changeGridElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupChangeText hidden={popupStatuses.changeText}
                           closePopup={() => togglePopupStatus('changeText')}
                           grid={grid}
                           changeGridElementValue={this.changeGridElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupUpload hidden={popupStatuses.uploadSave}
                       closePopup={() => togglePopupStatus('uploadSave')}
                       uploadSaveFile={this.uploadSaveFile.bind(this)}
          />
        </section>

        <ScreenPanel
          removeGridElement={() => this.removeGridElement(grid.selectElementID)}
          toggleGridElementProperty={this.toggleGridElementProperty.bind(this)}
          cloneGridElement={() => this.cloneGridElement()}
          downloadSaveFile={() => this.downloadSaveFile()}
          objectPropertyToggle={this.objectPropertyToggle.bind(this)}

          builderGridElement={this.builderGridElement.bind(this)}

          selectElement={this.getElementGridList(grid.selectElementID)}
          panelStatuses={panelStatuses}
        />

        <ScreenGrid
          grid={grid}
          onClickSetSelectElementID={this.setSelectElementID.bind(this)}
          getNewCord={this.getNewCord.bind(this)}
        />

        <ScreenInfo
          hiddenDevInfo={panelStatuses.devInfo}
          grid={grid}
        />
      </main>
    );
  }
}

export default AppScreen;
