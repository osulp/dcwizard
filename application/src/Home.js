import React, { Component } from 'react';
import './App.css';
import { Route, NavLink,HashRouter, BrowserRouter,Switch } from 'react-router-dom';
import Start from "./Start";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
import {StepWizard, Step} from 'react-step-wizard';

class Home extends Component {
    constructor  (props) {
      super(props);
        }
        render() {


        return (


            <div >


              <ul  className="header">
              <h2>Confused about what license you need?</h2>
              <p>Click below to start</p>



              </ul>

            </div>

        );
      }
    }
export default Home;
