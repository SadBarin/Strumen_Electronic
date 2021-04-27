import React from 'react';
import PropTypes from 'prop-types';
import './panel-list.css';

import IconButton from '../../button-icon';

function PanelList({
 display,

 onClickChangeRemoveStatus,
 onClickChangePin,
 onClockHiddenDevStatus,
 onClickToggleHiddenListAdd,

 onClickToggleHiddenPopupInfo,
 onClickToggleHiddenPopupGate,
 onClickToggleHiddenPopupLine,

 onClickAddGate,
 onClickAddLine,

 hiddenListAdd,
 hiddenListGate,
 hiddenListLine
}) {
  return (
    <div className={`panel-list ${display}`}>
      <div className="list-main list">
        <IconButton icon="bi-plus-circle" onClick={onClickToggleHiddenListAdd}/>
        <IconButton icon="bi-arrow-counterclockwise" onClick={() => window.location.reload()}/>
        <IconButton icon="bi-flag" onClick={onClockHiddenDevStatus}/>
        <IconButton icon="bi-info-circle" onClick={onClickToggleHiddenPopupInfo}/>
      </div>

      <div className={`list-add list list-additional ${(hiddenListAdd)? 'hidden' : ''}`}>
        <IconButton icon="bi-file-binary" onClick={onClickAddGate}/>
        <IconButton icon="bi-bezier2" onClick={onClickAddLine}/>
        <IconButton icon="bi-chat-square-text"/>
      </div>

      <div className={`list-logic-gates list list-additional ${(hiddenListGate)? 'hidden' : ''}`}>
        <IconButton icon="bi-trash2" onClick={onClickChangeRemoveStatus}/>
        <IconButton icon="bi-wrench" onClick={onClickToggleHiddenPopupGate}/>
        <IconButton icon="bi-pin" onClick={onClickChangePin}/>
      </div>

      <div className={`list-logic-line list list-additional ${(hiddenListLine)? 'hidden' : ''}`}>
        <IconButton icon="bi-trash2" onClick={onClickChangeRemoveStatus}/>
        <IconButton icon="bi-wrench" onClick={onClickToggleHiddenPopupLine}/>
        <IconButton icon="bi-pin" onClick={onClickChangePin}/>
      </div>
    </div>
  );
}

PanelList.defaultProps = {
  selectElementID: false,
  onClickAdd: () => {
  }
};

PanelList.propTypes = {
  display: PropTypes.string.isRequired,

  onClickToggleHiddenListAdd: PropTypes.func.isRequired,
  onClickChangeRemoveStatus: PropTypes.func,
  onClickChangePin: PropTypes.func.isRequired,
  onClockHiddenDevStatus: PropTypes.func.isRequired,

  onClickToggleHiddenPopupInfo: PropTypes.func.isRequired,
  onClickToggleHiddenPopupGate: PropTypes.func.isRequired,
  onClickToggleHiddenPopupLine: PropTypes.func.isRequired,

  onClickAddGate: PropTypes.func,
  onClickAddLine: PropTypes.func,

  hiddenListAdd: PropTypes.bool.isRequired,
  hiddenListGate: PropTypes.bool.isRequired,
  hiddenListLine: PropTypes.bool.isRequired
};

export default PanelList;
