import React, { Component } from 'react';
import './App.css';
import { Route, NavLink,HashRouter, BrowserRouter } from 'react-router-dom';
import Start from "./Start";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
import {StepWizard, Step} from 'react-step-wizard';

import Q1_2_1 from "./Q1_2_1";
class App extends Component {
  constructor (props) {
      super(props)
      this.state = {
    show: true};
    this.toggleT = this.toggleT.bind(this)
    this.SetTrue = this.SetTrue.bind(this)
  }
  toggleT = () =>{
    this.setState({show: !this.state.show});
  }
SetTrue = () => {
    this.setState({show: true});
  }
    render() {
      var show = {
        display: this.state.show ? "block" : "none"
      };

      var hidden = {
        display: this.state.show ? "none" : "block"
      }

    return (

         <BrowserRouter>
      <Route>
        <div >
        <h2 style={ show }>this.state.show = true</h2>
      <h2 style={ hidden }>this.state.show = false</h2>
     <h1 className = "titlebg" >
                  <img className = "osuimg" src="https://dl.boxcloud.com/api/2.0/internal_files/167857248938/versions/178236347306/representations/png_paged_2048x2048/content/1.png?access_token=1!d0AAG7hAPUsjMrtdWiPebK4a1-WO5jv2D6zEaLcXKF-N_lMpznRkSoux_B__x22D61nZZlXSQ8wiCrWL_a3bmH_Tfxfjoi6XyObIvVWR2sVzaFMIjeqauWRnhBSL22mUSaUHEGX_z15GQNl_I1A6GagBYOaqALmRlkCbKxLiJo1rm7zzNG9jYL3Z_JXqQOso_oaxpViTrL9qn71flkkqczQx7XibI6CAT-F7LynCo8il8IQzxAwM6X8lrt9oaGQI4aV2E2NNukBCzUxpm45DzwqveQ5g3xUxs_5wIXlPY8a63ofQ_QNPXylFtpn7edeEhiwt-WTulRtPuWkbHuG6TyRAkQPDuHDM4R_kqqNGwQ5pxblpZlfdjZOACrEABy5bO-4ZvtVUn6sSbsN41kh92I2CtnjvhnEo01lR-8IZ2MwOL2QMqCSBX4pSLIBwtLkbvvyg6_kAIwYP8Yee29QF&shared_link=https%3A%2F%2Foregonstate.app.box.com%2Fs%2Fef2r8wr5ptzaomck0s6e28gaqw5zjh7q&box_client_name=box-content-preview&box_client_version=1.46.0" alt="osu" width="60" height="60"></img> DC Wizard <NavLink to="/"><Button className = "Restart" onClick={this.SetTrue}>Restart</Button></NavLink></h1>


          <ul style={show} className="header">
          <h2>Confused about what to choose?</h2>
          <p>Click below to start</p>


            <li><NavLink to="/Q1_1"><Button onClick={this.toggleT.bind(this)}>Start</Button></NavLink></li>

          </ul>
          <div className="content">
          <Route exact path="/Q1_1" component={Start}/>


          </div>
        </div>
        </Route>
           </BrowserRouter>
    );
  }
}


export default App;
