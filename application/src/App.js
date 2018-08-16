import './App.css';
import React, { Component } from 'react';

import { Route, NavLink,Link} from 'react-router-dom';

import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';

import pdfConverter from 'jspdf';
import data from './database.json';

class App extends Component {
  constructor (props) {
    var cond = sessionStorage.getItem("show");
       if (cond === null) {
       console.log('was null setting to false');
       cond = false;
   }
   else{
    cond = JSON.parse(cond)
}

      super(props);
      this.state = {
        show: cond,
        modal: false



      };

  this.toggle = this.toggle.bind(this);

this.traverser = this.traverser.bind(this);
this.parsesteps = this.parsesteps.bind(this);
  }
  toggleT = () =>{
    sessionStorage.setItem("show",true);
var cond = sessionStorage.getItem("show");
if (cond === null) {
console.log('was null setting to false');
cond = true;
}
else{
cond = JSON.parse(cond)
}
    this.setState({show: cond});
  }

  hideT = () =>{
    sessionStorage.setItem("show",false);
var cond = sessionStorage.getItem("show");
if (cond === null) {
console.log('was null setting to false');
cond = false;
}
else{
cond = JSON.parse(cond)
}
    this.setState({show: cond});
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

parsesteps(q){


return(<div>
  <ol reversed className = "tabbing">
<li >  <Link to={process.env.PUBLIC_URL + q.questionorigin[14]} >{q.questionorigin[14]}</Link>
</li>
  <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[13]} >{q.questionorigin[13]}</Link>
</li>
<li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[12]} >{q.questionorigin[12]}</Link>
</li>
<li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[11]} >{q.questionorigin[11]}</Link>
</li>
  <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[10]} >{q.questionorigin[10]}</Link>
</li>
    <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[9]} >{q.questionorigin[9]}</Link>
</li>
    <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[8]} >{q.questionorigin[8]}</Link>
</li>
  <li>       <Link to={process.env.PUBLIC_URL + q.questionorigin[7]} >{q.questionorigin[7]}</Link>
</li>
  <li>       <Link to={process.env.PUBLIC_URL + q.questionorigin[6]} >{q.questionorigin[6]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[5]} >{q.questionorigin[5]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[4]} >{q.questionorigin[4]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[3]} >{q.questionorigin[3]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[2]} >{q.questionorigin[2]}</Link>
</li>
      <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[1]} >{q.questionorigin[1]}</Link>
</li>
<li>  <Link to={process.env.PUBLIC_URL + q.questionorigin[0]} >{q.questionorigin[0]}</Link>
</li>
</ol>
</div>)


}


question_show = (q,type) =>{

  var i;
  if(type === 0){



    if(sessionStorage.getItem(q.questionid) === '1'  ) {



/*    for (i = 0; i < Object.keys(q.optionid2.clearsteps).length; i++) {
      sessionStorage.setItem(q.optionid2.clearsteps[i], null);
    console.log(q.optionid2.clearsteps[i])
}



    }


    else if(sessionStorage.getItem(q.questionid) === '2'){
      for (i = 0; i < Object.keys(q.optionid3.clearsteps).length; i++) {
        sessionStorage.setItem(q.optionid3.clearsteps[i], null);
      console.log(q.optionid3.clearsteps[i])
      }
*/
var arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for (var i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )

if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
    }
}

// Iterate over arr and remove the items by key
for (var i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )
    sessionStorage.removeItem(arr[i]);
}

        }
/*
        else if(sessionStorage.getItem(q.questionid) === '3'){
              sessionStorage.setItem(q.optionid4.nextstepcontent, null);
              sessionStorage.setItem(q.questionid, '0');

            }
            else if(sessionStorage.getItem(q.questionid) === '4'){
                  sessionStorage.setItem(q.optionid5.nextstepcontent, null);
                  sessionStorage.setItem(q.questionid, '0');

                }
                else if(sessionStorage.getItem(q.questionid) === '5'){
                      sessionStorage.setItem(q.optionid6.nextstepcontent, null);
                      sessionStorage.setItem(q.questionid, '0');

                    }
                    else if(sessionStorage.getItem(q.questionid) === '6'){
                          sessionStorage.setItem(q.optionid7.nextstepcontent, null);
                          sessionStorage.setItem(q.questionid, '0');

                        }

*/


    sessionStorage.setItem(q.questionid, '0');



    }

