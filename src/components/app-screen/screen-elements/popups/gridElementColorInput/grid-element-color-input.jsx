import React from 'react';
import './grid-element-color-input.css';
import PropTypes from 'prop-types';
import ButtonIcon from "../../button-icon";

function GridElementColorInput({currentElement, changeGridElementValue, property}) {
  return (
    <label htmlFor="color">
      Цвет:
      <select id="color"
              onChange={(event) =>
                changeGridElementValue(event.target.value, property)}
              value={currentElement.backgroundColor}>
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
  );
}

GridElementColorInput.defaultProps = {
  property: 'backgroundColor'
};


GridElementColorInput.propTypes = {
  property: PropTypes.string,
  currentElement: PropTypes.object.isRequired,
  changeGridElementValue: PropTypes.func.isRequired
};

export default GridElementColorInput;
