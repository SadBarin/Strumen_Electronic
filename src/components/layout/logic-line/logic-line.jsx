import React from 'react';
import './logic-line.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LogicLine(props) {
  const {
    id,
    x, y, pin,
    selectStatus,
    width, height,
    turn,
    onClickSetSelectElementID
  } = props;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';

  const style = {
    width: width + 'px',
    height: height + 'px',
    transform: `rotate(${turn}deg) !important`
  }

  console.log(style)

  return (
    <div className="logic-line-container" key={id} onClick={() => { onClickSetSelectElementID(id); }}>

      <Draggable grid={[10, 10]} defaultPosition={{ x, y }} disabled={pin}>
        <div className={`logic-line${LogicElementSelect}${LogicElementPin}`} style={style}/>
      </Draggable>
    </div>
  );
}

LogicLine.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  turn: PropTypes.number.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired
};

export default LogicLine;
