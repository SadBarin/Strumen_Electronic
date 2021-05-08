import React from 'react';
import './popup-grid-settings.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupGridSettings({hidden, closePopup, handleChangeStateValue, name, widthGrid, heightGrid, emergenceCordX, emergenceCordY, emergenceBalancer}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки проекта">
      <div className="popup-content-container">
        <label htmlFor="name">
          Имя проекта:
          <input type="text"
                 id="name"
                 value={name}
                 onChange={(event) => handleChangeStateValue(event.target.value, 'name')}/>
        </label>

        <label htmlFor="width" className='label-range'>
          Ширина: {widthGrid}
          <input type="range"
                 id="width"
                 min={500}
                 max={3000}
                 value={widthGrid}
                 onChange={(event) => handleChangeStateValue(event.target.value, 'widthGrid')}/>
        </label>

        <label htmlFor="height" className='label-range'>
          Высота: {heightGrid}
          <input type="range"
                 id="height"
                 min={500}
                 max={3000}
                 value={heightGrid}
                 onChange={(event) => handleChangeStateValue(event.target.value, 'heightGrid')}/>
        </label>

        <label htmlFor="cordX" className='label-range'>
          Корд. появл. X: {emergenceCordX}
          <input type="range"
                 id="cordX"
                 min={100}
                 max={widthGrid - 100}
                 value={emergenceCordX}
                 onChange={(event) => handleChangeStateValue(Number(event.target.value), 'emergenceCordX')}/>
        </label>

        <label htmlFor="cordY" className='label-range'>
          Корд. появл. Y: {emergenceCordY}
          <input type="range"
                 id="cordY"
                 min={100}
                 max={heightGrid - 100}
                 value={emergenceCordY}
                 onChange={(event) => handleChangeStateValue(Number(event.target.value), 'emergenceCordY')}/>
        </label>

        <label htmlFor="balancer" className='label-range'>
          Число смещен: {emergenceBalancer}
          <input type="range"
                 id="balancer"
                 min={0}
                 max={100}
                 value={emergenceBalancer}
                 onChange={(event) => handleChangeStateValue(Number(event.target.value), 'emergenceBalancer')}/>
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
  emergenceBalancer: PropTypes.any.isRequired,

  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  handleChangeStateValue: PropTypes.func.isRequired
};

export default PopupGridSettings;
