import React from 'react';
import './grid-element-size-inputs.css';
import PropTypes from 'prop-types';

function GridElementSizeInputs({currentElement, changeGridElementValue, min, max, onChange}) {
  return (
    <div className="cord-inputs">
      <label htmlFor="width" className="label-range">
        Ширина: {currentElement.width}
        <input type="range"
               min={min}
               max={max}
               id="width"
               value={currentElement.width}
               onChange={(event) =>
                 changeGridElementValue(Number(event.target.value), 'width')}/>
      </label>

      <label htmlFor="height" className="label-range">
        Высота: {currentElement.height}
        <input type="range"
               min={min}
               max={max}
               id="height"
               value={currentElement.height}
               onChange={(event) =>
                 changeGridElementValue(Number(event.target.value), 'height')}/>
      </label>
    </div>
  );
}

GridElementSizeInputs.propTypes = {
  currentElement: PropTypes.object.isRequired,
  changeGridElementValue: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

export default GridElementSizeInputs;
