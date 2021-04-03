import React from 'react';
import './app-draggable.css';
import Draggable from 'react-draggable';

export default function AppDraggable(props) {
  return (
    <div className='position-absolute' key={props.id} data-bs-toggle="tooltip" data-bs-placement="bottom">
      <Draggable defaultPosition={{x: 10, y: 10}} handle=".handle">
        <div className="app-draggable">
          <div className='circle circle-left'/>
          <div className='handle'/>
          <select className='form-select'>
            <option value='OR'>OR</option>
            <option value='AND'>AND</option>
          </select>
          <div className='circle circle-right'/>
        </div>
      </Draggable>
    </div>
  )
}