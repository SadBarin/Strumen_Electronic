import React from 'react';
import './panel-list.css';

function MenuList (props) {
  return (
    <div className={"text-center text-white panel-list d-flex flex-column align-items-center " + props.display}>
      <button className="panel-button btn text-white opacity-8" onClick={props.onClickAdd}>
        <i className="bi bi-plus-circle"/>
      </button>

    </div>
  )
}

export default MenuList