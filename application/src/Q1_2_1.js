import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter } from 'react-router-dom';
import Done1 from "./Done1";
import Q1_2 from "./Q1_2";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
class Q1_2_1 extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this); // you are missing this line

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  handleBack() {
    this.props.history.push('/Q1_2');
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
Does the license permit you to do what you want to do with the data?
</h1>
<div className="navigationButtonsLeft">
     <Button onClick={this.handleBack} bsStyle="success">&lt; Back</Button>
   </div>
<div>
  <Button color="primary" onClick={this.toggle}>More Info</Button>
  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    <ModalHeader toggle={this.toggle}>  Datasets </ModalHeader>
    <ModalBody>
Many datasets have Creative Commons licenses that explain how the dataset may be used.  </ModalBody>
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

export default Q1_2_1;
