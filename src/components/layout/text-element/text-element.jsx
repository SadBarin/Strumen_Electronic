import React from 'react';
import './text-element.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function TextElement(props) {
  const { id, x, y } = props;

  return (
    <div className="position-absolute" key={id} data-bs-toggle="tooltip" data-bs-placement="bottom">
      <Draggable defaultPosition={{ x, y }} handle=".handle">
        <div className="text-element">
          <div className="handle" />
          <input type="text" className="text-element-input" maxLength={18} />
        </div>
      </Draggable>
    </div>
  );
}

TextElement.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default TextElement;
