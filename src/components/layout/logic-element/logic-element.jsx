import React from 'react';
import './logic-element.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LogicElement(props) {
  const { id, logic } = props;

  return (
    <div className="position-absolute logic-element-container" key={id}>
      <Draggable defaultPosition={{ x: 20, y: 120 }} handle=".handle">
        <div className="logic-element">
          <div className="circle circle-left" />
          <div className="handle" />
          <select className="form-select logic-element-select" defaultValue={logic}>
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

LogicElement.propTypes = {
  id: PropTypes.number.isRequired,
  logic: PropTypes.string.isRequired,
};

export default LogicElement;
