import React from 'react';
import './popup-change-line.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupChangeLine({ hidden, closePopup, handleChangeElementValue, currentElement }) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки линии">
      <div className="change-line-container">
        <label htmlFor="active" className="change-line-select">
          Активен:
          <select id="active"
                  onChange={(e) => handleChangeElementValue(e, 'active')}
                  value={currentElement.active}>
            <option value={true}>Да</option>
            <option value={false}>Нет</option>
          </select>
        </label>

        <label htmlFor="width" className='change-line-number'>
          Длина:
          <input type="number"
                 id="width"
                 value={currentElement.width}
                 onChange={(e) => handleChangeElementValue(e, 'width')}/>
        </label>

        <label htmlFor="height" className='change-line-number'>
          Толщина:
          <input type="number"
                 id="height"
                 value={currentElement.height}
                 onChange={(e) => handleChangeElementValue(e, 'height')}/>
        </label>

        {/*<label htmlFor="degree" className='change-line-number'>*/}
        {/*  Наклон:*/}
        {/*  <input type="number"*/}
        {/*         id="degree"*/}
        {/*         value={currentElement.turn}*/}
        {/*         onChange={(e) => handleChangeElementValue(e, 'turn')}*/}
        {/*  />*/}
        {/*</label>*/}

        {/*<div className="degree-preset-container">*/}
        {/*  <button className="button-preset" value={0} onClick={(e) => handleChangeElementValue(e, 'turn')}>0  — </button>*/}
        {/*  <button className="button-preset" value={45} onClick={(e) => handleChangeElementValue(e, 'turn')}>45  \ </button>*/}
        {/*  <button className="button-preset" value={90} onClick={(e) => handleChangeElementValue(e, 'turn')}>90  | </button>*/}
        {/*  <button className="button-preset" value={135} onClick={(e) => handleChangeElementValue(e, 'turn')}>135 / </button>*/}
        {/*</div>*/}

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

PopupChangeLine.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired,

  handleChangeElementValue: PropTypes.func.isRequired
};

export default PopupChangeLine;
