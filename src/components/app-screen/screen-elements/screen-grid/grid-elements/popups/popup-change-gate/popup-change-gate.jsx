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
                  onChange={(e) => handleChangeElementValue(e, 'type')}
                  value={currentElement.type}>
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

        <label htmlFor="degree" className='change-gate-number'>
          Наклон:
          <input type="number" id="degree"
                 onChange={(e) => handleChangeElementValue(e, 'turn')}
                 value={currentElement.turn}/>
        </label>

        <div className="degree-preset-container">
          <button className="button-preset" value={0} onClick={(e) => handleChangeElementValue(e, 'turn')}>0  — </button>
          <button className="button-preset" value={45} onClick={(e) => handleChangeElementValue(e, 'turn')}>45  \ </button>
          <button className="button-preset" value={90} onClick={(e) => handleChangeElementValue(e, 'turn')}>90  | </button>
          <button className="button-preset" value={135} onClick={(e) => handleChangeElementValue(e, 'turn')}>135 / </button>
        </div>

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
