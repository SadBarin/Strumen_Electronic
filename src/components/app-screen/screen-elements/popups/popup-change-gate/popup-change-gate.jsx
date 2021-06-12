import React from 'react';
import './popup-change-gate.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';
import GridElementColorInput from "../gridElementColorInput";
import GridElementCordInputs from "../gridElementCordInputs";
import GridElementSizeInputs from "../gridElementSizeInputs";

function PopupChangeGate({hidden, closePopup, currentElement, changeGridElementValue, grid}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки вентеля">
      <div className="popup-content-container">
        <label htmlFor="logic">
          Логика:
          <select id="logic"
                  onChange={(event) =>
                    changeGridElementValue(event.target.value, 'content')}
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

        <GridElementColorInput changeGridElementValue={changeGridElementValue}
                               currentElement={currentElement}
        />

        <GridElementCordInputs changeGridElementValue={changeGridElementValue}
                               currentElement={currentElement}
                               grid={grid}
        />

        <GridElementSizeInputs changeGridElementValue={changeGridElementValue}
                               currentElement={currentElement}
                               min={70}
                               max={150}
        />
      </div>
    </PopupWrapper>
  );
}

PopupChangeGate.propTypes = {
  grid: PropTypes.object.isRequired,
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired,
  changeGridElementValue: PropTypes.func.isRequired
};

export default PopupChangeGate;
