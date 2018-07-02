import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter } from 'react-router-dom';
import Done1 from "./Done1";

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


<ul className="header">



 <li><NavLink to="/Q1_1/Q1_2/Q1_2_1/Done">Yes</NavLink></li>
<li><NavLink to="/Q1_1/Q1_2/Q1_2_1/Q1_2_1_1">No</NavLink></li>
</ul>
<div className="content">
<Route exact path="/Q1_1/Q1_2/Q1_2_1/Done" component={Done1}/>

</div>
   </div>
           </Route>
              </BrowserRouter>
  );
  }
}

export default Q1_2_1;
