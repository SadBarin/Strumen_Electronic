import React from 'react';
import './panel-list.css';

function MenuList (props) {
  return (
    <div className={"p-1 bg-primary text-center text-white panel-list d-flex flex-column align-items-center " + props.display}>
      <button className="btn text-white list-element" onClick={ props.onClick }>
        <i className={ props.simulation }/>
      </button>

      <button className="btn text-white list-element">
        <i className="bi bi-save"/>
      </button>

      <button className="btn text-white list-element">
        1
      </button>

      <button className="btn text-white list-element">
        0
      </button>

      <button className="btn text-white list-element">
        AND
      </button>

      <button className="btn text-white list-element">
        OR
      </button>

      <button className="btn text-white list-element">
        NOT
      </button>
    </div>
  )
}

export default MenuList