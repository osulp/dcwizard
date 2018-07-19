import React, { Component } from 'react';
import './App.css';
import { Route, NavLink,HashRouter, BrowserRouter,Switch, Link } from 'react-router-dom';
import Start from "./Start";
import Home from "./Home";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
import {StepWizard, Step} from 'react-step-wizard';
class Header extends Component {
  constructor (props) {
  super(props);
  this.handleBack = this.handleBack.bind(this); // you are missing this line

};
  handleBack() {
    this.props.history.push('/');
  }
  
  render() {


  return (
    <div>
<h1 className = "titlebg" >
             <img className = "osuimg" src="https://osulibrary.oregonstate.edu/sites/all/themes/doug-fir-d7-library/logo.svg" alt="OSU_vertical_1_C_B" alt="osu" width="250" height="60"></img></h1>

</div>
)
}
}
export default Header;
