import React from 'react';
import PropTypes from 'prop-types';
import './panel-list.css';

import IconButton from '../../button-icon';

function PanelList({
  selectElementID, display, onClickAdd, onClickChangeRemoveStatus, onClickToggleHiddenPopupSelect, onClickChangePin, onClickToggleHiddenPopupInfo, onClockHiddenDevStatus
}) {
  return (
    <div className={`panel-list ${display}`}>
      <IconButton icon="bi-plus-circle" onClick={onClickAdd} />
      <IconButton icon="bi-arrow-counterclockwise" onClick={() => window.location.reload()}/>
      <IconButton icon="bi-trash2" onClick={onClickChangeRemoveStatus} propsClass={(selectElementID !== -1) ? '' : 'hidden'} />
      <IconButton icon="bi-wrench" onClick={onClickToggleHiddenPopupSelect} propsClass={(selectElementID !== -1) ? '' : 'hidden'} />
      <IconButton icon="bi-pin" onClick={onClickChangePin} propsClass={(selectElementID !== -1) ? '' : 'hidden'} />
      <IconButton icon="bi-flag" onClick={onClockHiddenDevStatus}/>
      <IconButton icon="bi-info-circle" onClick={onClickToggleHiddenPopupInfo}/>
    </div>
  );
}

PanelList.defaultProps = {
  selectElementID: false,
  onClickAdd: () => {}
};

PanelList.propTypes = {
  selectElementID: PropTypes.any,
  display: PropTypes.string.isRequired,
  onClickAdd: PropTypes.func,
  onClickChangeRemoveStatus: PropTypes.func,
  onClickToggleHiddenPopupSelect: PropTypes.func.isRequired,
  onClickToggleHiddenPopupInfo: PropTypes.func.isRequired,
  onClickChangePin: PropTypes.func.isRequired,
  onClockHiddenDevStatus: PropTypes.func.isRequired
};

export default PanelList;
