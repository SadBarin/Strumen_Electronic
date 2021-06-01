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
      name: 'Струмень_' + (
        new Date().toLocaleDateString().replace(/\//gi, '-')
        + '_' +
        new Date().toLocaleTimeString().replace(/:/gi, '-'))
          .replace(/\s/gi, '_'),


      version: packageApp.version,
      widthGrid: 2000,
      heightGrid: 1000,
      backgroundGrid: 'hsl(0, 0%, 98%)',

      emergenceCordX: 200,
      emergenceCordY: 200,
      emergenceBalancer: 35,

      gridList: [],
      selectElementID: 0,

      hiddenPopupGridSettings: false,
      hiddenPopupGate: true,
      hiddenPopupLine: true,
      hiddenPopupInfo: true,
      hiddenPopupText: true,
      hiddenPopupUpload: true,

      hiddenDevInfo: true,
      hiddenListAdd: true,
      hiddenListGate: true,
      hiddenListLine: true,
      hiddenListText: true,
      hiddenListBox: true
    };
  }

  getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  getOffsetCoordinates = () => this.getRandomNumber(0, this.state.emergenceBalancer)

  getCoordinates() {
    let x = this.state.emergenceCordX + this.getOffsetCoordinates()
    let y = this.state.emergenceCordY + this.getOffsetCoordinates()
    let width = this.state.widthGrid - 100
    let height = this.state.heightGrid - 100

    if (x > width) x = width
    if (y > height) y = height

    return {
      x,
      y
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
        this.setState({hiddenListGate: false, hiddenListLine: true, hiddenListText: true, hiddenListBox: true});
      }else if (element.group === 'line' && id !== 0){
        this.setState({hiddenListLine: false, hiddenListGate: true, hiddenListText: true, hiddenListBox: true});
      }else if (element.group === 'text' && id !== 0){
        this.setState({hiddenListLine: true, hiddenListGate: true, hiddenListText: false, hiddenListBox: true});
      }else if (element.group === 'box' && id !== 0){
        this.setState({hiddenListLine: true, hiddenListGate: true, hiddenListText: true, hiddenListBox: false});
      }
    } else {
      this.setState({hiddenListGate: true, hiddenListLine: true, hiddenListText: true, hiddenListBox: true})
    }
  }

  handleRemoveItem = (id) => {
    this.setState((state) => {
      const items = state.gridList.filter((item) => item.id !== id);
      return {gridList: items, selectElementID: 0, hiddenListGate: true, hiddenListLine: true, hiddenListText: true};
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

    let x = this.getOffsetCoordinates()
    let y = this.getOffsetCoordinates()
    let width = this.state.widthGrid - 80
    let height = this.state.heightGrid - 60

    element.x += x
    element.y += y

    if (element.x > width) element.x = width
    if (element.y > height) element.y = height

    list.push(element)
    this.setState({gridList: list})
    this.setState({selectElementID: element.id})
  }

  handleChangeElementValue(event, key) {
    const list = this.state.gridList
    const id = this.state.selectElementID
    const element = list[this.getElementArrayPositionByID(list, id)]

    element[key] = event.target.value
    this.setState({gridList: list})
  }

  handleChangeStateValue(value, key) {
    const localState = this.state

    localState[key] = value
    this.setState({localState})
  }

  changeCord(id, cord, size) {
    const balance = 10

    const width = this.state.widthGrid - size.width - balance
    const height = this.state.heightGrid - size.height - balance

    const list = this.state.gridList
    let element = list[this.getElementArrayPositionByID(list, id)]


    element.x = (cord.x > width)? width : cord.x
    element.y = (cord.y > height)? height : cord.y

    element.x = (element.x < balance)? balance : element.x
    element.y = (element.y < balance)? balance : element.y

    this.setState({gridList: list})
  }

  handleSetNewCord(id, event, size) {
    const element = event.target
    const screenGrid = document.querySelector('#screen-grid-wrapper')

    const cord = {
      x: (element.getBoundingClientRect().left - element.offsetLeft + screenGrid.scrollLeft) - 8,
      y: (element.getBoundingClientRect().top - element.offsetTop + screenGrid.scrollTop) - 8,
    }

    this.changeCord(id, cord, size)
  }

  handleAdd(item) {
    this.setState((state) => {
      return {gridList: [...state.gridList, item]}
    })
  }

  createObjectGrid = (cord, group) => {
    const {x, y} = cord

    return {
      id: Date.now(),
      x, y,
      group,
      pin: false,
      active: false,
    };
  }
  handleAddObjectGrid = (constructor) => this.handleAdd(constructor(this.getCoordinates()))

  createGate = (cord) => {
    let gate = this.createObjectGrid(cord,  'gate')

    gate.width = 90
    gate.height = 50
    gate.content = '1'
    gate.status = true
    gate.backgroundColor = 'hsl(20, 100%, 73%)'
    gate.textColor = 'hsl(0, 0%, 98%)'

    return gate
  }

  createLine = (cord) => {
    let line = this.createObjectGrid(cord, 'line')

    line.width = 170
    line.height = 8
    line.status = false
    line.backgroundColor = 'hsl(20, 100%, 73%)'

    return line
  }

  createText = (cord) => {
    let text = this.createObjectGrid(cord,  'text')

    text.textColor = 'hsl(0, 0%, 0%)'
    text.content = 'Блок комментария'

    return text
  }

  // createBox = (cord) => {
  //   let box = this.createObjectGrid(cord, 'box')
  //
  //   box.width = 200
  //   box.height = 200
  //   box.backgroundColor = 'hsl(20, 100%, 73%)'
  //   box.content = {}
  //
  //   return box
  // }

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

  onClickIsCollide(element1, arrayOldest = []) {
    // let element1 = this.getElementGridList(this.state.selectElementID)
    let list = this.state.gridList

    list.map((element2) => {
      if(element2.group !== 'box') {
        if (element1.x < element2.x + element2.width &&
          element1.x + element1.width > element2.x &&
          element1.y < element2.y + element2.height &&
          element1.height + element1.y > element2.y) {
            const element1Pos = this.getElementArrayPositionByID(list, element1.id)
            const element2Pos = this.getElementArrayPositionByID(list, element2.id)

            if (arrayOldest.indexOf(element1.id) === -1 &&
            arrayOldest.indexOf(element2.id) === -1) {
              if (element1.group === 'line' && element2.group === 'line') {
                list[element1Pos].status = element2.status
                arrayOldest.push(element1.id)
                arrayOldest.push(element2.id)
                this.onClickIsCollide(element2, arrayOldest)
              } else if (element1.group === 'line') {
                list[element1Pos].status = element2.status
                arrayOldest.push(element1.id)
                this.onClickIsCollide(element2, arrayOldest)
              } else if (element2.group === 'line') {
                list[element2Pos].status = element1.status
                arrayOldest.push(element1.id)
                this.onClickIsCollide(element1, arrayOldest)
              }
            }
        }
      }
    })

    this.setState({gridList: list})
  }

  gateProcessor(id) {
    const list = this.state.gridList
    const pos = this.getElementArrayPositionByID(list, id)
    const gate = list[pos]

    if (gate.content === '1') gate.status = true
    if (gate.content === '0') gate.status = false

    list[pos] = gate

    this.setState({gridList: list})
    this.onClickIsCollide(gate)
  }

  render() {
    const {
      name,
      backgroundGrid,
      widthGrid,
      heightGrid,
      emergenceCordX,
      emergenceCordY,
      emergenceBalancer,

      gridList,
      selectElementID,

      hiddenDevInfo,
      hiddenListAdd,
      hiddenListGate,
      hiddenListLine,
      hiddenListText,
      hiddenListBox,

      hiddenPopupGridSettings,
      hiddenPopupGate,
      hiddenPopupInfo,
      hiddenPopupLine,
      hiddenPopupText,
      hiddenPopupUpload
    } = this.state;

    const currentElement = this.getElementGridList(selectElementID)

    return (
      <main id="app-screen">
        <section className="screen-popups-container">
          <PopupGridSettings hidden={hiddenPopupGridSettings}
                           name={name}
                           widthGrid={widthGrid}
                           heightGrid={heightGrid}
                           backgroundGrid={backgroundGrid}
                           emergenceCordX={emergenceCordX}
                           emergenceCordY={emergenceCordY}
                           emergenceBalancer={emergenceBalancer}

                           closePopup={() => this.handleToggle('hiddenPopupGridSettings')}
                           handleChangeStateValue={this.handleChangeStateValue.bind(this)}
          />

          <PopupInfo hidden={hiddenPopupInfo}
                     closePopup={() => this.handleToggle('hiddenPopupInfo')}
          />

          <PopupChangeGate hidden={hiddenPopupGate}
                           widthGrid={widthGrid}
                           heightGrid={heightGrid}
                           closePopup={() => this.handleToggle('hiddenPopupGate')}
                           handleChangeElementValue={this.handleChangeElementValue.bind(this)}
                           currentElement={currentElement}
                           gateProcessor={this.gateProcessor.bind(this)}
          />

          <PopupChangeLine hidden={hiddenPopupLine}
                           widthGrid={widthGrid}
                           heightGrid={heightGrid}
                           closePopup={() => this.handleToggle('hiddenPopupLine')}
                           handleChangeElementValue={this.handleChangeElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupChangeText hidden={hiddenPopupText}
                           widthGrid={widthGrid}
                           heightGrid={heightGrid}
                           closePopup={() => this.handleToggle('hiddenPopupText')}
                           handleChangeElementValue={this.handleChangeElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupUpload hidden={hiddenPopupUpload}
                       closePopup={() => this.handleToggle('hiddenPopupUpload')}
                       setSaveFile={this.setSaveFile.bind(this)}
          />
        </section>

        <ScreenPanel
          onClickChangeRemoveStatus={() => this.handleRemoveItem(selectElementID)}
          onClickChangePin={() => this.handleChangePin()}
          onClickCloneElement={() => this.handleCloneElement()}
          onClickToggleHiddenListAdd={() => this.handleToggle('hiddenListAdd')}
          onClickHiddenDevStatus={() => this.handleToggle('hiddenDevInfo')}
          onClickSave={() => this.handleSave()}

          onClickToggleHiddenPopupGridSettings={() => this.handleToggle('hiddenPopupGridSettings')}
          onClickToggleHiddenPopupInfo={() => this.handleToggle('hiddenPopupInfo')}
          onClickToggleHiddenPopupGate={() => this.handleToggle('hiddenPopupGate')}
          onClickToggleHiddenPopupLine={() => this.handleToggle('hiddenPopupLine')}
          onClickToggleHiddenPopupText={() => this.handleToggle('hiddenPopupText')}
          onClickToggleHiddenPopupUpload={() => this.handleToggle('hiddenPopupUpload')}

          onClickAddGate={() => this.handleAddObjectGrid(this.createGate)}
          onClickAddLine={() => this.handleAddObjectGrid(this.createLine)}
          onClickAddText={() => this.handleAddObjectGrid(this.createText)}
          onClickAddBox={() => this.handleAddObjectGrid(this.createBox)}

          selectElement={this.getElementGridList(selectElementID)}

          hiddenDevInfo={hiddenDevInfo}
          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
          hiddenListLine={hiddenListLine}
          hiddenListText={hiddenListText}
          hiddenListBox={hiddenListBox}

          onClickIsCollide={() => this.onClickIsCollide()}
        />

        <ScreenGrid
          widthGrid={widthGrid}
          heightGrid={heightGrid}
          backgroundGrid={backgroundGrid}

          selectElementID={selectElementID}
          items={gridList}
          onClickSetSelectElementID={this.handleSetSelectElementID.bind(this)}
          onClickIsCollide={this.onClickIsCollide.bind(this)}

          handleSetNewCord={this.handleSetNewCord.bind(this)}
        />

        <ScreenInfo
          hiddenDevInfo={hiddenDevInfo}

          selectElementID={selectElementID}
          gridListLength={gridList.length}
        />
      </main>
    );
  }
}

export default AppScreen;
