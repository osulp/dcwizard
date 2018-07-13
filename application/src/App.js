import React, { Component } from 'react';
import './App.css';
import { Route, NavLink,HashRouter, BrowserRouter,Switch, Link } from 'react-router-dom';
import Start from "./Start";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
import {StepWizard, Step} from 'react-step-wizard';
import Home from "./Home";
import Q1_2 from "./Q1_2";
import Done1 from "./Done1";
import Q1_2_1 from "./Q1_2_1";
import Q1_1_2 from "./Q1_1_2";
import Q1_1_2_yes from "./Q1_1_2_yes";
import Q1_1_2_no from "./Q1_1_2_no";
import Q1_2_2 from "./Q1_2_2";
import Q1_2_2_yes from "./Q1_2_2_yes";
import Q1_2_2_no from "./Q1_2_2_no";
import Q1_2_1_1 from "./Q1_2_1_1";
import Q1_2_1_1_yes from "./Q1_2_1_1_yes";
import Q1_2_1_1_no from "./Q1_2_1_1_no";
class App extends Component {
  constructor () {
      super();
      this.state ={
         qwe: false,
         chosen: null
  }
this.button_chosen = this.button_chosen.bind(this);
this.reset = this.reset.bind(this); // you are missing this line
this.SetStart = this.SetStart.bind(this)
this.select_question = this.select_question.bind(this);
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
  select_question(){
    if (window.location.pathname == Q1_2_2){
        this.setState({
          qwe: true
        });
    }
  }
  reset(){
    window.location.href="/";
  }
Q1_1check(){
  if (window.location.href.indexOf("Q1_1") != -1 || window.location.href.indexOf("Q1_2") != -1 ||window.location.href.indexOf("Q1_2_1") != -1 || window.location.href.indexOf("Done1") != -1){
return(<div/>);
  }
  else{
    return(
  <li><NavLink to="/Q1_1"><Button >Start</Button></NavLink></li>

);
}
}
Q1_2check(){
  {/*the extra if case is for making the button not appear... there has to be a better way of doign all of this */}
  if (window.location.href.indexOf("Q1_1") > -1 && window.location.href.indexOf("Q1_1_2") == -1 ){
return(<li><Link to="/Q1_2"><Button >Yes</Button></Link>
        <Link to="/Q1_1_2"><Button >No</Button></Link></li>);
  }

  else{
    return(
<div/>
);
}
}
Q1_2_1check(){
  if (window.location.href.indexOf("Q1_2") > -1 && window.location.href.indexOf("Q1_2_1") == -1 && window.location.href.indexOf("Q1_2_2") == -1 ){
return(<li><Link to="/Q1_2_1"><Button >Yes</Button></Link>  <Link to="/Q1_2_2"><Button >No</Button></Link></li>);
  }

  else{
    return(
<div/>
);
}
}
Done1check(){
  if (window.location.href.indexOf("Q1_2_1") > -1 && window.location.href.indexOf("Q1_2_1_1") == -1){
return(<li><Link to="/Done1"><Button >Yes</Button></Link><Link to="/Q1_2_1_1"><Button >No</Button></Link></li>);
  }

  else{
    return(
<div/>
);
}
}
finalcheck1(){
  if (window.location.href.indexOf("Done1") > -1){
return(<li><Link to="/"><Button >Start Again</Button></Link></li>);
  }

  else{
    return(

<div/>
);
}
}
Q1_1_2check(){
  if (window.location.href.indexOf("Q1_1_2") > -1 && window.location.href.indexOf("Q1_1_2_yes") == -1 && window.location.href.indexOf("Q1_1_2_no") == -1 ){
return(<li><Link to="/Q1_1_2_yes"><Button >Yes</Button></Link>
      <Link to="/Q1_1_2_no"><Button >No</Button></Link></li>);
  }

  else{
    return(
<div/>
);
}
}
Q1_1_2_yesnocheck(){
  if (window.location.href.indexOf("Q1_1_2_yes") > -1 || window.location.href.indexOf("Q1_1_2_no") > -1){
return(<li><Link to="/"><Button >Start Again</Button></Link></li>);
  }

  else{
    return(
<div/>
);
}
}
Q1_2_2check(){
  if (window.location.href.indexOf("Q1_2_2") > -1 && window.location.href.indexOf("Q1_2_2_yes") == -1 && window.location.href.indexOf("Q1_2_2_no") == -1){
return(<li><Link to="/Q1_2_2_yes"><Button >Yes</Button></Link>
<Link to="/Q1_2_2_no"><Button >No</Button></Link></li>);
  }

  else{
    return(
<div/>
);
}
}
Q1_2_2_yesnocheck(){
  if (window.location.href.indexOf("Q1_2_2_yes") > -1 || window.location.href.indexOf("Q1_2_2_no") > -1){
return(<li><Link to="/"><Button >Start Again</Button></Link></li>);
  }

  else{
    return(
<div/>
);
}
}

Q1_2_1_1check(){
  if (window.location.href.indexOf("Q1_2_1_1") > -1 && window.location.href.indexOf("Q1_2_1_1_yes") == -1 && window.location.href.indexOf("Q1_2_1_1_no") == -1){
return(<li><Link to="/Q1_2_1_1_yes"><Button >Yes</Button></Link><Link to="/Q1_2_1_1_no"><Button >No</Button></Link></li>);
  }

  else{
    return(
<div/>
);
}
}

Q1_2_1_1yesnocheck(){
  if (window.location.href.indexOf("Q1_2_1_1_yes") > -1 || window.location.href.indexOf("Q1_2_1_1_no") > -1){
return(<li><Link to="/"><Button >Start Again</Button></Link></li>);
  }

  else{
    return(
<div/>
);
}
}
traverser(){

  if(window.location.pathname == '/'){
    return(

   <h1 className ="title"><a className = "link" href="/">
    » Digital Copyright Wizard</a>
    </h1>


  )
}
  else if(window.location.pathname == '/Q1_1'){
    return(
    <h1 className ="title"><a className = "link" href="/">
    » Digital Copyright Wizard<span className="tooltiptext">Previous Question: Confused?
    Answer: Start</span> </a> <a className = "link" href="/Q1_1">
    » Q1_1</a>
    </h1>


  )
}
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
 if(window.location.pathname == '/Q1_1/Q1_2_1'){
  return(
  <h1 className ="title"><a className = "link" href="/">
  » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
  Answer: Start</span></a> <a className = "link" href="/Q1_1">
  » Q1_1<span className="tooltiptext">Previous Question: Is the data publicly available?
  Answer: Yes</span> </a> <a className = "link" href="/Q1_2">
  » Q1_2 <span className="tooltiptext">Previous Question: Does the data have a license?
  Answer: Yes</span></a> <a className = "link" href="/Q1_2_1">
  » Q1_2_1</a>
  </h1>


)
}
else if(window.location.pathname == '/Q1_2_1_1'){
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
else if(window.location.pathname == '/Q1_2_1_1_yes'){
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
  » Q1_2_1_1 <span className="tooltiptext">Previous Question: Is the dataset covered by Copyright?
  Answer: Yes</span></a> <a className = "link" href="/Q1_2_1_1_yes">   » Done</a>
  </h1>


)
}
else if(window.location.pathname == '/Q1_2_1_1_no'){
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
  » Q1_2_1_1 <span className="tooltiptext">Previous Question: Is the dataset covered by Copyright?
  Answer: No</span></a> <a className = "link" href="/Q1_2_1_1_no">   » Done</a>
  </h1>


)
}
else if(window.location.pathname == '/Done1'){
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
else if(window.location.pathname == '/Q1_1_2'){
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
else if(window.location.pathname == '/Q1_1_2_no'){
  return(
  <h1 className ="title"><a className = "link" href="/">
  » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
  Answer: Start</span></a> <a className = "link" href="/Q1_1">
  » Q1_1<span className="tooltiptext">Previous Question: Is the data publicly available?
  Answer: No</span> </a> <a className = "link" href="/Q1_1_2">
  » Q1_1_2 <span className="tooltiptext">Previous Question: Is there any Data Sharing Agreement or similar document that outlines what you can do with the dataset?
  Answer: No</span> </a> <a className = "link" href="/Q1_1_2_no">
  » Done </a>
  </h1>


)
}
else if(window.location.pathname == '/Q1_1_2_yes'){
  return(
  <h1 className ="title"><a className = "link" href="/">
  » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
  Answer: Start</span></a> <a className = "link" href="/Q1_1">
  » Q1_1<span className="tooltiptext">Previous Question: Is the data publicly available?
  Answer: No</span> </a> <a className = "link" href="/Q1_1_2">
  » Q1_1_2 <span className="tooltiptext">Previous Question: Is there any Data Sharing Agreement or similar document that outlines what you can do with the dataset?
  Answer: Yes</span> </a> <a className = "link" href="/Q1_1_2_yes">
  » Done </a>
  </h1>


)
}
else if(window.location.pathname == '/Q1_2_2'){
  return(
  <h1 className ="title"><a className = "link" href="/">
  » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
  Answer: Start</span></a> <a className = "link" href="/Q1_1">
  » Q1_1<span className="tooltiptext">Previous Question: Is the data publicly available?
  Answer: Yes</span> </a> <a className = "link" href="/Q1_2">
  » Q1_2 <span className="tooltiptext">Previous Question: Does the data have a license?
  Answer: No</span></a> <a className = "link" href="/Q1_2_2">
  » Q1_2_2</a>
  </h1>
)
}
else if(window.location.pathname == '/Q1_2_2_yes'){
  return(
  <h1 className ="title"><a className = "link" href="/">
  » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
  Answer: Start</span></a> <a className = "link" href="/Q1_1">
  » Q1_1<span className="tooltiptext">Previous Question: Is the data publicly available?
  Answer: Yes</span> </a> <a className = "link" href="/Q1_2">
  » Q1_2 <span className="tooltiptext">Previous Question: Does the data have a license?
  Answer: No</span></a> <a className = "link" href="/Q1_2_2">
  » Q1_2_2<span className="tooltiptext">Previous Question: Is the dataset covered by Copyright?
  Answer: Yes</span></a> <a className = "link" href="/Q1_2_2_yes">
  » Done</a>
  </h1>
)
}
else if(window.location.pathname == '/Q1_2_2_no'){
  return(
  <h1 className ="title"><a className = "link" href="/">
  » Digital Copyright Wizard <span className="tooltiptext">Previous Question: Confused?
  Answer: Start</span></a> <a className = "link" href="/Q1_1">
  » Q1_1<span className="tooltiptext">Previous Question: Is the data publicly available?
  Answer: Yes</span> </a> <a className = "link" href="/Q1_2">
  » Q1_2 <span className="tooltiptext">Previous Question: Does the data have a license?
  Answer: No</span></a> <a className = "link" href="/Q1_2_2">
  » Q1_2_2<span className="tooltiptext">Previous Question: Is the dataset covered by Copyright?
  Answer: No</span></a><a className = "link" href="/Q1_2_2_no">
  » Done</a>
  </h1>
)
}
}
    render() {

      var chosen = {
          display: this.state.chosen ? "block" : "none"
        };
//fetch(`${process.env.PUBLIC_URL}/test.yml`)
    return (
<Route>
<div >
<h1 className = "titlebg" >
                 <img className = "img" src="https://osulibrary.oregonstate.edu/sites/all/themes/doug-fir-d7-library/logo.svg" alt="osu" width="100" height="100"></img> DC Wizard <NavLink to="/"><Button className = "Restart" onClick={this.SetStart}>Restart</Button></NavLink></h1>


         <ul  className="header">
         <h2>Confused about what to choose?</h2>
         <p>Click below to start</p>


           <li><NavLink to="/Q1_1"><Button style={{background: this.chosen_color(0)}} onClick={() => {this.button_chosen(0)}} >Start</Button></NavLink></li>

         </ul>
         {this.traverser()}
         <div className="content">
         <Route exact path="/Q1_1" component={Start}/>


         </div>
       </div>
{/*
{this.select_question()}
{this.traverser()}
<h2>q1state: {this.state.qwe}</h2>

<div className="Restart">
<Button onClick={this.reset} className="bg-success" >Restart</Button>
</div>
    <Switch>
 <Route exact path='/' component={Home}/>
    <Route path='/Q1_1' component={Start}/>
    <Route path='/Q1_2' component={Q1_2}/>
    <Route path='/Q1_2_1' component={Q1_2_1}/>
    <Route path='/Done1' component={Done1}/>
    <Route path='/Q1_1_2' component={Q1_1_2}/>
    <Route path='/Q1_1_2_yes' component={Q1_1_2_yes}/>
    <Route path='/Q1_1_2_no' component={Q1_1_2_no}/>
    <Route path='/Q1_2_2' component={Q1_2_2}/>
    <Route path='/Q1_2_2_yes' component={Q1_2_2_yes}/>
    <Route path='/Q1_2_2_no' component={Q1_2_2_no}/>
    <Route path='/Q1_2_1_1' component={Q1_2_1_1}/>
    <Route path='/Q1_2_1_1_yes' component={Q1_2_1_1_yes}/>
    <Route path='/Q1_2_1_1_no' component={Q1_2_1_1_no}/>

    </Switch>
    <h2>Options</h2>
{this.Q1_1check()}
{this.Q1_2check()}
{this.Q1_2_1check()}
{this.Done1check()}
{this.finalcheck1()}
{this.Q1_1_2check()}
{this.Q1_1_2_yesnocheck()}
{this.Q1_2_2check()}
{this.Q1_2_2_yesnocheck()}
{this.Q1_2_1_1check()}
{this.Q1_2_1_1yesnocheck()}
*/}



</Route>

    );
  }
}


export default App;
