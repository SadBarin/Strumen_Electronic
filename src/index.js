import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.render(
  <App />, document.getElementById('root'),
);

serviceWorkerRegistration.unregister();
