import React from 'react';
import PropTypes from 'prop-types';
import './panel-list.css';

import IconButton from '../../../button-icon';
import AdditionalList from "./additional-list";

function PanelList({
 display,
 selectElement,

 onClickChangeRemoveStatus,
 onClickChangePin,
 onClickCloneElement,
 onClickSave,

 onClickAddGate,
 onClickAddLine,
 onClickAddText,

 panelStatuses,
 objectPropertyToggle,
 propertyToggle
}) {
  function toggleStatus(key) {
    objectPropertyToggle('panelStatuses', key)
  }

  return (
    <div className={`panel-list ${display}`}>
      <div className="list-main list">
        <IconButton icon="bi-plus-circle" active={!panelStatuses.add} onClick={() => toggleStatus('add')}/>
        <IconButton icon="bi-gear" onClick={() => propertyToggle('hiddenPopupGridSettings')}/>
        <IconButton icon="bi-save" onClick={onClickSave}/>
        <IconButton icon="bi-upload" onClick={() => propertyToggle('hiddenPopupUpload')}/>
        <IconButton icon="bi-flag" active={!panelStatuses.devInfo} onClick={() => toggleStatus('devInfo')}/>

        <div className={`list-flag list list-additional ${(panelStatuses.devInfo)? 'hidden' : ''}`}>
          <IconButton icon="bi-arrow-counterclockwise" onClick={() => window.location.reload()}/>
          <IconButton icon="bi-info-circle" onClick={() => propertyToggle('hiddenPopupInfo')}/>
        </div>
      </div>

      <div className={`list-add list list-additional ${(panelStatuses.add)? 'hidden' : ''}`}>
        <IconButton icon="bi-file-binary" onClick={onClickAddGate}/>
        <IconButton icon="bi-bezier2" onClick={onClickAddLine}/>
        <IconButton icon="bi-chat-square-text" onClick={onClickAddText}/>
      </div>

      <AdditionalList
        listClass={'gate'}
        display={panelStatuses.gate}
        onClickClone={onClickCloneElement}
        onClickRemove={onClickChangeRemoveStatus}
        pinStatus={selectElement.pin}
        onClickPin={onClickChangePin}
        onClickSettings={() => propertyToggle('hiddenPopupGate')}
      />

      <AdditionalList
        listClass={'line'}
        display={panelStatuses.line}
        onClickClone={onClickCloneElement}
        onClickRemove={onClickChangeRemoveStatus}
        pinStatus={selectElement.pin}
        onClickPin={onClickChangePin}
        onClickSettings={() => propertyToggle('hiddenPopupLine')}
      />

      <AdditionalList
        listClass={'text'}
        display={panelStatuses.text}
        onClickClone={onClickCloneElement}
        onClickRemove={onClickChangeRemoveStatus}
        pinStatus={selectElement.pin}
        onClickPin={onClickChangePin}
        onClickSettings={() => propertyToggle('hiddenPopupText')}
      />
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

  onClickChangeRemoveStatus: PropTypes.func,
  onClickChangePin: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,

  onClickAddGate: PropTypes.func,
  onClickAddLine: PropTypes.func,
  onClickAddText: PropTypes.func,
  onClickAddBox: PropTypes.func,

  panelStatuses: PropTypes.object.isRequired,
  objectPropertyToggle: PropTypes.func.isRequired,
  propertyToggle: PropTypes.func.isRequired,
};

export default PanelList;
