import React from 'react';
import PropTypes from 'prop-types';
import './additional-list.css';

import IconButton from '../../../../button-icon';

function AdditionalList({
  listClass,
  display,
  onClickRemove,
  onClickClone,
  onClickSettings,
  pinStatus,
  onClickPin
}) {
  return (
    <div className={`list list-${listClass} list-additional ${(display)? 'hidden' : ''}`}>
      <IconButton icon="bi-trash2" onClick={onClickRemove}/>
      <IconButton icon="bi-layers" onClick={onClickClone}/>
      <IconButton icon="bi-wrench" onClick={onClickSettings}/>
      <IconButton icon="bi-pin" active={pinStatus} onClick={onClickPin}/>
    </div>
  );
}

AdditionalList.defaultProps = {
  display: false,
  pinStatus: false
};

AdditionalList.propTypes = {
  listClass: PropTypes.string.isRequired,
  display: PropTypes.bool,
  onClickRemove: PropTypes.func.isRequired,
  onClickClone: PropTypes.func.isRequired,
  onClickSettings: PropTypes.func.isRequired,
  pinStatus: PropTypes.bool,
  onClickPin: PropTypes.func.isRequired
};

export default AdditionalList;
