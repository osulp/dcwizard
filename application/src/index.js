import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link, HashRouter, NavLink } from "react-router-dom";
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './bootstrap/dist/css/bootstrap.min.css';

import Start from "./Start";
ReactDOM.render(

  <App/>,
  document.getElementById("root")
);
