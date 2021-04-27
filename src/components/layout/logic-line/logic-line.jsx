import React from 'react';
import './logic-line.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LogicLine(props) {
  const {
    id,
    x, y, pin,
    selectStatus
  } = props;

  const LogicElementSelect = (selectStatus) ? ' active' : '';
  const LogicElementPin = (pin) ? ' pin' : '';

  return (
    <div className="logic-line-container" key={id}>

      <Draggable grid={[10, 10]} defaultPosition={{ x, y }} disabled={pin}>
        <div className={`logic-line${LogicElementSelect}${LogicElementPin}`}/>
      </Draggable>
    </div>
  );
}

LogicLine.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default LogicLine;
