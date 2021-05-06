import React, {Component} from 'react';
import './app-screen.css';

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
      widthGrid: 2000,
      heightGrid: 1000,

      gridList: [],
      selectElementID: 0,

      hiddenPopupGate: true,
      hiddenPopupLine: true,
      hiddenPopupInfo: true,
      hiddenPopupText: true,
      hiddenPopupUpload: true,

      hiddenDevInfo: false,
      hiddenListAdd: true,
      hiddenListGate: true,
      hiddenListLine: true,
      hiddenListText: true
    };
  }

  // componentDidUpdate() {
  //   const [widthGrid, heightGrid] = this.state
  //
  //   console.log('hi')
  //   console.log(widthGrid)
  //
  //   // this.document.style.height =
  // }

  getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  getRandomCoordinates() {
    return {
      x: this.getRandomNumber(100, this.state.widthGrid - 100),
      y: this.getRandomNumber(100, this.state.heightGrid - 100),
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
        this.setState({hiddenListGate: false, hiddenListLine: true, hiddenListText: true});
      }else if (element.group === 'line' && id !== 0){
        this.setState({hiddenListLine: false, hiddenListGate: true, hiddenListText: true});
      }else if (element.group === 'text' && id !== 0){
        this.setState({hiddenListLine: true, hiddenListGate: true, hiddenListText: false});
      }
    } else {
      this.setState({hiddenListGate: true, hiddenListLine: true, hiddenListText: true})
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
      x: (element.getBoundingClientRect().left - element.offsetLeft + screenGrid.scrollLeft) - 10,
      y: (element.getBoundingClientRect().top - element.offsetTop + screenGrid.scrollTop) - 10,
    }

    this.changeCord(id, cord, size)
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
      width: 90,
      height: 50,
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
      active: 'false',
      pin: false
    };
  }
  handleAddLine = () => this.handleAdd(this.createLine(this.getRandomCoordinates()))

  createText = (obj) => {
    const {x, y} = obj;

    return {
      id: Date.now(),
      group: 'text',
      x, y,
      content: 'Блок комментария',
      turn: 0,
      pin: false
    };
  }
  handleAddText = () => this.handleAdd(this.createText(this.getRandomCoordinates()))

  handleSave() {
    let a = document.createElement("a");
    let file = new Blob([JSON.stringify(this.state)], {type: 'application/json'});
    let date = new Date().toLocaleString()

    a.href = URL.createObjectURL(file);
    a.download = `Strumen${date}.json`;
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

  render() {
    const {
      widthGrid,
      heightGrid,

      gridList,
      selectElementID,

      hiddenDevInfo,
      hiddenListAdd,
      hiddenListGate,
      hiddenListLine,
      hiddenListText,

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
          <PopupInfo hidden={hiddenPopupInfo}
                     closePopup={() => this.handleToggle('hiddenPopupInfo')}
          />

          <PopupChangeGate hidden={hiddenPopupGate}
                           closePopup={() => this.handleToggle('hiddenPopupGate')}
                           handleChangeElementValue={this.handleChangeElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupChangeLine hidden={hiddenPopupLine}
                           closePopup={() => this.handleToggle('hiddenPopupLine')}
                           handleChangeElementValue={this.handleChangeElementValue.bind(this)}
                           currentElement={currentElement}
          />

          <PopupChangeText hidden={hiddenPopupText}
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

          onClickToggleHiddenPopupInfo={() => this.handleToggle('hiddenPopupInfo')}
          onClickToggleHiddenPopupGate={() => this.handleToggle('hiddenPopupGate')}
          onClickToggleHiddenPopupLine={() => this.handleToggle('hiddenPopupLine')}
          onClickToggleHiddenPopupText={() => this.handleToggle('hiddenPopupText')}
          onClickToggleHiddenPopupUpload={() => this.handleToggle('hiddenPopupUpload')}

          onClickAddGate={() => this.handleAddGate()}
          onClickAddLine={() => this.handleAddLine()}
          onClickAddText={() => this.handleAddText()}

          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
          hiddenListLine={hiddenListLine}
          hiddenListText={hiddenListText}
        />

        <ScreenGrid
          widthGrid={widthGrid}
          heightGrid={heightGrid}

          selectElementID={selectElementID}
          items={gridList}
          onClickSetSelectElementID={this.handleSetSelectElementID.bind(this)}

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
