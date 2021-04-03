import React from 'react';
import PropTypes from 'prop-types';
import './panel-list.css';

import AppIconButton from '../../app-button-icon';

function PanelList({
  display, onClickAdd, activeRemove, onClickChangeRemoveStatus,
}) {
  return (
    <div className={`text-center text-white panel-list d-flex flex-column align-items-center opacity-8${display}`}>
      <AppIconButton icon="bi-patch-plus" onClick={onClickAdd} />
      <AppIconButton icon="bi-patch-minus" onClick={onClickChangeRemoveStatus} propsClass={(activeRemove) ? 'active' : ''} />
      { /* <AppIconButton icon="bi-pin-angle" propsClass="disable" /> */ }
      { /* <AppIconButton icon="bi-card-text" propsClass="disable" /> */ }
      { /* <AppIconButton icon="bi-camera" propsClass="disable" /> */ }
      { /* <AppIconButton icon="bi-info-circle" propsClass="disable" /> */ }
    </div>
  );
}

PanelList.defaultProps = {
  onClickAdd: () => {},
  activeRemove: false,
  onClickChangeRemoveStatus: () => {},
};

PanelList.propTypes = {
  display: PropTypes.string.isRequired,
  onClickAdd: PropTypes.func,
  activeRemove: PropTypes.bool,
  onClickChangeRemoveStatus: PropTypes.func,
};

export default PanelList;
