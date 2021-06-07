import React from 'react';
import './grid-gate.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function GridGate(props) {
  const {item, onClickSetSelectElementID, selectStatus, handleSetNewCord} = props;
  const {id, content, x, y, width, height, pin, backgroundColor, textColor, status} = item;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';

  const style = {
    width: width + 'px',
    height: height + 'px'
  }

  const contentStyle = {
    background: backgroundColor,
    color: textColor,
  }

  return (
    <div className="grid-gate-container" key={id}
         onClick={() => { onClickSetSelectElementID(id); }}
         onTouchStart={() => { onClickSetSelectElementID(id); }}
    >
      <Draggable position={{x: Number(x), y: Number(y)}} disabled={pin} onStop={(event) => {handleSetNewCord(id, event, {width, height})}}>
        <div className={`grid-gate${LogicElementSelect}${LogicElementPin}`} style={style}>
          <div className="grid-gate-content" style={contentStyle}>
            <span>{content}</span>
          </div>

          <div className={`grid-gate-output ${(status)? "active" : ""}`}/>
        </div>
      </Draggable>
    </div>
  )
}

GridGate.propTypes = {
  item: PropTypes.object.isRequired,

  selectStatus: PropTypes.bool.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
  handleSetNewCord: PropTypes.func.isRequired
};

export default GridGate;
