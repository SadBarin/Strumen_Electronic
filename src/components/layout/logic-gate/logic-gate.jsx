import React from 'react';
import './logic-gate.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LogicGate(props) {
  const {
    id, logic,
    x, y, pin,
    onClickSetSelectElementID,
    selectStatus
  } = props;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';

  return (
    <div className="logic-gate-container" key={id} onClick={() => { onClickSetSelectElementID(id); }}>

      <Draggable grid={[10, 10]} defaultPosition={{ x, y }} disabled={pin}>
        <div className={`logic-gate${LogicElementSelect}${LogicElementPin}`}>
          <div className="logic-gate-content">
            <span>{logic}</span>
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
};

export default LogicGate;
