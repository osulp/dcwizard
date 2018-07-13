import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter,BrowserHistory,history } from 'react-router-dom';
import Q1_2 from "./Q1_2";
import Q1_1_2 from "./Q1_1_2";

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
      modal: false,
      chosen: null
    };

    this.toggle = this.toggle.bind(this);
    this.button_chosen = this.button_chosen.bind(this);

    this.SetStart = this.SetStart.bind(this)

  }
  traverser(){
  if(window.location.pathname == '/Q1_1/Q1_2'){
    return(
    <h1 className ="title"><a className = "link" href="/">
    » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
    Answer: Start</span></a> <a className = "link" href="/Q1_1">
    » Q1_1 <span className="tooltiptext">Previous Question: Is the data publicly available?
    Answer: Yes</span></a> <a className = "link" href="/Q1_2">
    » Q1_2</a>
    </h1>


  )
  }
   else if(window.location.pathname == '/Q1_1/Q1_1_2'){
    return(
      <h1 className ="title"><a className = "link" href="/">
      » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
      Answer: Start</span></a> <a className = "link" href="/Q1_1">
      » Q1_1<span className="tooltiptext">Previous Question: Is the data publicly available?
      Answer: No</span> </a> <a className = "link" href="/Q1_1_2">
      » Q1_1_2 </a>
      </h1>


  )
  }
}

  handleBack() {



this.props.history.push('/');
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
  render() {
    return (
      <BrowserRouter>

<Route>

    <div>

  <h1>Is the data publicly available?</h1>
  <div className="navigationButtonsLeft">

        <NavLink to='/'><Button onClick={this.handleBack}  bsStyle="success">&lt; Back</Button></NavLink>

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
     <ul className="header">



  <li><NavLink to="/Q1_1/Q1_2"><Button style={{background: this.chosen_color(0)}} onClick={() => {this.button_chosen(0)}} >Yes</Button></NavLink></li>
<li><NavLink to="/Q1_1/Q1_1_2"><Button style={{background: this.chosen_color(1)}} onClick={() => {this.button_chosen(1)}} >No</Button></NavLink></li>
</ul>
{this.traverser()}
<div className="content">
<Route path="/Q1_1/Q1_2" component={Q1_2}/>
<Route path="/Q1_1/Q1_1_2" component={Q1_1_2}/>

</div>
   </div>

{/*.
  <ul className="header">


    <li><NavLink to="/Q1_1/Q1_2">Yes</NavLink></li>
 <li><NavLink to="/Q1_1/Q1_1_2">No</NavLink></li>
  </ul>
  <div className="content">
  <Route exact path="/Q1_1/Q1_2" component={Q1_2}/>

  </div>*/}
      </div>
</Route>
</BrowserRouter>

    );
  }
}

export default Start;
