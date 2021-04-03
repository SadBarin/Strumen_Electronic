import React from 'react';
import './panel-list.css';

import AppIconButton from "../../app-button-icon";

function MenuList (props) {
  return (
    <div className={"text-center text-white panel-list d-flex flex-column align-items-center opacity-8" + props.display}>
      <AppIconButton icon={'bi-patch-plus'} onClick={props.onClickAdd}/>
      <AppIconButton icon={'bi-patch-minus'} onClick={props.onClickChangeRemoveStatus} propsClass={(props.activeRemove) ? 'active' : ''}/>
      <AppIconButton icon={'bi-pin-angle'} propsClass={'disable'}/>
      <AppIconButton icon={'bi-card-text'} propsClass={'disable'}/>
      <AppIconButton icon={'bi-camera'} propsClass={'disable'}/>
      <AppIconButton icon={'bi-info-circle'} propsClass={'disable'}/>
    </div>
  )
}

export default MenuList