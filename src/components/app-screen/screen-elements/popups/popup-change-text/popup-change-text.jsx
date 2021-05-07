import React from 'react';
import './popup-change-text.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupChangeText({hidden, closePopup, handleChangeElementValue, currentElement, widthGrid, heightGrid}) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Настройки комментария">
      <div className="popup-content-container">
        <label htmlFor="content">
          Текст:
          <input type="text" id="content"
                 onChange={(e) => handleChangeElementValue(e, 'content')}
                 value={currentElement.content}/>
        </label>

        <label htmlFor="color">
          Цвет:
          <select id="color"
                  onChange={(e) => handleChangeElementValue(e, 'textColor')}
                  value={currentElement.textColor}>
            <option value="hsl(290, 100%, 73%)">Фуксия</option>
            <option value="hsl(250, 100%, 73%)">Фиолетовый</option>
            <option value="hsl(220, 100%, 73%)">Синий</option>
            <option value="hsl(200, 100%, 73%)">Голубой</option>
            <option value="hsl(120, 100%, 73%)">Зелёный</option>
            <option value="hsl(40, 100%, 73%)">Жёлтый</option>
            <option value="hsl(20, 100%, 73%)">Оранжевый</option>
            <option value="hsl(252, 3%, 62%)">Серый</option>
            <option value="hsl(0, 0%, 0%)">Чёрный</option>
          </select>
        </label>

        <label htmlFor="cordX" className="label-range">
          Коорд. X: {currentElement.x}
          <input type="range"
                 id="cordX"
                 min={100}
                 max={widthGrid - 100}
                 onChange={(e) => handleChangeElementValue(e, 'x')}
                 value={currentElement.x}/>
        </label>

        <label htmlFor="cordY" className="label-range">
          Коорд. Y: {currentElement.y}
          <input type="range"
                 id="cordY"
                 min={100}
                 max={heightGrid - 100}
                 onChange={(e) => handleChangeElementValue(e, 'y')}
                 value={currentElement.y}/>
        </label>
      </div>
    </PopupWrapper>
  );
}

PopupChangeText.propTypes = {
  heightGrid: PropTypes.number.isRequired,
  widthGrid: PropTypes.number.isRequired,
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  currentElement: PropTypes.object.isRequired,
  handleChangeElementValue: PropTypes.func.isRequired
};

export default PopupChangeText;
