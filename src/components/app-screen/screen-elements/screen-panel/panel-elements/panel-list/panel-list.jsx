import React from 'react';
import PropTypes from 'prop-types';
import './panel-list.css';

import IconButton from '../../../button-icon';

function PanelList({
 display,
 selectElement,

 onClickChangeRemoveStatus,
 onClickChangePin,
 onClickCloneElement,
 onClickHiddenDevStatus,
 onClickToggleHiddenListAdd,
 onClickSave,

 onClickToggleHiddenPopupGridSettings,
 onClickToggleHiddenPopupInfo,
 onClickToggleHiddenPopupGate,
 onClickToggleHiddenPopupLine,
 onClickToggleHiddenPopupText,
 onClickToggleHiddenPopupUpload,

 onClickAddGate,
 onClickAddLine,
 onClickAddText,

 hiddenDevInfo,
 hiddenListAdd,
 hiddenListGate,
 hiddenListLine,
 hiddenListText
}) {
  return (
    <div className={`panel-list ${display}`}>
      <div className="list-main list">
        <IconButton icon="bi-plus-circle" active={!hiddenListAdd} onClick={onClickToggleHiddenListAdd}/>
        <IconButton icon="bi-gear" onClick={onClickToggleHiddenPopupGridSettings}/>
        <IconButton icon="bi-save" onClick={onClickSave}/>
        <IconButton icon="bi-upload" onClick={onClickToggleHiddenPopupUpload}/>
        <IconButton icon="bi-flag" active={!hiddenDevInfo} onClick={onClickHiddenDevStatus}/>

        <div className={`list-flag list list-additional ${(hiddenDevInfo)? 'hidden' : ''}`}>
          <IconButton icon="bi-arrow-counterclockwise" onClick={() => window.location.reload()}/>
          <IconButton icon="bi-info-circle" onClick={onClickToggleHiddenPopupInfo}/>
        </div>
      </div>

      <div className={`list-add list list-additional ${(hiddenListAdd)? 'hidden' : ''}`}>
        <IconButton icon="bi-file-binary" onClick={onClickAddGate}/>
        <IconButton icon="bi-bezier2" onClick={onClickAddLine}/>
        <IconButton icon="bi-chat-square-text" onClick={onClickAddText}/>
      </div>

      <div className={`list-logic-gates list list-additional ${(hiddenListGate)? 'hidden' : ''}`}>
        <IconButton icon="bi-trash2" onClick={onClickChangeRemoveStatus}/>
        <IconButton icon="bi-layers" onClick={onClickCloneElement}/>
        <IconButton icon="bi-wrench" onClick={onClickToggleHiddenPopupGate}/>
        <IconButton icon="bi-pin" active={selectElement.pin} onClick={onClickChangePin}/>
      </div>

      <div className={`list-logic-line list list-additional ${(hiddenListLine)? 'hidden' : ''}`}>
        <IconButton icon="bi-trash2" onClick={onClickChangeRemoveStatus}/>
        <IconButton icon="bi-layers" onClick={onClickCloneElement}/>
        <IconButton icon="bi-wrench" onClick={onClickToggleHiddenPopupLine}/>
        <IconButton icon="bi-pin" active={selectElement.pin} onClick={onClickChangePin}/>
      </div>

      <div className={`list-logic-text list list-additional ${(hiddenListText)? 'hidden' : ''}`}>
        <IconButton icon="bi-trash2" onClick={onClickChangeRemoveStatus}/>
        <IconButton icon="bi-layers" onClick={onClickCloneElement}/>
        <IconButton icon="bi-wrench" onClick={onClickToggleHiddenPopupText}/>
        <IconButton icon="bi-pin" active={selectElement.pin} onClick={onClickChangePin}/>
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
  selectElement: PropTypes.any.isRequired,

  onClickToggleHiddenListAdd: PropTypes.func.isRequired,
  onClickChangeRemoveStatus: PropTypes.func,
  onClickChangePin: PropTypes.func.isRequired,
  onClickCloneElement: PropTypes.func.isRequired,
  onClickHiddenDevStatus: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,

  onClickToggleHiddenPopupGridSettings: PropTypes.func.isRequired,
  onClickToggleHiddenPopupInfo: PropTypes.func.isRequired,
  onClickToggleHiddenPopupGate: PropTypes.func.isRequired,
  onClickToggleHiddenPopupLine: PropTypes.func.isRequired,
  onClickToggleHiddenPopupText: PropTypes.func.isRequired,
  onClickToggleHiddenPopupUpload: PropTypes.func.isRequired,

  onClickAddGate: PropTypes.func,
  onClickAddLine: PropTypes.func,
  onClickAddText: PropTypes.func,

  hiddenDevInfo: PropTypes.bool.isRequired,
  hiddenListAdd: PropTypes.bool.isRequired,
  hiddenListGate: PropTypes.bool.isRequired,
  hiddenListLine: PropTypes.bool.isRequired,
  hiddenListText: PropTypes.bool.isRequired
};

export default PanelList;
