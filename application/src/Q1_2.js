import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter } from 'react-router-dom';
import Q1_2_1 from "./Q1_2_1";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
class Q1_2 extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this); // you are missing this line

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  handleBack() {
    this.props.history.push('/Q1_1');
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (

 <div>
<h1>
Does the data have a license?
</h1>
<div className="navigationButtonsLeft">
     <Button onClick={this.handleBack} bsStyle="success">&lt; Back</Button>
   </div>
<div>
  <Button color="primary" onClick={this.toggle}>More Info</Button>
  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    <ModalHeader toggle={this.toggle}>  What is a License?</ModalHeader>
    <ModalBody>
If a license has been applied to a copyrighted work that includes terms of use, you are expected to abide the license and its terms.  A license usually consists of a sentence like "this dataset is licensed under a Creative Commons Attribution license". It may also appear abbreviated like "Licensed as CC-BY".
 </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={this.toggle}>Got it!</Button>{' '}
      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>



   </div>

  );
  }
}

export default Q1_2;
