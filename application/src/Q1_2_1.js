import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter } from 'react-router-dom';
import Done1 from "./Done1";
import Q1_2 from "./Q1_2";
import Q1_2_1_1 from "./Q1_2_1_1"
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
class Q1_2_1 extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this); // you are missing this line
    this.button_chosen = this.button_chosen.bind(this);

    this.SetStart = this.SetStart.bind(this)
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  SetStart = () => {
    this.setState({chosen: null});
  }
  button_chosen = (position)=>{
    if(this.state.chosen === position){
      this.setState({chosen: null})
    }
    else{
      this.setState({chosen:position})
    }

  }
  chosen_color = (position) =>{
    if(this.state.chosen === position){
      return "blue";

    }
    return "";
  }
  traverser(){
    if(window.location.pathname == '/Q1_1/Q1_2/Q1_2_1/Done1'){
      return(
      <h1 className ="title"><a className = "link" href="/">
      » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
      Answer: Start</span></a> <a className = "link" href="/Q1_1">
      » Q1_1<span className="tooltiptext">Previous Question: Is the data publicly available?
      Answer: Yes</span> </a> <a className = "link" href="/Q1_2">
      » Q1_2 <span className="tooltiptext">Previous Question: Does the data have a license?
      Answer: Yes</span></a> <a className = "link" href="/Q1_2_1">
      » Q1_2_1 <span className="tooltiptext">Previous Question: Does the license permit you to do what you want to do with the data?
      Answer: Yes</span> </a> <a className = "link" href="/Q1_2_1"> » Done </a>

      </h1>


    )
    }
    else if(window.location.pathname == 'Q1_1/Q1_2/Q1_2_1/Q1_2_1_1'){
      return(
      <h1 className ="title"><a className = "link" href="/">
      » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
      Answer: Start</span></a> <a className = "link" href="/Q1_1">
      » Q1_1<span className="tooltiptext">Previous Question: Is the data publicly available?
      Answer: Yes</span> </a> <a className = "link" href="/Q1_2">
      » Q1_2 <span className="tooltiptext">Previous Question: Does the data have a license?
      Answer: Yes</span></a> <a className = "link" href="/Q1_2_1">
      » Q1_2_1<span className="tooltiptext">Previous Question: Does the license permit you to do what you want to do with the data?
      Answer: No</span></a> <a className = "link" href="/Q1_2_1_1">
      » Q1_2_1_1</a>
      </h1>


    )
    }
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
  <ul className="header">



<li><NavLink to="/Q1_1/Q1_2/Q1_2_1/Done1"><Button style={{background: this.chosen_color(0)}} onClick={() => {this.button_chosen(0)}} >Yes</Button></NavLink></li>
<li><NavLink to="/Q1_1/Q1_2/Q1_2_1/Q1_2_1_1"><Button style={{background: this.chosen_color(1)}} onClick={() => {this.button_chosen(1)}} >No</Button></NavLink></li>
</ul>
{this.traverser()}
<div className="content">
<Route path="/Q1_1/Q1_2/Q1_2_1/Done1" component={Done1}/>
<Route path="/Q1_1/Q1_2/Q1_2_1/Q1_2_1_1" component={Q1_2_1_1}/>

</div>
</div>


   </div>

  );
  }
}

export default Q1_2_1;
