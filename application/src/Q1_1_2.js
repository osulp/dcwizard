import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter } from 'react-router-dom';
import Done1 from "./Done1";
import Q1_2 from "./Q1_2";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
class Q1_1_2 extends Component {
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
Is there any Data Sharing Agreement or similar document that outlines what you can do with the dataset?
</h1>
<div className="navigationButtonsLeft">
     <Button onClick={this.handleBack} bsStyle="success">&lt; Back</Button>
   </div>
<div>
  <Button color="primary" onClick={this.toggle}>More Info</Button>
  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    <ModalHeader toggle={this.toggle}>Data Sharing Agreement</ModalHeader>
    <ModalBody>
If you have a dataset that you have not obtained from a publicly available source (e.g. online), then you probably obtained from a person who gave it to you, or you bought it. Ideally, when the data was handed to you, both of you reached an agreement  about the conditions surrounding this dataset. A written agreement, like a Data Sharing Agreement, is the best case scenario.   </ModalBody>
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

export default Q1_1_2;
