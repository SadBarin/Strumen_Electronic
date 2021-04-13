/*eslint-disable*/

import React from 'react';
import './app-layout.css';
import PropTypes from 'prop-types';

import LogicGate from '../logic-gate';

function AppLayout(props) {
  const { items, onClickSetSelectElementID } = props;

  const layoutList = items.map((item) => {
    const {
      id, type, x, y,
    } = item;

    return (
      <div className="position-absolute" key={id}>
        <LogicGate
          id={id}
          logic={type}
          x={x}
          y={y}
          onClickSetSelectElementID={onClickSetSelectElementID}
        />
      </div>
    );
  });

  return (
    <div className="app-layout position-relative">
      <div className="background-layout" onClick={() => onClickSetSelectElementID(null)} />

      {layoutList}
    </div>
  );
}

AppLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
};

export default AppLayout;
