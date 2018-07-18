import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter } from 'react-router-dom';
import Done1 from "./Done1";
import Q1_2 from "./Q1_2";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
class Q1_2_2_yes extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this); // you are missing this line

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  handleBack() {
    this.props.history.push('/Q1_2_2');
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
In this case, to know if you can use, reuse, modify or redistribute the dataset you will have to do a fair use assessment. To evaluate if your use is fair you must consider how each of the four factors from 17 U.S. Code §107 applies to your specific context. These factors are (1) the purpose of the use (2) the nature of the copyrighted material (3) the amount copied and (4) the effect on the market for the original. The OSU copyright page https://guides.library.oregonstate.edu/copyright/fairuse has information and resources to help you make a good fair use assesment.
</h4>
<div className="navigationButtonsLeft">
     <Button onClick={this.handleBack} bsStyle="success">&lt; Back</Button>
   </div>



   </div>

  );
  }
}

export default Q1_2_2_yes;
