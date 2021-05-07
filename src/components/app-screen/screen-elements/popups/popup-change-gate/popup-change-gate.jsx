import React from 'react';
import './popup-change-gate.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupChangeGate({hidden, closePopup, currentElement, handleChangeElementValue}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки вентеля">
      <div className="change-gate-container">
        <label htmlFor="logic" className="change-gate-select">
          Логика:
          <select id="logic"
                  onChange={(e) => handleChangeElementValue(e, 'content')}
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

        <label htmlFor="width" className='change-line-number'>
          Длина:
          <input type="number"
                 id="width"
                 value={currentElement.width}
                 onChange={(e) => handleChangeElementValue(e, 'width')}/>
        </label>

        <label htmlFor="height" className='change-line-number'>
          Толщина:
          <input type="number"
                 id="height"
                 value={currentElement.height}
                 onChange={(e) => handleChangeElementValue(e, 'height')}/>
        </label>

        <label htmlFor="color" className="change-gate-select">
          Цвет:
          <select id="color"
                  onChange={(e) => handleChangeElementValue(e, 'backgroundColor')}
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

        {/*<label htmlFor="degree" className='change-gate-number'>*/}
        {/*  Наклон:*/}
        {/*  <input type="number" id="degree"*/}
        {/*         onChange={(e) => handleChangeElementValue(e, 'turn')}*/}
        {/*         value={currentElement.turn}/>*/}
        {/*</label>*/}

        {/*<div className="degree-preset-container">*/}
        {/*  <button className="button-preset" value={0} onClick={(e) => handleChangeElementValue(e, 'turn')}>0  — </button>*/}
        {/*  <button className="button-preset" value={45} onClick={(e) => handleChangeElementValue(e, 'turn')}>45  \ </button>*/}
        {/*  <button className="button-preset" value={90} onClick={(e) => handleChangeElementValue(e, 'turn')}>90  | </button>*/}
        {/*  <button className="button-preset" value={135} onClick={(e) => handleChangeElementValue(e, 'turn')}>135 / </button>*/}
        {/*</div>*/}

        <label htmlFor="cordX" className='change-gate-number'>
          Коорд. X:
          <input type="number" id="cordX"
                 onChange={(e) => handleChangeElementValue(e, 'x')}
                 value={currentElement.x}/>
        </label>

        <label htmlFor="cordY" className='change-gate-number'>
          Коорд. Y:
          <input type="number" id="cordY"
                 onChange={(e) => handleChangeElementValue(e, 'y')}
                 value={currentElement.y}/>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupChangeGate.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired,
  handleChangeElementValue: PropTypes.func.isRequired
};

export default PopupChangeGate;
