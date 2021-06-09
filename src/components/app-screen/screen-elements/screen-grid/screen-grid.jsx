import React, { useEffect } from 'react';
import './screen-grid.css';
import PropTypes from 'prop-types';

import GridGate from "./grid-elements/grid-gate";
import GridLine from "./grid-elements/grid-line";
import GridText from "./grid-elements/grid-text";

function ScreenGrid(props) {
  const {onClickSetSelectElementID, handleSetNewCord, grid} = props;

  let wrapperWidth = window.innerWidth - 16;
  let wrapperHeight = window.innerHeight - 16;

  window.addEventListener(`resize`, event => {
    wrapperWidth = window.innerWidth - 16;
    wrapperHeight = window.innerHeight - 16;
  }, false);

  const gridListGate = grid.list.map((item) => {
    if (item.group === 'gate') {
      const elementSelectStatus = (grid.selectElementID === item.id)

      return (
        <div className="screen-grid-element" key={item.id}>
          <GridGate
            item={item}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={grid.selectElementID}
            selectStatus={elementSelectStatus}
            handleSetNewCord={handleSetNewCord}
          />
        </div>
      );
    }
  });

  const gridListLine = grid.list.map((item) => {
    if (item.group === 'line') {
      const elementSelectStatus = (grid.selectElementID === item.id)

      return (
        <div className="screen-grid-element" key={item.id}>
          <GridLine
            item={item}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={grid.selectElementID}
            selectStatus={elementSelectStatus}
            handleSetNewCord={handleSetNewCord}
          />
        </div>
      );
    }
  })

  const gridLayoutText = grid.list.map((item) => {
    if (item.group === 'text') {
      const elementSelectStatus = (grid.selectElementID === item.id)

      return (
        <div className="screen-grid-element" key={item.id}>
          <GridText
            item={item}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={grid.selectElementID}
            selectStatus={elementSelectStatus}
            handleSetNewCord={handleSetNewCord}
          />
        </div>
      );
    }
  })

  const style = {
    background: grid.background,
    width: `${grid.width}px`,
    height: `${grid.height}px`
  }

  return (
    <div id="screen-grid-wrapper" style={{width: wrapperWidth, height: wrapperHeight}}>
      <div id="screen-grid" style={style}>
        <div id="grid-background" style={{background: grid.background}}
             onClick={() => onClickSetSelectElementID(0)}
             onTouchStart={() => onClickSetSelectElementID(0)}
        />

        {gridListGate}
        {gridListLine}
        {gridLayoutText}
      </div>
    </div>
  );
}

ScreenGrid.propTypes = {
  onClickSetSelectElementID: PropTypes.func.isRequired,
  handleSetNewCord: PropTypes.func.isRequired,
  grid: PropTypes.object.isRequired
};

export default ScreenGrid;
