import React from 'react';
import './screen-info.css';
import PropTypes from "prop-types";

import packageApp from '../../../../../package.json'

function ScreenInfo({hiddenDevInfo, grid}) {
  return (
    <div id="screen-info" className={`${(hiddenDevInfo) ? "hidden" : ""}`}>
      <p>{`ID: ${grid.selectElementID}`}</p>
      <p>{`Количество элементов: ${grid.list.length}`}</p>
      <p>{`Версия: ${packageApp.version}`}</p>
      <p>{`Ширина Окна: ${window.screen.availWidth}`}</p>
      <p>{`Высота Окна: ${window.screen.availHeight}`}</p>
      <p>{`Ширина Листа: ${grid.width}`}</p>
      <p>{`Высота Листа: ${grid.height}`}</p>
    </div>
  );
}

ScreenInfo.propTypes = {
  hiddenDevInfo: PropTypes.bool.isRequired,
  grid: PropTypes.object.isRequired
};

export default ScreenInfo;
