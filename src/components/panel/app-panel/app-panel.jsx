import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app-panel.css';

import PanelList from '../panel-list';
import IconButton from '../../button-icon';

class AppPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelVisible: true,
    };
  }

  handleClickButton() {
    const { panelVisible } = this.state;

    this.setState({
      panelVisible: !panelVisible,
    });
  }

  render() {
    const { panelVisible } = this.state;
    const {
      selectElementID, onClickChangeRemoveStatus, onClickAdd, onClickToggleHiddenPopupSelect,
    } = this.props;

    return (
      <div className="panel">
        <IconButton icon="bi-list" onClick={() => this.handleClickButton()} />

        <PanelList
          selectElementID={selectElementID}
          onClickAdd={onClickAdd}
          onClickChangeRemoveStatus={onClickChangeRemoveStatus}
          onClickToggleHiddenPopupSelect={onClickToggleHiddenPopupSelect}
          display={panelVisible ? '' : ' panel-hidden'}
        />
      </div>
    );
  }
}

AppPanel.defaultProps = {
  selectElementID: false,
  onClickChangeRemoveStatus: () => {},
  onClickAdd: () => {},
};

AppPanel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types,react/no-unused-prop-types
  selectElementID: PropTypes.any,
  onClickChangeRemoveStatus: PropTypes.func,
  onClickToggleHiddenPopupSelect: PropTypes.func.isRequired,
  onClickAdd: PropTypes.func,
};

export default AppPanel;
