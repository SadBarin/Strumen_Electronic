import React from 'react';
import './popup-change-gate.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupChangeGate({hidden, closePopup, changeLogic, changeTurn, currentElement}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки вентеля">
      <div className="change-gate-container">
        <label htmlFor="logic" className="change-gate-select">
          Логика:
          <select id="logic"
                  onChange={(e) => changeLogic(e, 'type')}
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
                 onChange={(e) => changeTurn(e, 'turn')}
                 value={currentElement.turn}/>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupChangeGate.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  changeLogic: PropTypes.func.isRequired,
  changeTurn: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired
};

export default PopupChangeGate;
