import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'reactstrap';
import { BrowserRouter,BrowserHistory,history } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link, HashRouter, NavLink } from "react-router-dom";
import './index.css';
import App from './App';
import Header from './Header';

import registerServiceWorker from './registerServiceWorker';
import './bootstrap/dist/css/bootstrap.min.css';

import Start from "./Start";
ReactDOM.render(
<div className="fullback">

{/*<Header/>*/}

<BrowserRouter>
<App/>
</BrowserRouter>
</div>,
  document.getElementById("root")
);
