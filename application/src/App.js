import React, { Component } from 'react';
import './App.css';
import { Route, NavLink,HashRouter, BrowserRouter,Switch, Link } from 'react-router-dom';

import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
import {StepWizard, Step} from 'react-step-wizard';
import $ from 'jquery';
import data from './me_with_others_data.json';

class App extends Component {
  constructor (props) {
      super(props);
      this.state = {
        modal: false,
        chosen: null,

        questions:{ }
      };

  this.toggle = this.toggle.bind(this);
this.button_chosen = this.button_chosen.bind(this);
this.SetStart = this.SetStart.bind(this)
this.question_counter = this.question_counter.bind(this);
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
else if(window.location.pathname == '/Q1_2'){
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
 else if(window.location.pathname == '/Q1_2_1'){
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
question_show(q){
  var i, item, ref = {}, counts = {};
  function ul() {return document.createElement('ul');}
  function li(text) {
      var e = document.createElement('li');
      e.appendChild(document.createTextNode(text));
      return e;
  }
  ref[0] = ul();
  counts[0] = 1;
  for (i = 0; i < q.numoptions; ++i) {
     ref[q.optiontype[i].nextstepcontent].appendChild(li(q.optiontype[i]['option']));
  }
}
question_counter = (q) =>{


    var i = 0;
    for (i = 0; i < q.numoptions; i++){
      return             <div>
            </div>
    }


}

    render() {

      var chosen = {
          display: this.state.chosen ? "block" : "none"
        };

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



         </div>

         {
         data.map((q) =>  {
           while(q.questionid == window.location.pathname){
            if(q.questionid.indexOf('done') >= 0){
              return<div>
              <h1>printing from json:{q.finished}</h1>
              <div className="navigationButtonsLeft">
              <NavLink to={q.questionorigin}><Button >&lt; Back</Button></NavLink>

                 </div>
              </div>
            }
            else{
              if(q.numoptions == 2){
             return<div>

             <h1>Printing out from Json: {q.question}</h1>
             <div className="navigationButtonsLeft">
             <NavLink to={q.questionorigin}><Button >&lt; Back</Button></NavLink>

                </div>
             <Button onClick={this.toggle} >  <div className = "buttondiv">More Info</div></Button>
    <p>  {q.explanationresources}</p>
             <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
               <ModalHeader toggle={this.toggle}>  Information </ModalHeader>
               <ModalBody>
            Print from json: {q.explanation}
               </ModalBody>
               <ModalFooter>
                 <Button color="primary" onClick={this.toggle}>Got it!</Button>{' '}
                 <Button color="secondary" onClick={this.toggle}>Cancel</Button>
               </ModalFooter>
             </Modal>
             <ul className="header">
{/*<p> function:{this.question_show(q)}</p>*/}
{/*function above work in progress*/}

{/*}<p>is this here?: {Object.keys(q.optiontype).length}</p>
<p>is this here?: {q.optiontype[0].nextstepcontent}</p>
*/}
          <li><NavLink to={q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color(0)}} onClick={() => {this.button_chosen(0)}} >{q.optionid1.option}</Button></NavLink></li>

          <li><NavLink to={q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color(1)}} onClick={() => {this.button_chosen(1)}} >{q.optionid2.option}</Button></NavLink></li>


          </ul>
        </div>
      }
        else if(q.numoptions == 3){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <NavLink to={q.questionorigin}><Button >&lt; Back</Button></NavLink>

             </div>
          <Button onClick={this.toggle} >  <div className = "buttondiv">More Info</div></Button>
                <p>{q.explanationresources}</p>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>  Information </ModalHeader>
            <ModalBody>
         Print from json: {q.explanation}
            </ModalBody>
            <ModalFooter>

              <Button color="primary" onClick={this.toggle}>Got it!</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>

          <ul className="header">



          <li><NavLink to={q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color(0)}} onClick={() => {this.button_chosen(0)}} >{q.optionid1.option}</Button></NavLink></li>

          <li><NavLink to={q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color(1)}} onClick={() => {this.button_chosen(1)}} >{q.optionid2.option}</Button></NavLink></li>


       </ul>
     </div>

        }
        else{
          <h1>Oops dev error </h1>
        }
    }
           ;
         }

       })

       }

       </div>




</Route>

    );
  }
}


export default App;
