import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter } from 'react-router-dom';
import Done1 from "./Done1";
import Q1_2 from "./Q1_2";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
class Q1_1_2_yes extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this); // you are missing this line

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  handleBack() {
    this.props.history.push('/Q1_1_2');
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (

 <div>
<h4>
The Data Sharing Agreement or written document should have all the information you need to  decide what you can do with the dataset. If it does not, go back and answer no.
</h4>
<div className="navigationButtonsLeft">
     <Button onClick={this.handleBack} bsStyle="success">&lt; Back</Button>
   </div>



   </div>

  );
  }
}

export default Q1_1_2_yes;
