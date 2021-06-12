import React from 'react';
import PropTypes from 'prop-types';
import './panel-list.css';

import IconButton from '../../../button-icon';
import AdditionalList from "./additional-list";

function PanelList({
 display,
 selectElement,

 removeGridElement,
 cloneGridElement,
 downloadSaveFile,

 builderGridElement,

 panelStatuses,
 toggleGridElementProperty,
 objectPropertyToggle
}) {
  const togglePanelStatus = (key) => objectPropertyToggle('panelStatuses', key)
  const togglePopupStatus = (key) => objectPropertyToggle('popupStatuses', key)

  return (
    <div className={`panel-list ${display}`}>
      <div className="list-main list">
        <IconButton icon="bi-plus-circle" active={!panelStatuses.add} onClick={() => togglePanelStatus('add')}/>
        <IconButton icon="bi-gear" onClick={() => togglePopupStatus('gridSettings')}/>
        <IconButton icon="bi-save" onClick={downloadSaveFile}/>
        <IconButton icon="bi-upload" onClick={() => togglePopupStatus('uploadSave')}/>
        <IconButton icon="bi-flag" active={!panelStatuses.devInfo} onClick={() => togglePanelStatus('devInfo')}/>

        <div className={`list-flag list list-additional ${(panelStatuses.devInfo)? 'hidden' : ''}`}>
          <IconButton icon="bi-arrow-counterclockwise" onClick={() => window.location.reload()}/>
          <IconButton icon="bi-info-circle" onClick={() => togglePopupStatus('info')}/>
        </div>
      </div>

      <div className={`list-add list list-additional ${(panelStatuses.add)? 'hidden' : ''}`}>
        <IconButton icon="bi-file-binary" onClick={() => builderGridElement('gate')}/>
        <IconButton icon="bi-bezier2" onClick={() => builderGridElement('line')}/>
        <IconButton icon="bi-chat-square-text" onClick={() => builderGridElement('text')}/>
      </div>

      <AdditionalList
        listClass={'gate'}
        display={panelStatuses.gate}
        onClickClone={cloneGridElement}
        onClickRemove={removeGridElement}
        pinStatus={selectElement.pin}
        onClickPin={() => toggleGridElementProperty('pin')}
        onClickSettings={() => togglePopupStatus('changeGate')}
      />

      <AdditionalList
        listClass={'line'}
        display={panelStatuses.line}
        onClickClone={cloneGridElement}
        onClickRemove={removeGridElement}
        pinStatus={selectElement.pin}
        onClickPin={() => toggleGridElementProperty('pin')}
        onClickSettings={() => togglePopupStatus('changeLine')}
      />

      <AdditionalList
        listClass={'text'}
        display={panelStatuses.text}
        onClickClone={cloneGridElement}
        onClickRemove={removeGridElement}
        pinStatus={selectElement.pin}
        onClickPin={() => toggleGridElementProperty('pin')}
        onClickSettings={() => togglePopupStatus('changeText')}
      />
    </div>
  );
}

PanelList.defaultProps = {
  selectElementID: false,
  onClickAdd: () => {}
};

PanelList.propTypes = {
  display: PropTypes.string.isRequired,
  selectElement: PropTypes.any.isRequired,

  removeGridElement: PropTypes.func,
  toggleGridElementProperty: PropTypes.func.isRequired,
  downloadSaveFile: PropTypes.func.isRequired,

  builderGridElement: PropTypes.func.isRequired,

  panelStatuses: PropTypes.object.isRequired,
  objectPropertyToggle: PropTypes.func.isRequired
};

export default PanelList;
