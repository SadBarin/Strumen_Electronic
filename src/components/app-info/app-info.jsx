import React from 'react';
import './app-info.css';
import PropTypes from "prop-types";

function AppInfo({hiddenDevInfo, selectElementID, gridListLength, hiddenPopupSelect, hiddenPopupInfo}) {
  return (
    <div className={`info-element ${(hiddenDevInfo) ? "hidden" : ""}`}>
      <p>{`ID: ${String(selectElementID)}`}</p>
      <p>{`Count Elements: ${String(gridListLength)}`}</p>
      <p>{`Hidden Popup Select: ${String(hiddenPopupSelect)}`}</p>
      <p>{`Hidden Popup Info: ${String(hiddenPopupInfo)}`}</p>
      <p>{`Hidden Dev Info: ${String(hiddenDevInfo)}`}</p>
    </div>
  );
}

AppInfo.propTypes = {
  hiddenDevInfo: PropTypes.bool.isRequired,
  selectElementID: PropTypes.number.isRequired,
  gridListLength: PropTypes.number.isRequired,
  hiddenPopupSelect: PropTypes.bool.isRequired,
  hiddenPopupInfo: PropTypes.bool.isRequired

};

export default AppInfo;
