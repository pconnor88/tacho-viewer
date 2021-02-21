import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css'
import { FocusStyleManager } from "@blueprintjs/core";

import './index.css';
import App from './pages/App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

FocusStyleManager.onlyShowFocusOnTabs();
