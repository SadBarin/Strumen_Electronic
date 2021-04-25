import React, {useEffect} from 'react';
import './app-layout.css';
import PropTypes from 'prop-types';

import LogicGate from '../logic-gate';

function AppLayout(props) {
  const { items, onClickSetSelectElementID, selectElementID } = props;

  const layoutList = items.map((item) => {
    const { id, type, x, y, pin } = item;

    const elementSelectStatus = (selectElementID === id)

    return (
      <div className="logic-gate-container" key={id}>
        <LogicGate
          id={id}
          logic={type}
          x={x} y={y}
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
      <canvas className="background-layout" onClick={() => onClickSetSelectElementID(0)} />
      {layoutList}
    </div>
  );
}

AppLayout.propTypes = {
  selectElementID: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired
};

export default AppLayout;
