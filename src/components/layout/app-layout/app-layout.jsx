/*eslint-disable*/

import React from 'react';
import './app-layout.css';
import PropTypes from 'prop-types';

import LogicGate from '../logic-gate';

function AppLayout(props) {
  const { items, onClickSetSelectElementID, selectElementID } = props;

  const layoutList = items.map((item) => {
    const {
      id, type, x, y, pin
    } = item;

    const elementSelectStatus = (selectElementID === id)

    return (
      <div className="logic-gate-container" key={id}>
        <LogicGate
          id={id}
          logic={type}
          x={x}
          y={y}
          pin={pin}
          onClickSetSelectElementID={onClickSetSelectElementID}
          selectElementID={selectElementID}
          selectStatus={elementSelectStatus}
        />
      </div>
    );
  });

  return (
    <div className="app-layout">
      <div className="background-layout" onClick={() => onClickSetSelectElementID(-1)} />

      {layoutList}
    </div>
  );
}

AppLayout.propTypes = {
  selectElementID: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
};

export default AppLayout;
