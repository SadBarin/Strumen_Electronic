import React from 'react';
import PropTypes from 'prop-types';
import './panel-list.css';

import IconButton from '../../button-icon';

function PanelList({
  selectElementID, display, onClickAdd, onClickChangeRemoveStatus, onClickToggleHiddenPopupSelect,
}) {
  return (
    <div className={`text-center text-white panel-list d-flex flex-column align-items-center opacity-8${display}`}>
      <IconButton icon="bi-plus-circle" onClick={onClickAdd} />
      <IconButton icon="bi-trash2" onClick={onClickChangeRemoveStatus} propsClass={(selectElementID) ? '' : 'hidden'} />
      <IconButton icon="bi-wrench" onClick={onClickToggleHiddenPopupSelect} propsClass={(selectElementID) ? '' : 'hidden'} />

      { /* <AppIconButton icon="bi-pin-angle" propsClass="disable" /> */ }
      { /* <AppIconButton icon="bi-card-text" propsClass="disable" /> */ }
      { /* <AppIconButton icon="bi-camera" propsClass="disable" /> */ }
      { /* <AppIconButton icon="bi-info-circle" propsClass="disable" /> */ }
    </div>
  );
}

PanelList.defaultProps = {
  selectElementID: false,
  onClickAdd: () => {},
  onClickChangeRemoveStatus: () => {},
};

PanelList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  selectElementID: PropTypes.any,
  display: PropTypes.string.isRequired,
  onClickAdd: PropTypes.func,
  onClickChangeRemoveStatus: PropTypes.func,
  onClickToggleHiddenPopupSelect: PropTypes.func.isRequired,
};

export default PanelList;
