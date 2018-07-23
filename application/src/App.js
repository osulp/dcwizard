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
        modal: false
      };

  this.toggle = this.toggle.bind(this);



  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
question_show = (q,type) =>{
  if(type === 0){
    sessionStorage.setItem(q.questionid, '0');


    }

else if(type === 1){
  sessionStorage.setItem(q.questionid, '1');

}
else if(type === 2){
  sessionStorage.setItem(q.questionid, '2');

}
else if(type === 3){
  sessionStorage.setItem(q.questionid, '3');

}
else if(type === 4){
  sessionStorage.setItem(q.questionid, '4');

}
else if(type === 5){
  sessionStorage.setItem(q.questionid, '5');

}
else if(type === 6){
  sessionStorage.setItem(q.questionid, '6');

}

}
chosen_color_0 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '0'){
    return "blue";

  }

  else{return "";}
}

chosen_color_1 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '1'){
    return "blue";

  }
  else{
  return "";}
}
chosen_color_2 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '2'){
    return "blue";

  }
  else{
  return "";}
}
chosen_color_3 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '3'){
    return "blue";

  }
  else{
  return "";}
}
chosen_color_4 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '4'){
    return "blue";

  }
  else{
  return "";}
}
chosen_color_5 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '5'){
    return "blue";

  }
  else{
  return "";}
}
chosen_color_6 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '6'){
    return "blue";

  }
  else{
  return "";}
}

clear_storage= () =>{
  sessionStorage.clear();

}
    render() {

      var chosen = {
          display: this.state.chosen ? "block" : "none"
        };

    return (
<Route>
<div >
<h1 className = "titlebg" >
                 <img className = "img" src="https://osulibrary.oregonstate.edu/sites/all/themes/doug-fir-d7-library/logo.svg" alt="osu" width="100" height="100"></img> DC Wizard <NavLink to="/"><Button className = "Restart" onClick={()=>{ this.clear_storage()}}>Restart</Button></NavLink></h1>


         <ul  className="header">
         <h2>Confused about what to choose?</h2>
         <p>Click below to start</p>


           <li><NavLink to={process.env.PUBLIC_URL + "/Q1_1"} ><Button  >Start</Button></NavLink></li>

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
              <NavLink to={process.env.PUBLIC_URL + q.questionorigin}><Button >&lt; Back</Button></NavLink>

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

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></NavLink></li>


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
          <p>  {q.explanationresources}</p>

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


          <li><NavLink to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></NavLink></li>


          <li><NavLink to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></NavLink></li>

       </ul>
     </div>

        }

        else if(q.numoptions == 4){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <NavLink to={q.questionorigin}><Button >&lt; Back</Button></NavLink>

             </div>
          <Button onClick={this.toggle} >  <div className = "buttondiv">More Info</div></Button>
          <p>  {q.explanationresources}</p>

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



          <li><NavLink to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></NavLink></li>


          <li><NavLink to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></NavLink></li>
          <li><NavLink to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></NavLink></li>

       </ul>
     </div>

        }
        else if(q.numoptions == 5){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <NavLink to={q.questionorigin}><Button >&lt; Back</Button></NavLink>

             </div>
          <Button onClick={this.toggle} >  <div className = "buttondiv">More Info</div></Button>
          <p>  {q.explanationresources}</p>

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


          <li><NavLink to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></NavLink></li>


          <li><NavLink to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></NavLink></li>
          <li><NavLink to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid5.nextstepcontent}><Button style={{background: this.chosen_color_4(q)}} onClick={() => {this.question_show(q,4)}} >{q.optionin5.option}</Button></NavLink></li>

       </ul>
     </div>

        }
        else if(q.numoptions == 6){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <NavLink to={q.questionorigin}><Button >&lt; Back</Button></NavLink>

             </div>
          <Button onClick={this.toggle} >  <div className = "buttondiv">More Info</div></Button>
          <p>  {q.explanationresources}</p>

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



          <li><NavLink to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></NavLink></li>


          <li><NavLink to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></NavLink></li>
          <li><NavLink to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid5.nextstepcontent}><Button style={{background: this.chosen_color_4(q)}} onClick={() => {this.question_show(q,4)}} >{q.optionin5.option}</Button></NavLink></li>
          <li><NavLink to={process.env.PUBLIC_URL + q.optionid6.nextstepcontent}><Button style={{background: this.chosen_color_5(q)}} onClick={() => {this.question_show(q,5)}} >{q.optionin6.option}</Button></NavLink></li>

       </ul>
     </div>

        }
        else if(q.numoptions == 7){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <NavLink to={q.questionorigin}><Button >&lt; Back</Button></NavLink>

             </div>
          <Button onClick={this.toggle} >  <div className = "buttondiv">More Info</div></Button>
          <p>  {q.explanationresources}</p>

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



          <li><NavLink to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></NavLink></li>


          <li><NavLink to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></NavLink></li>
          <li><NavLink to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid5.nextstepcontent}><Button style={{background: this.chosen_color_4(q)}} onClick={() => {this.question_show(q,4)}} >{q.optionin5.option}</Button></NavLink></li>
          <li><NavLink to={process.env.PUBLIC_URL + q.optionid6.nextstepcontent}><Button style={{background: this.chosen_color_5(q)}} onClick={() => {this.question_show(q,5)}} >{q.optionin6.option}</Button></NavLink></li>
          <li><NavLink to={process.env.PUBLIC_URL + q.optionid7.nextstepcontent}><Button style={{background: this.chosen_color_6(q)}} onClick={() => {this.question_show(q,6)}} >{q.optionin7.option}</Button></NavLink></li>

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
