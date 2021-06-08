import React from 'react';
import './popup-change-gate.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupChangeGate({hidden, closePopup, currentElement, changeGridElementValue, heightGrid, widthGrid}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки вентеля">
      <div className="popup-content-container">
        <label htmlFor="logic">
          Логика:
          <select id="logic"
                  onChange={(event) => changeGridElementValue(event, 'content')}
                  value={currentElement.content}>
            <option value="1">1</option>
            <option value="0">0</option>
            <option value="NOT">NOT</option>
            <option value="AND">AND</option>
            <option value="NAND">NAND</option>
            <option value="OR">OR</option>
            <option value="NOR">NOR</option>
            <option value="XOR">XOR</option>
            <option value="XNOR">XNOR</option>
          </select>
        </label>

        <label htmlFor="width" className="label-range">
          Ширина: {currentElement.width}
          <input type="range"
                 min={60}
                 max={150}
                 id="width"
                 value={currentElement.width}
                 onChange={(e) => changeGridElementValue(e, 'width')}/>
        </label>

        <label htmlFor="height" className="label-range">
          Высота: {currentElement.height}
          <input type="range"
                 min={60}
                 max={150}
                 id="height"
                 value={currentElement.height}
                 onChange={(e) => changeGridElementValue(e, 'height')}/>
        </label>

        <label htmlFor="color">
          Цвет:
          <select id="color"
                  onChange={(e) => changeGridElementValue(e, 'backgroundColor')}
                  value={currentElement.backgroundColor}>
            <option value="hsl(290, 100%, 73%)">Фуксия</option>
            <option value="hsl(250, 100%, 73%)">Фиолетовый</option>
            <option value="hsl(220, 100%, 73%)">Синий</option>
            <option value="hsl(200, 100%, 73%)">Голубой</option>
            <option value="hsl(120, 100%, 73%)">Зелёный</option>
            <option value="hsl(40, 100%, 73%)">Жёлтый</option>
            <option value="hsl(20, 100%, 73%)">Оранжевый</option>
            <option value="hsl(252, 3%, 62%)">Серый</option>
            <option value="hsl(0, 0%, 0%)">Чёрный</option>
          </select>
        </label>

        <label htmlFor="cordX" className="label-range">
          Коорд. X: {currentElement.x}
          <input type="range"
                 id="cordX"
                 min={100}
                 max={widthGrid - 100}
                 onChange={(e) => changeGridElementValue(e, 'x')}
                 value={currentElement.x}/>
        </label>

        <label htmlFor="cordY" className="label-range">
          Коорд. Y: {currentElement.y}
          <input type="range"
                 id="cordY"
                 min={100}
                 max={heightGrid - 100}
                 onChange={(e) => changeGridElementValue(e, 'y')}
                 value={currentElement.y}/>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupChangeGate.propTypes = {
  heightGrid: PropTypes.number.isRequired,
  widthGrid: PropTypes.number.isRequired,
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired,
  changeGridElementValue: PropTypes.func.isRequired
};

export default PopupChangeGate;
