import React, { useEffect } from 'react';
import './screen-grid.css';
import PropTypes from 'prop-types';

import LogicGate from "./grid-elements/logic-gate";
import LogicLine from "./grid-elements/logic-line";
import LayoutText from "./grid-elements/layout-text";

function ScreenGrid(props) {
  const {items, onClickSetSelectElementID, selectElementID, handleSetNewCord, widthGrid, heightGrid} = props;

  let wrapperWidth = window.innerWidth - 20;
  let wrapperHeight = window.innerHeight - 20;

  window.addEventListener(`resize`, event => {
    wrapperWidth = window.innerWidth - 20;
    wrapperHeight = window.innerHeight - 20;
  }, false);

  const gridListGate = items.map((item) => {
    if (item.group === 'gate') {
      const {id, type, x, y, width, height, pin} = item;
      const elementSelectStatus = (selectElementID === id)

      return (
        <div className="screen-grid-element" key={id}>
          <LogicGate
            id={id}
            logic={type}
            x={x} y={y}
            width={width}
            height={height}
            pin={pin}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={selectElementID}
            selectStatus={elementSelectStatus}
            handleSetNewCord={handleSetNewCord}
          />
        </div>
      );
    }
  });

  const gridListLine = items.map((item) => {
    if (item.group === 'line') {
      const {id, type, x, y, pin, width, height, turn, active} = item;
      const elementSelectStatus = (selectElementID === id)

      return (
        <div className="screen-grid-element" key={id}>
          <LogicLine
            id={id}
            logic={type}
            x={x} y={y}
            width={width}
            height={height}
            turn={turn}
            active={active}
            pin={pin}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={selectElementID}
            selectStatus={elementSelectStatus}
            handleSetNewCord={handleSetNewCord}
          />
        </div>
      );
    }
  })

  const gridLayoutText = items.map((item) => {
    if (item.group === 'text') {
      const {id, type, x, y, pin, content, turn} = item;
      const elementSelectStatus = (selectElementID === id)

      return (
        <div className="screen-grid-element" key={id}>
          <LayoutText
            id={id}
            logic={type}
            x={x} y={y}
            content={content}
            pin={pin}
            turn={turn}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={selectElementID}
            selectStatus={elementSelectStatus}
            handleSetNewCord={handleSetNewCord}
          />
        </div>
      );
    }
  })

  const style = {
    width: `${widthGrid}px`,
    height: `${heightGrid}px`
  }

  return (
    <div id="screen-grid-wrapper" style={{width: wrapperWidth, height: wrapperHeight}}>
      <div id="screen-grid" style={style}>
        <div id="grid-background"
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
  selectElementID: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
  handleSetNewCord: PropTypes.func.isRequired,

  widthGrid: PropTypes.any.isRequired,
  heightGrid: PropTypes.any.isRequired
};

export default ScreenGrid;
