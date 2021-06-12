import React from 'react';
import './popup-change-line.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';
import GridElementColorInput from "../gridElementColorInput";
import GridElementCordInputs from "../gridElementCordInputs";
import GridElementSizeInputs from "../gridElementSizeInputs";

function PopupChangeLine({ hidden, closePopup, changeGridElementValue, currentElement, grid }) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки линии">
      <div className="popup-content-container">
        <GridElementColorInput changeGridElementValue={changeGridElementValue}
                               currentElement={currentElement}
        />

        <GridElementCordInputs changeGridElementValue={changeGridElementValue}
                               currentElement={currentElement}
                               grid={grid}
        />

        <GridElementSizeInputs changeGridElementValue={changeGridElementValue}
                               currentElement={currentElement}
                               min={5}
                               max={150}
        />
      </div>
    </PopupWrapper>
  );
}

PopupChangeLine.propTypes = {
  grid: PropTypes.object.isRequired,
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired,
  changeGridElementValue: PropTypes.func.isRequired
};

export default PopupChangeLine;
