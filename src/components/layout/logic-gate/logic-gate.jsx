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
    handleSetNewCord
  } = props;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';

  const style = { transform: `rotate(${turn}deg)` }

  return (
    <div className="logic-gate-container" key={id}
         onClick={() => { onClickSetSelectElementID(id); }}
         onTouchStart={() => { onClickSetSelectElementID(id); }}
    >

      <Draggable position={{x, y}} disabled={pin} onStop={(event) => {handleSetNewCord(id, event, {width: 100, height: 60})}}>
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
  handleSetNewCord: PropTypes.func.isRequired
};

export default LogicGate;
