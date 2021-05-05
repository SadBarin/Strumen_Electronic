import React from 'react';
import './popup-info.css';
import PropTypes from 'prop-types';

import PopupWrapper from '../popup-wrapper';

function PopupInfo({ hidden, closePopup }) {
  return (
    <PopupWrapper closePopup={closePopup} hidden={hidden} title="Таблицы истинности">
      <div className="popup-info-content">
        <div>
          <h3>Логическое ИЛИ</h3>
          <table>
            <thead>
            <tr>
              <th colSpan="2"><b>Input</b></th>
              <th><b>Output</b></th>
            </tr>
            </thead>

            <tbody>
              <tr>
                <td>A</td>
                <td>B</td>
                <td align="center">A OR B</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td align="center">0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td align="center">1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0</td>
                <td align="center">1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td align="center">1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3>Логическое И</h3>
          <table>
            <thead>
            <tr>
              <th colSpan="2"><b>Input</b></th>
              <th><b>Output</b>
              </th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>B</td>
                <td align="center">A AND B</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td align="center">0</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td align="center">0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0</td>
                <td align="center">0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td align="center">1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3>Исключающее ИЛИ</h3>
          <table>
            <thead>
            <tr>
              <th colSpan="2"><b>Input</b></th>
              <th><b>Output</b>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>A</td>
              <td>B</td>
              <td align="center">A XOR B</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td align="center">0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
              <td align="center">1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td align="center">1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td align="center">0</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3>Исключающее ИЛИ-НЕ</h3>
          <table>
            <thead>
            <tr>
              <th colSpan="2"><b>Input</b></th>
              <th><b>Output</b>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>A</td>
              <td>B</td>
              <td align="center">A XNOR B</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td align="center">1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td align="center">0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
              <td align="center">0</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td align="center">1</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PopupWrapper>
  );
}

PopupInfo.propTypes = {
  hidden: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default PopupInfo;
