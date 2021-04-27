import React, {Component} from 'react';
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
    const {panelVisible} = this.state;

    this.setState({
      panelVisible: !panelVisible,
    });
  }

  render() {
    const {panelVisible} = this.state;
    const {
      onClickChangeRemoveStatus,
      onClickAdd,
      onClickToggleHiddenPopupSelect,
      onClickChangePin,
      onClickToggleHiddenPopupInfo,
      onClockHiddenDevStatus,
      onClickToggleHiddenListAdd,
      hiddenListAdd,
      hiddenListGate
    } = this.props;

    return (
      <div className="panel">
        <IconButton icon="bi-list" onClick={() => this.handleClickButton()}/>

        <PanelList
          onClickAdd={onClickAdd}
          onClickToggleHiddenListAdd={onClickToggleHiddenListAdd}
          onClickChangeRemoveStatus={onClickChangeRemoveStatus}
          onClickToggleHiddenPopupSelect={onClickToggleHiddenPopupSelect}
          onClickChangePin={onClickChangePin}
          onClickToggleHiddenPopupInfo={onClickToggleHiddenPopupInfo}
          onClockHiddenDevStatus={onClockHiddenDevStatus}
          display={panelVisible ? '' : ' panel-hidden'}
          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
        />
      </div>
    );
  }
}

AppPanel.defaultProps = {
  selectElementID: 0,
};

AppPanel.propTypes = {
  selectElementID: PropTypes.number,
  onClickToggleHiddenPopupSelect: PropTypes.func.isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickToggleHiddenListAdd: PropTypes.func.isRequired,
  onClickChangePin: PropTypes.func.isRequired,
  onClickToggleHiddenPopupInfo: PropTypes.func.isRequired,
  onClockHiddenDevStatus: PropTypes.func.isRequired,
  hiddenListAdd: PropTypes.bool.isRequired,
  hiddenListGate: PropTypes.bool.isRequired
};

export default AppPanel;
