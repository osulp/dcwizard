import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter } from 'react-router-dom';
import Q1_2 from "./Q1_2";
import './Start.css';
import App from './App';
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';

class Start extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this); // you are missing this line

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);

  }

  handleBack() {
    this.props.SetTrue;
    this.props.history.push('/');
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (

         <BrowserRouter>
        <Route>
    <div>
  <h1>Is the data publicly available?</h1>
  <div className="navigationButtonsLeft">
        <Button  onClick={this.handleBack}  bsStyle="success">&lt; Back</Button>
      </div>
  <div>

     <Button onClick={this.toggle} >  <div className = "buttondiv">More Info</div></Button>
     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
       <ModalHeader toggle={this.toggle}>  What is public data?</ModalHeader>
       <ModalBody>
       A dataset is publicly available when it can be accessed freely. Usually this means that you can find it online and download it. It can also be in a physical location, like a library.
       </ModalBody>
       <ModalFooter>
         <Button color="primary" onClick={this.toggle}>Got it!</Button>{' '}
         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
       </ModalFooter>
     </Modal>
   </div>


  <ul className="header">



    <li><NavLink to="/Q1_1/Q1_2">Yes</NavLink></li>
 <li><NavLink to="/Q1_1/Q1_1_2">No</NavLink></li>
  </ul>
  <div className="content">
  <Route exact path="/Q1_1/Q1_2" component={Q1_2}/>

  </div>
      </div>
              </Route>
                 </BrowserRouter>
    );
  }
}

export default Start;
