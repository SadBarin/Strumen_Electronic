import React from 'react';
import './popup-change-line.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupChangeLine({ hidden, closePopup }) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки линии">
      <div className="change-line-container">
        <label htmlFor="width" className='change-line-number'>
          Длина:
          <input type="number" id="width"/>
        </label>

        <label htmlFor="height" className='change-line-number'>
          Толщина:
          <input type="number" id="height"/>
        </label>

        <label htmlFor="degree" className='change-line-number'>
          Наклон:
          <input type="number" id="degree"/>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupChangeLine.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired
};

export default PopupChangeLine;
