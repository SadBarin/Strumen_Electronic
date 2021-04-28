import React from 'react';
import './popup-change-line.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupChangeLine({ hidden, closePopup, changeWidth, changeHeight, changeTurn, changeActive, currentElement }) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки линии">
      <div className="change-line-container">
        <label htmlFor="width" className='change-line-number'>
          Длина:
          <input type="number"
                 id="width"
                 value={currentElement.width}
                 onChange={(e) => changeWidth(e, 'width')}/>
        </label>

        <label htmlFor="height" className='change-line-number'>
          Толщина:
          <input type="number"
                 id="height"
                 value={currentElement.height}
                 onChange={(e) => changeHeight(e, 'height')}/>
        </label>

        <label htmlFor="degree" className='change-line-number'>
          Наклон:
          <input type="number"
                 id="degree"
                 value={currentElement.turn}
                 onChange={(e) => changeTurn(e, 'turn')}
          />
        </label>

        <label htmlFor="active" className="change-line-select">
          Активен:
          <select id="active"
                  onChange={(e) => changeActive(e, 'active')}
                  value={currentElement.active}>
            <option value={true}>Да</option>
            <option value={false}>Нет</option>
          </select>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupChangeLine.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired,

  changeWidth: PropTypes.func.isRequired,
  changeHeight: PropTypes.func.isRequired,
  changeTurn: PropTypes.func.isRequired,
  changeActive: PropTypes.func.isRequired,
};

export default PopupChangeLine;
