import React from 'react';
import './grid-element-cord-inputs.css';
import PropTypes from 'prop-types';

let gridWidth = 1000

function GridElementCordInputs({currentElement, changeGridElementValue, min, max, grid}) {
  gridWidth = grid.width

  return (
    <div className="cord-inputs">
      <label htmlFor="cordX" className="label-range">
        Коорд. X: {currentElement.x}
        <input type="range"
               id="cordX"
               min={min}
               max={max}
               onChange={(event) =>
                 changeGridElementValue(Number(event.target.value), 'x')}
               value={currentElement.x}/>
      </label>

      <label htmlFor="cordY" className="label-range">
        Коорд. Y: {currentElement.y}
        <input type="range"
               id="cordY"
               min={min}
               max={max}
               onChange={(event) =>
                 changeGridElementValue(Number(event.target.value), 'y')}
               value={currentElement.y}/>
      </label>
    </div>
  );
}

GridElementCordInputs.defaultProps = {
  min: 100,
  max: gridWidth - 100
};

GridElementCordInputs.propTypes = {
  currentElement: PropTypes.object.isRequired,
  changeGridElementValue: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  grid: PropTypes.object.isRequired
};

export default GridElementCordInputs;
