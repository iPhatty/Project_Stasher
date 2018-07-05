import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { injectGlobal } from 'styled-components';

injectGlobal`
body {
  background-color:#dcdde1;
}
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
