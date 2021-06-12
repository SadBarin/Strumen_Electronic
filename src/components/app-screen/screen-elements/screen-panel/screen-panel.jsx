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
      removeGridElement,
      toggleGridElementProperty,
      cloneGridElement,
      downloadSaveFile,
      selectElement,

      builderGridElement,

      panelStatuses,
      objectPropertyToggle
    } = this.props;

    return (
      <div id="screen-panel">
        <IconButton icon="bi-list" active={panelVisible} onClick={() => this.handleClickButton()}/>

        <PanelList
          display={panelVisible ? '' : ' panel-hidden'}
          selectElement={selectElement}

          removeGridElement={removeGridElement}
          toggleGridElementProperty={toggleGridElementProperty}
          cloneGridElement={cloneGridElement}
          downloadSaveFile={downloadSaveFile}

          builderGridElement={builderGridElement}

          panelStatuses={panelStatuses}

          objectPropertyToggle={objectPropertyToggle}
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

  toggleGridElementProperty: PropTypes.func.isRequired,
  cloneGridElement: PropTypes.func.isRequired,
  downloadSaveFile: PropTypes.func.isRequired,

  builderGridElement: PropTypes.func.isRequired,

  panelStatuses: PropTypes.object.isRequired,
  objectPropertyToggle: PropTypes.func.isRequired
};

export default ScreenPanel;
