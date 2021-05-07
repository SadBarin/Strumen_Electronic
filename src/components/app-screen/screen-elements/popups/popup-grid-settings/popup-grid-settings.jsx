import React from 'react';
import './popup-grid-settings.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupGridSettings({hidden, closePopup, handleChangeStateValue, name, widthGrid, heightGrid, emergenceCordX, emergenceCordY}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки проекта">
      <div className="grid-settings-container">
        <label htmlFor="name" className='change-line-number'>
          Имя проекта:
          <input type="text"
                 id="name"
                 value={name}
                 onChange={(event) => handleChangeStateValue(event.target.value, 'name')}/>
        </label>

        <label htmlFor="width" className='change-line-number'>
          Ширина:
          <input type="number"
                 id="width"
                 value={widthGrid}
                 onChange={(event) => handleChangeStateValue(event.target.value, 'widthGrid')}/>
        </label>

        <label htmlFor="height" className='change-line-number'>
          Высота:
          <input type="number"
                 id="height"
                 value={heightGrid}
                 onChange={(event) => handleChangeStateValue(event.target.value, 'heightGrid')}/>
        </label>

        <label htmlFor="cordX" className='change-line-number'>
          Корд. появл. X:
          <input type="number"
                 id="cordX"
                 value={emergenceCordX}
                 onChange={(event) => handleChangeStateValue(Number(event.target.value), 'emergenceCordX')}/>
        </label>

        <label htmlFor="cordY" className='change-line-number'>
          Корд. появл. Y:
          <input type="cordY"
                 id="height"
                 value={emergenceCordY}
                 onChange={(event) => handleChangeStateValue(Number(event.target.value), 'emergenceCordY')}/>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupGridSettings.propTypes = {
  name: PropTypes.string.isRequired,
  widthGrid: PropTypes.any.isRequired,
  heightGrid: PropTypes.any.isRequired,
  emergenceCordX: PropTypes.any.isRequired,
  emergenceCordY: PropTypes.any.isRequired,

  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  handleChangeStateValue: PropTypes.func.isRequired
};

export default PopupGridSettings;
