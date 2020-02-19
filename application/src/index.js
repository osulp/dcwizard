import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter } from 'react-router-dom';


import App from './App';


//import registerServiceWorker from './registerServiceWorker';
import './bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
<div>



<BrowserRouter>
<App className="fullback" />
</BrowserRouter>
</div>,
  document.getElementById("root")
);
