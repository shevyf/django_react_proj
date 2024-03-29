import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "mobx-react";
import store from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { BrowserAgent } from '@newrelic/browser-agent/src/loaders/browser-agent';

// NR browser agent options
const options = {
  init: {
        //  distributed_tracing:{enabled:true,cors_use_newrelic_header:false,cors_use_tracecontext_headers:false,allowed_origins:['https://d1125yjrl6c5i2.cloudfront.net']},
	  distributed_tracing:{enabled:true},
	  privacy:{cookies_enabled:true},
	  proxy:{beacon: "d1125yjrl6c5i2.cloudfront.net"}
  }, // NREUM.init
  info: {beacon:"bam.eu01.nr-data.net",errorBeacon:"bam.eu01.nr-data.net",licenseKey:"NRJS-c144e1466ea45ab20e7",applicationID:"535881608",sa:1}, // NREUM.info
  loader_config: {accountID:"3659611",trustKey:"3659611",agentID:"535881608",licenseKey:"NRJS-c144e1466ea45ab20e7",applicationID:"535881608"} // NREUM.loader_config
};

new BrowserAgent(options);

const stores = {
  store
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
