import React from 'react';
import './text-element.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function TextElement(props) {
  const { id } = props;

  return (
    <div className="position-absolute" key={id} data-bs-toggle="tooltip" data-bs-placement="bottom">
      <Draggable defaultPosition={{ x: 20, y: 10 }} handle=".handle">
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
};

export default TextElement;
