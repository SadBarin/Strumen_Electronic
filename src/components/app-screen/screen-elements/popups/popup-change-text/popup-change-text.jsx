import React from 'react';
import './popup-change-text.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';
import GridElementCordInputs from "../gridElementCordInputs";
import GridElementColorInput from "../gridElementColorInput";

function PopupChangeText({hidden, closePopup, changeGridElementValue, currentElement, grid}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки комментария">
      <div className="popup-content-container">
        <label htmlFor="content">
          Текст:
          <input type="text" id="content"
                 onChange={(event) =>
                   changeGridElementValue(event.target.value, 'content')}
                 value={currentElement.content}/>
        </label>

        <GridElementColorInput changeGridElementValue={changeGridElementValue}
                               currentElement={currentElement}
                               property='textColor'
        />


        <GridElementCordInputs changeGridElementValue={changeGridElementValue}
                               currentElement={currentElement}
                               grid={grid}
        />
      </div>
    </PopupWrapper>
  );
}

PopupChangeText.propTypes = {
  grid: PropTypes.object.isRequired,
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired,
  changeGridElementValue: PropTypes.func.isRequired
};

export default PopupChangeText;