else if(type === 1){

  if(sessionStorage.getItem(q.questionid) === '0'){
/*
    for (i = 0; i < Object.keys(q.optionid1.clearsteps).length; i++) {
      sessionStorage.setItem(q.optionid1.clearsteps[i], null);
    console.log(q.optionid1.clearsteps[i])
  }

  }
  else if(sessionStorage.getItem(q.questionid) === '2'){
    for (i = 0; i < Object.keys(q.optionid3.clearsteps).length; i++) {
      sessionStorage.setItem(q.optionid3.clearsteps[i], null);
    console.log(q.optionid3.clearsteps[i])
    }
*/
var arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for (var i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )
    if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
        console.log("stuff being added to array" + arr[i] )

    }
}

// Iterate over arr and remove the items by key
for (var i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )
    sessionStorage.removeItem(arr[i]);
}
      }
/*
      else if(sessionStorage.getItem(q.questionid) === '3'){
            sessionStorage.setItem(q.optionid4.nextstepcontent, null);
            sessionStorage.setItem(q.questionid, '1');

          }
          else if(sessionStorage.getItem(q.questionid) === '4'){
                sessionStorage.setItem(q.optionid5.nextstepcontent, null);
                sessionStorage.setItem(q.questionid, '1');

              }
              else if(sessionStorage.getItem(q.questionid) === '5'){
                    sessionStorage.setItem(q.optionid6.nextstepcontent, null);
                    sessionStorage.setItem(q.questionid, '1');

                  }
                  else if(sessionStorage.getItem(q.questionid) === '6'){
                        sessionStorage.setItem(q.optionid7.nextstepcontent, null);
                        sessionStorage.setItem(q.questionid, '1');

                      }
        */
  sessionStorage.setItem(q.questionid, '1');


}
else if(type === 2){

  if(sessionStorage.getItem(q.questionid) === '0'){
/*
    for (i = 0; i < Object.keys(q.optionid1.clearsteps).length; i++) {
      sessionStorage.setItem(q.optionid1.clearsteps[i], null);
    console.log(q.optionid1.clearsteps[i])
  }

  }
  else if(sessionStorage.getItem(q.questionid) === '1'){
    for (i = 0; i < Object.keys(q.optionid2.clearsteps).length; i++) {
      sessionStorage.setItem(q.optionid2.clearsteps[i], null);
    console.log(q.optionid2.clearsteps[i])
}
*/
var arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for (var i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )
if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
    }
}

// Iterate over arr and remove the items by key
for (var i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )

    sessionStorage.removeItem(arr[i]);
}

      }
/*
      else if(sessionStorage.getItem(q.questionid) === '3'){
            sessionStorage.setItem(q.optionid4.nextstepcontent, null);
            sessionStorage.setItem(q.questionid, '1');

          }
          else if(sessionStorage.getItem(q.questionid) === '4'){
                sessionStorage.setItem(q.optionid5.nextstepcontent, null);
                sessionStorage.setItem(q.questionid, '1');

              }
              else if(sessionStorage.getItem(q.questionid) === '5'){
                    sessionStorage.setItem(q.optionid6.nextstepcontent, null);
                    sessionStorage.setItem(q.questionid, '1');

                  }
                  else if(sessionStorage.getItem(q.questionid) === '6'){
                        sessionStorage.setItem(q.optionid7.nextstepcontent, null);
                        sessionStorage.setItem(q.questionid, '1');

                      }
        */
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
  console.log(window.location.pathname)
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

