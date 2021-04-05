import React from 'react';
import './logic-gate.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LogicGate(props) {
  const {
    id, logic, x, y,
  } = props;

  return (
    <div className="position-absolute logic-gate-container" key={id}>
      <Draggable defaultPosition={{ x, y }} handle=".handle">
        <div className="logic-gate">
          <div className="circle circle-left" />
          <div className="handle" />
          <select className="form-select logic-gate-select" defaultValue={logic}>
            <option value="OR">OR</option>
            <option value="AND">AND</option>
            <option value="AND">NOT</option>
            <option value="AND">NOR</option>
            <option value="NAND">NAND</option>
            <option value="XOR">XOR</option>
            <option value="XNOR">XNOR</option>
          </select>
          <div className="circle circle-right" />
        </div>
      </Draggable>
    </div>
  );
}

LogicGate.propTypes = {
  id: PropTypes.number.isRequired,
  logic: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default LogicGate;
