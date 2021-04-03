import React from 'react';
import './app-grid.css'
import Draggable from "react-draggable";

import AppIconButton from "../../app-button-icon";
import AppDraggable from "../app-draggable";

export default function AppGrid (props) {
  const gridList = props.items.map((item) => {
    const {id, x, y} = item

    if(!props.statusRemove) {
      return (
        <div className='position-absolute' key={id}>
          <Draggable title={id} defaultPosition={{x, y}}>
            <div className="element-grid d-flex flex-column justify-content-center align-items-center align-content-center text-white">
              <p className="m-0">X: {x}</p>
              <p className="m-0">Y: {y}</p>
            </div>
          </Draggable>
        </div>
      )
    }else {
      return (
        <div className='position-absolute' key={id}>
          <Draggable title={id} defaultPosition={{x, y}}>
            <div className="element-grid d-flex flex-column justify-content-center align-items-center align-content-center text-white">
              <AppIconButton icon='bi-trash' propsClass='bg-transparent' onClick={ () => {props.onClickRemove(id)} }/>
            </div>
          </Draggable>
        </div>
      )
    }
  })

  return (
    <div className="grid">
      <div className="p-5 grid-field position-relative">
        {gridList}

        <AppDraggable/>
      </div>
    </div>
  )
}