clear_storage = () =>{
  sessionStorage.clear();

}
title = (q) =>{
   if(q.questionid.indexOf('/Q1')>=0){
  return(
    <div>  <h3 className = "q-title">Me With Others Data Usage</h3></div>
  )
   }
   else if(q.questionid.indexOf('/Q2')>=0){
  return(
    <div>  <h3 className = "q-title"> Others With Me Data Usage</h3></div>
  )
   }
   else if(q.questionid.indexOf('/Q3')>=0){
  return(
    <div>  <h3 className = "q-title"> Me With Me Data Usage</h3></div>
  )
   }

}
log = (q)=>{
  var show = {
        display: this.state.show ? "block" : "none"
      };
      var hidden = {
  display: this.state.show ? "none" : "block"
}
  if(window.location.pathname === q.questionid){
    return(
      <div>
      <Button style={hidden} className = "Restart" onClick={  this.toggleT}>Show Step Log</Button>
<div style={show}>
   <h1 className ="log"><h4>Step Log: </h4>
   <div className="logcontainer">
   <pre className="loginfo">{sessionStorage.getItem("itemsArray")}</pre>
   </div>
   <Button style={show} className = "Restart" onClick={  this.hideT}>Hide Step Log</Button>
{this.export_log_button(q)}
    </h1>
</div>
</div>
  )
}

}
traverser(q){

  if(window.location.pathname === q.questionid){
    return(
<div className="aligntop">
   <h1 className ="title"><h4>Current Step:</h4><h4 className="color">{q.questionid}</h4> <h4>Previous Steps:</h4>{this.parsesteps(q)}

    </h1>
</div>

  )
}
}
//TEST!!!! BELOW
/*
  var oldItems = JSON.parse(sessionStorage.getItem('stepsarray')) || [];
  var newItem = {

    "Question-id": q.questionid,
    "Description": q.finished,
"Steps Taken":  q.questionorigin+","+q.questionid
  };

  oldItems.push(newItem);
var str = JSON.stringify(oldItems, undefined, 4);

  sessionStorage.setItem('stepsarray', str);
  return(
<div className="aligntop">
 <h1 className ="title"><h4>Current Step:</h4><h4 className="color">{q.questionTitle}</h4> <h4>Previous Steps:</h4>{sessionStorage.getItem('stepsarray')}

  </h1>
</div>
)
}
*/
save_step = (q) =>{
  var questiontype ;
  if(q.questionid.indexOf('/Q1')>=0){
    questiontype = "Me with Others Data Usage"

  }
  else if(q.questionid.indexOf('/Q2')>=0){

   questiontype = "Others with Me Data Usage"

  }
  else if(q.questionid.indexOf('/Q3')>=0){

   questiontype = "Me with Me Data Usage"

  }
  var allsteps;


  var oldItems = JSON.parse(sessionStorage.getItem('itemsArray')) || [];
  var newItem = {
    "Question Type": questiontype,
    "Question-id": q.questionid,
    "Description": q.finished,
"Steps Taken":  q.questionorigin+","+q.questionid
  };

  oldItems.push(newItem);
var str = JSON.stringify(oldItems, undefined, 4);
this.output(str);
//sessionStorage.setItem('itemsArray', JSON.stringify(oldItems,null, 2));

alert("You have added the the information for for: "+q.questionid)
document.location.reload(true)
}
output = (inp) => {
    //document.body.appendChild(document.createElement('pre')).innerHTML = inp;
    sessionStorage.setItem('itemsArray', inp);
}
save_step_button = (q) => {
  return <div>
  <Button color="secondary" onClick={() => { this.save_step(q) }}>Save</Button>
  </div>
}
export_log_button = (q) => {
  return <div>
  <Button color="secondary" onClick={() => { this.export_log(q) }}>Export</Button>
  </div>
}

