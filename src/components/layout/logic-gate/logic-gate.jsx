import React from 'react';
import './logic-gate.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LogicGate(props) {
  const {
    id, logic,
    x, y, pin,
    turn,
    onClickSetSelectElementID,
    selectStatus,
    changeCord
  } = props;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';

  const style = { transform: `rotate(${turn}deg)` }

  function setNewCord(e) {
    const cord = {
      x: e.target.getBoundingClientRect().x - e.target.offsetLeft,
      y: e.target.getBoundingClientRect().y - e.target.offsetTop,
    }

    changeCord(id, cord)
  }

  return (
    <div className="logic-gate-container" key={id}
         onClick={() => { onClickSetSelectElementID(id); }}
         onTouchStart={() => { onClickSetSelectElementID(id); }}
    >

      <Draggable defaultPosition={{ x, y }} position={{x, y}} disabled={pin} onStop={(e) => {setNewCord(e)}}>
        <div className="logic-gate-wrapper">
          <div className={`logic-gate${LogicElementSelect}${LogicElementPin}`} style={style}>
            <div className="logic-gate-content">
              <span>{logic}</span>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

LogicGate.propTypes = {
  selectStatus: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  logic: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
  changeCord: PropTypes.func.isRequired
};

export default LogicGate;
