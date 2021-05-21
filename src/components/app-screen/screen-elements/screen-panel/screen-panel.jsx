import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './screen-panel.css';

import PanelList from './panel-elements/panel-list';
import IconButton from '../button-icon';

class ScreenPanel extends Component {
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
      onClickChangePin,
      onClickCloneElement,
      onClickHiddenDevStatus,
      onClickToggleHiddenListAdd,
      onClickSave,
      selectElement,

      onClickToggleHiddenPopupInfo,
      onClickToggleHiddenPopupGate,
      onClickToggleHiddenPopupLine,
      onClickToggleHiddenPopupText,
      onClickToggleHiddenPopupUpload,
      onClickToggleHiddenPopupGridSettings,

      onClickAddGate,
      onClickAddLine,
      onClickAddText,
      onClickAddBox,

      hiddenDevInfo,
      hiddenListAdd,
      hiddenListGate,
      hiddenListLine,
      hiddenListText,
      hiddenListBox,

      onClickIsCollide
    } = this.props;

    return (
      <div id="screen-panel">
        <IconButton icon="bi-list" active={panelVisible} onClick={() => this.handleClickButton()}/>

        <PanelList
          display={panelVisible ? '' : ' panel-hidden'}
          selectElement={selectElement}

          onClickToggleHiddenListAdd={onClickToggleHiddenListAdd}
          onClickChangeRemoveStatus={onClickChangeRemoveStatus}
          onClickChangePin={onClickChangePin}
          onClickCloneElement={onClickCloneElement}
          onClickHiddenDevStatus={onClickHiddenDevStatus}
          onClickSave={onClickSave}

          onClickToggleHiddenPopupInfo={onClickToggleHiddenPopupInfo}
          onClickToggleHiddenPopupGate={onClickToggleHiddenPopupGate}
          onClickToggleHiddenPopupLine={onClickToggleHiddenPopupLine}
          onClickToggleHiddenPopupText={onClickToggleHiddenPopupText}
          onClickToggleHiddenPopupUpload={onClickToggleHiddenPopupUpload}
          onClickToggleHiddenPopupGridSettings={onClickToggleHiddenPopupGridSettings}

          onClickAddGate={onClickAddGate}
          onClickAddLine={onClickAddLine}
          onClickAddText={onClickAddText}
          onClickAddBox={onClickAddBox}

          hiddenDevInfo={hiddenDevInfo}
          hiddenListAdd={hiddenListAdd}
          hiddenListGate={hiddenListGate}
          hiddenListLine={hiddenListLine}
          hiddenListText={hiddenListText}
          hiddenListBox={hiddenListBox}

          onClickIsCollide={onClickIsCollide}
        />
      </div>
    );
  }
}

ScreenPanel.defaultProps = {
  selectElementID: 0,
};

ScreenPanel.propTypes = {
  selectElementID: PropTypes.number,
  selectElement: PropTypes.any.isRequired,

  onClickToggleHiddenListAdd: PropTypes.func.isRequired,
  onClickChangePin: PropTypes.func.isRequired,
  onClickCloneElement: PropTypes.func.isRequired,
  onClickHiddenDevStatus: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,

  onClickToggleHiddenPopupInfo: PropTypes.func.isRequired,
  onClickToggleHiddenPopupGate: PropTypes.func.isRequired,
  onClickToggleHiddenPopupLine: PropTypes.func.isRequired,
  onClickToggleHiddenPopupText: PropTypes.func.isRequired,
  onClickToggleHiddenPopupUpload: PropTypes.func.isRequired,
  onClickToggleHiddenPopupGridSettings: PropTypes.func.isRequired,

  onClickAddGate: PropTypes.func.isRequired,
  onClickAddLine: PropTypes.func.isRequired,
  onClickAddText: PropTypes.func.isRequired,
  onClickAddBox: PropTypes.func.isRequired,

  hiddenDevInfo: PropTypes.bool.isRequired,
  hiddenListAdd: PropTypes.bool.isRequired,
  hiddenListGate: PropTypes.bool.isRequired,
  hiddenListLine: PropTypes.bool.isRequired,
  hiddenListText: PropTypes.bool.isRequired,
  hiddenListBox: PropTypes.bool.isRequired,

  onClickIsCollide: PropTypes.func.isRequired
};

export default ScreenPanel;