export_log = (q) =>{

    if(sessionStorage.getItem('itemsArray') == null){

    }
    else{
       var doc = new pdfConverter('p','pt','letter');
var splitTitle = doc.splitTextToSize(sessionStorage.getItem('itemsArray'), 750);
doc.setFontSize(24);
  doc.text("Digital Copyright Wizard", 20, 30)


doc.setFontSize(12);
  doc.text(splitTitle, 20, 50)
  doc.save('DCsteps.pdf')
}
}
    render() {



    return (

<Route>
<div className = "format" >
<div className="titlemove">
<h1 className = "titlebg" >
                 <img className = "imgpic" src="https://library.oregonstate.edu/sites/all/themes/doug-fir-d7-library/logo.svg" alt="osu" width="100" height="100"></img>
DC Wizard
                  <Link to="/"><Button className = "Restart" onClick={  this.clear_storage}>Restart</Button></Link></h1>
</div>



                 {
                 data.map((q) =>  {
                   console.log(window.location.pathname);
     while(q.questionid === window.location.pathname){

            if(q.questionid.indexOf('done') >= 0){
              return<div className = "format">
  {this.log(q)}
              {this.traverser(q)}
            {this.title(q)}
              <h5> You are done! </h5>
              <p>{q.finished}</p>

  {this.save_step_button(q)}

              </div>
            }
            if(window.location.pathname === "/"){
              return<div >
                {this.log(q)}
  {this.traverser(q)}
              <h4>Question about Data Usage?</h4>
              <p>Click below to start</p>
<div className="bod">
              <li className="together"><Link to={process.env.PUBLIC_URL + q.optionlink[0]}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}}>{q.option[0]}</Button></Link>
              <p>Choose this question if you want to know how you can use data that belongs to somebody else. This includes data that you have worked on, but that is managed and administered by somebody else; data that is available to you, whose authors you do not know; data that you did not work on, that was given to you by colleague or somebody you know. </p></li>

              <li className="together"><Link to={process.env.PUBLIC_URL + q.optionlink[1]}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.option[1]}</Button></Link>
              <p>Choose this question if you have a dataset that belongs to you or that you manage, and you want to share it with other people. This question will help you understand what these other people can and cannot do with your dataset. </p></li>
              <li className="together"><Link to={process.env.PUBLIC_URL + q.optionlink[2]}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)} }>{q.option[2]}</Button></Link>
              <p>Choose this question if you own or administer and manage a dataset and want to know what you can do with it. Learn how to  figure out if you are the only person who gets to make decisions over the dataset and, if not, who does. If the person who gets to make decisions over your dataset is someone else, then go to the “What can I do with other people’s data” question instead. </p></li>
              <h5> Warning!</h5>
<p>The goal of this wizard is to help you figure out what you and others can do with research data. This wizard intends to help you get educated on legal and practical matters related to the managing of research datasets but it does not intend to give legal advice. If you need legal advice contact a lawyer or, if you are at OSU, contact the Office of General Counsel  https://leadership.oregonstate.edu/general-counsel This wizard is intended for students and researchers in the US. If you live in other countries there may be laws that govern the use of research datasets that we are not taking into account here. If you have questions, you are welcome to contact us through the Contact form at any time. </p>

  </div>

              </div>
            }


            else{


              if(q.numoptions === 2){

             return<div >
               {this.log(q)}
    {this.traverser(q)}
    {this.title(q)}

             <h5>Question: {q.question}</h5>




             <ul className="header">

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


          </ul>
            <h6>     Explanation: </h6>   <p> {q.explanation} </p>
        <h6>   Resources:</h6> <a href={q.explanationresources} target="_blank">{q.explanationresources}</a>


        </div>
      }


        else if(q.numoptions === 3){

          return<div className = "format">
          {this.log(q)}
   {this.traverser(q)}
   {this.title(q)}

           <h5>Question: {q.question}</h5>

          <ul className="header">


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

        <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


        <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>

       </ul>
       <h6>     Explanation: </h6>   <p> {q.explanation} </p>
   <h6>   Resources:</h6> <p>{q.explanationresources}</p>
     </div>

        }

        else if(q.numoptions === 4){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <Link to={q.questionorigin}><Button >&lt; Back</Button></Link>

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



          <li><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


          <li><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>
          <li><Link to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></Link></li>

       </ul>
     </div>

        }
        else if(q.numoptions === 5){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <Link to={q.questionorigin}><Button >&lt; Back</Button></Link>

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


          <li><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


          <li><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>
          <li><Link to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></Link></li>

          <li><Link to={process.env.PUBLIC_URL + q.optionid5.nextstepcontent}><Button style={{background: this.chosen_color_4(q)}} onClick={() => {this.question_show(q,4)}} >{q.optionin5.option}</Button></Link></li>

       </ul>
     </div>

        }
        else if(q.numoptions === 6){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <Link to={q.questionorigin}><Button >&lt; Back</Button></Link>

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



          <li><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


          <li><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>
          <li><Link to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></Link></li>

          <li><Link to={process.env.PUBLIC_URL + q.optionid5.nextstepcontent}><Button style={{background: this.chosen_color_4(q)}} onClick={() => {this.question_show(q,4)}} >{q.optionin5.option}</Button></Link></li>
          <li><Link to={process.env.PUBLIC_URL + q.optionid6.nextstepcontent}><Button style={{background: this.chosen_color_5(q)}} onClick={() => {this.question_show(q,5)}} >{q.optionin6.option}</Button></Link></li>

       </ul>
     </div>

        }
        else if(q.numoptions === 7){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <Link to={q.questionorigin}><Button >&lt; Back</Button></Link>

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



          <li><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


          <li><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>
          <li><Link to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></Link></li>

          <li><Link to={process.env.PUBLIC_URL + q.optionid5.nextstepcontent}><Button style={{background: this.chosen_color_4(q)}} onClick={() => {this.question_show(q,4)}} >{q.optionin5.option}</Button></Link></li>
          <li><Link to={process.env.PUBLIC_URL + q.optionid6.nextstepcontent}><Button style={{background: this.chosen_color_5(q)}} onClick={() => {this.question_show(q,5)}} >{q.optionin6.option}</Button></Link></li>
          <li><Link to={process.env.PUBLIC_URL + q.optionid7.nextstepcontent}><Button style={{background: this.chosen_color_6(q)}} onClick={() => {this.question_show(q,6)}} >{q.optionin7.option}</Button></Link></li>

       </ul>
     </div>

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
