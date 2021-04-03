import React from 'react';
import './app-draggable.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function AppDraggable(props) {
  const { id } = props;

  return (
    <div className="position-absolute" key={id} data-bs-toggle="tooltip" data-bs-placement="bottom">
      <Draggable defaultPosition={{ x: 10, y: 10 }} handle=".handle">
        <div className="app-draggable">
          <div className="circle circle-left" />
          <div className="handle" />
          <select className="form-select">
            <option value="OR">OR</option>
            <option value="AND">AND</option>
          </select>
          <div className="circle circle-right" />
        </div>
      </Draggable>
    </div>
  );
}

AppDraggable.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AppDraggable;
