import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import '@blueprintjs/core/lib/css/blueprint.css';
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);