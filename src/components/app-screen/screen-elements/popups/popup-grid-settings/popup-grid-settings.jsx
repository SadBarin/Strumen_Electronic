import React from 'react';
import './popup-grid-settings.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupGridSettings({hidden, closePopup, changeStateValue, changeStateObjectValue, grid, name}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки проекта">
      <div className="popup-content-container">
        <label htmlFor="name">
          Имя проекта:
          <input type="text"
                 id="name"
                 value={name}
                 onChange={(event) => changeStateValue(event.target.value, 'name')}/>
        </label>

        <label htmlFor="width" className='label-range'>
          Ширина: {grid.width}
          <input type="range"
                 id="width"
                 min={500}
                 max={3000}
                 value={grid.width}
                 onChange={(event) => changeStateObjectValue(Number(event.target.value), 'grid', 'width')}/>
        </label>

        <label htmlFor="height" className='label-range'>
          Высота: {grid.height}
          <input type="range"
                 id="height"
                 min={500}
                 max={3000}
                 value={grid.height}
                 onChange={(event) => changeStateObjectValue(Number(event.target.value), 'grid', 'height')}/>
        </label>

        <label htmlFor="cordX" className='label-range'>
          Корд. появл. X: {grid.emergenceCordX}
          <input type="range"
                 id="cordX"
                 min={100}
                 max={grid.width - 100}
                 value={grid.emergenceCordX}
                 onChange={(event) => changeStateObjectValue(Number(event.target.value), 'grid', 'emergenceCordX')}/>
        </label>

        <label htmlFor="cordY" className='label-range'>
          Корд. появл. Y: {grid.emergenceCordY}
          <input type="range"
                 id="cordY"
                 min={100}
                 max={grid.height - 100}
                 value={grid.emergenceCordY}
                 onChange={(event) => changeStateObjectValue(Number(event.target.value), 'grid', 'emergenceCordY')}/>
        </label>

        <label htmlFor="balancer" className='label-range'>
          Число смещен: {grid.emergenceBalancer}
          <input type="range"
                 id="balancer"
                 min={0}
                 max={100}
                 value={grid.emergenceBalancer}
                 onChange={(event) => changeStateObjectValue(Number(event.target.value), 'grid', 'emergenceBalancer')}/>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupGridSettings.propTypes = {
  name: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  changeStateValue: PropTypes.func.isRequired,
  changeStateObjectValue: PropTypes.func.isRequired
};

export default PopupGridSettings;
