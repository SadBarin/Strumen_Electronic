import React from 'react';
import './screen-info.css';
import PropTypes from "prop-types";

import packageApp from '../../../../../package.json'

function ScreenInfo({hiddenDevInfo, selectElementID, gridListLength}) {
  return (
    <div id="screen-info" className={`${(hiddenDevInfo) ? "hidden" : ""}`}>
      <p>{`ID: ${String(selectElementID)}`}</p>
      <p>{`Количество элементов: ${String(gridListLength)}`}</p>
      <p>{`Версия: ${String(packageApp.version)}`}</p>
      <p>{`Ширина: ${String(window.screen.availWidth)}`}</p>
      <p>{`Длина: ${String(window.screen.availHeight)}`}</p>
    </div>
  );
}

ScreenInfo.propTypes = {
  hiddenDevInfo: PropTypes.bool.isRequired,
  selectElementID: PropTypes.number.isRequired,
  gridListLength: PropTypes.number.isRequired,
};

export default ScreenInfo;
