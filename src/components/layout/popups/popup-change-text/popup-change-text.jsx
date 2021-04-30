import React from 'react';
import './popup-change-text.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupChangeText({hidden, closePopup, handleChangeElementValue, currentElement}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки комментария">
      <div className="change-text-container">
        <label htmlFor="content" className='change-text'>
          Текст:
          <input type="text" id="content"
                 onChange={(e) => handleChangeElementValue(e, 'content')}
                 value={currentElement.content}/>
        </label>

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

PopupChangeText.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired,
  handleChangeElementValue: PropTypes.func.isRequired
};

export default PopupChangeText;
