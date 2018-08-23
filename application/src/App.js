import './App.css';
import React, { Component } from 'react';

import { Route, Link} from 'react-router-dom';
import { Tooltip } from 'reactstrap';
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';

import {ModalFooter,Row,Col} from 'reactstrap';
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
        modal: false,
      tooltipOpen: false


      };
    this.toggleTool = this.toggleTool.bind(this);
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
  toggleTool() {
   this.setState({
     tooltipOpen: !this.state.tooltipOpen
   });
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
  <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[13]} style={{ textDecoration: 'underline' }}  >{q.questionorigin[13]}</Link>
</li>
<li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[12]} style={{ textDecoration: 'underline' }}>{q.questionorigin[12]}</Link>
</li>
<li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[11]} style={{ textDecoration: 'underline' }} >{q.questionorigin[11]}</Link>
</li>
  <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[10]} style={{ textDecoration: 'underline' }}>{q.questionorigin[10]}</Link>
</li>
    <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[9]} style={{ textDecoration: 'underline' }} >{q.questionorigin[9]}</Link>
</li>
    <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[8]} style={{ textDecoration: 'underline' }} >{q.questionorigin[8]}</Link>
</li>
  <li>       <Link to={process.env.PUBLIC_URL + q.questionorigin[7]} style={{ textDecoration: 'underline' }}>{q.questionorigin[7]}</Link>
</li>
  <li>       <Link to={process.env.PUBLIC_URL + q.questionorigin[6]} style={{ textDecoration: 'underline' }}>{q.questionorigin[6]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[5]} style={{ textDecoration: 'underline' }}>{q.questionorigin[5]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[4]} style={{ textDecoration: 'underline' }}>{q.questionorigin[4]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[3]}style={{ textDecoration: 'underline' }} >{q.questionorigin[3]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[2]} style={{ textDecoration: 'underline' }}>{q.questionorigin[2]}</Link>
</li>
      <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[1]} style={{ textDecoration: 'underline' }}>{q.questionorigin[1]}</Link>
</li>
<li>  <Link to={process.env.PUBLIC_URL + q.questionorigin[0]} style={{ textDecoration: 'underline' }}>{q.questionorigin[0]}</Link>
</li>
</ol>
</div>)


}


question_show = (q,type) =>{

  var i;
  var arr = [];
  if(type === 0){



    if(sessionStorage.getItem(q.questionid) !== '0'  ) {




arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for (i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )

if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
    }
}

// Iterate over arr and remove the items by key
for ( i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )
    sessionStorage.removeItem(arr[i]);
}

        }



    sessionStorage.setItem(q.questionid, '0');



    }

else if(type === 1){

  if(sessionStorage.getItem(q.questionid) !== '1'){

arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for (i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )
    if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
        console.log("stuff being added to array" + arr[i] )

    }
}

// Iterate over arr and remove the items by key
for (i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )
    sessionStorage.removeItem(arr[i]);
}
      }

  sessionStorage.setItem(q.questionid, '1');


}
else if(type === 2){

  if(sessionStorage.getItem(q.questionid) !== '2'){

 arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for ( i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )
if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
    }
}

// Iterate over arr and remove the items by key
for (i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )

    sessionStorage.removeItem(arr[i]);
}

      }

  sessionStorage.setItem(q.questionid, '2');

}
else if(type === 3){
  if(sessionStorage.getItem(q.questionid) !== '3'){

arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for (i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )
if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
    }
}

// Iterate over arr and remove the items by key
for (i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )

    sessionStorage.removeItem(arr[i]);
}

      }
  sessionStorage.setItem(q.questionid, '3');

}
else if(type === 4){

  if(sessionStorage.getItem(q.questionid) !== '4'){
 arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for (i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )
if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
    }
}

// Iterate over arr and remove the items by key
for (i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )

    sessionStorage.removeItem(arr[i]);
}

      }
  sessionStorage.setItem(q.questionid, '4');

}
else if(type === 5){
  if(sessionStorage.getItem(q.questionid) !== '5'){

 arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for (i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )
if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
    }
}

// Iterate over arr and remove the items by key
for (i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )

    sessionStorage.removeItem(arr[i]);
}

      }
  sessionStorage.setItem(q.questionid, '5');

}
else if(type === 6){
  if(sessionStorage.getItem(q.questionid) !== '6'){

 arr = []; // Array to hold the keys
// Iterate over localStorage and insert the keys that meet the condition into arr
for (i = 0; i < sessionStorage.length; i++){
  console.log("what is in session storage" + sessionStorage.key(i).substring() )
  console.log("what is current question" + q.questionid )
if (sessionStorage.key(i).includes(q.questionid)) {

        arr.push(sessionStorage.key(i));
    }
}

// Iterate over arr and remove the items by key
for (i = 0; i < arr.length; i++) {
  console.log("stuff in array being removed" + arr[i] )

    sessionStorage.removeItem(arr[i]);
}

      }
  sessionStorage.setItem(q.questionid, '6');

}

}
chosen_color_0 = (q) =>{

if(sessionStorage.getItem(q.questionid)=== '0'){
    return "#007bff";

  }

  else{return "";}
}

chosen_color_1 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '1'){
    return "#007bff";

  }
  else{
  return "";}
}
chosen_color_2 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '2'){
    return "#007bff";

  }
  else{
  return "";}
}
chosen_color_3 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '3'){
    return "#007bff";

  }
  else{
  return "";}
}
chosen_color_4 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '4'){
    return "#007bff";

  }
  else{
  return "";}
}
chosen_color_5 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '5'){
    return "#007bff";

  }
  else{
  return "";}
}
chosen_color_6 = (q) =>{
if(sessionStorage.getItem(q.questionid)=== '6'){
    return "#007bff";

  }
  else{
  return "";}
}

clear_storage = () =>{
  sessionStorage.clear();

}
title = (q) =>{
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
  //used that to learn about object values
  //not supported on internet explorer (supported on microsoft edge)
   if(q.questionid.indexOf('/Q1')>=0){


  return(
    <div>  <h4 className = "q-title">Topic: {Object.values(data)[1].option[0]}</h4></div>
  )
   }
   else if(q.questionid.indexOf('/Q2')>=0){
  return(
    <div>  <h4 className = "q-title">Topic: {Object.values(data)[1].option[1]}</h4></div>
  )
   }
   else if(q.questionid.indexOf('/Q3')>=0){
  return(
    <div>  <h4 className = "q-title">Topic: {Object.values(data)[1].option[2]}</h4></div>
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
      <div >
      <Button outline color="info" style={hidden} className = "Restart" onClick={  this.toggleT}>Show Step Log</Button>
<div  className="openlog" style={show}>
   <h1 className ="log">

    <h4>Step Log: </h4>

   <div className="logcontainer">
   <pre className="loginfo">{sessionStorage.getItem("itemsArray")}</pre>
   </div>
   <p className="contactlog">Questions?<br/>
 Contact the OSU Research Data Services at<br/>researchdataservices@oregonstate.edu		</p>
   <Button  style={show} className = "Hide_but" onClick={  this.hideT}>Hide Step Log</Button>

{this.save_log_button(q)}
    </h1>

</div>
</div>
  )
}

}
traverser(q){

  if(window.location.pathname === q.questionid){
    return(
<div className="left-sidebar">
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
export_step = (q) =>{
  var questiontype ;
  if(q.questionid.indexOf('/Q1')>=0){
    questiontype = Object.values(data)[1].option[0]

  }
  else if(q.questionid.indexOf('/Q2')>=0){

   questiontype = Object.values(data)[1].option[1]

  }
  else if(q.questionid.indexOf('/Q3')>=0){

   questiontype = Object.values(data)[1].option[2]

  }
//WORKING ON THIS 8/21/18
  var questiondata;
  var i;
  var j;
  for(i = 0; i < q.questionorigin.length; i++){
    for(j = 0; j< Object.values(data).length;j++){
  while(q.questionorigin[i] === Object.values(data)[j]){
    Object.values(data[i])
  }
  console.log(Object.values(data).length)
 }
}

  var oldItems = JSON.parse(sessionStorage.getItem('itemsArray')) || [];
  var newItem = {
    "Question": questiontype,
    "Question-id": q.questionid,
    "Description": q.finished,
"Steps Taken":  q.questionorigin+","+q.questionid
  };

  oldItems.push(newItem);
var str = JSON.stringify(oldItems, undefined, 4);
this.output(str);
//sessionStorage.setItem('itemsArray', JSON.stringify(oldItems,null, 2));

var cond = sessionStorage.setItem('show',true);

   this.setState({show: cond})
document.location.reload(true)
}
output = (inp) => {
    //document.body.appendChild(document.createElement('pre')).innerHTML = inp;
    sessionStorage.setItem('itemsArray', inp);
}
export_step_button = (q) => {
  return <div>
  <Button color="primary" className = "buttonmarg"  onClick={() => { this.export_step(q) }}>Export</Button>
  </div>
}
save_log_button = (q) => {
  if(sessionStorage.getItem('itemsArray') == null){

  }
  else{
  return <div>
  <Button  color="primary" onClick={() => { this.save_log(q) }}>Save</Button>
  </div>
}
}

save_log = (q) =>{

    if(sessionStorage.getItem('itemsArray') == null){

    }
    else{
       var doc = new pdfConverter('p','pt','letter');
var splitTitle = doc.splitTextToSize(sessionStorage.getItem('itemsArray'), 750);
doc.setFontSize(24);
  doc.text("Digital Copyright Wizard", 20, 30)
  doc.setFont("Georgia");
  doc.setFontSize(14);
    doc.text("Questions?", 325, 23)
doc.text("Contact the OSU Research Data Services at", 325, 38)
doc.text("researchdataservices@oregonstate.edu", 325, 53)


doc.setFontSize(12);
  doc.text(splitTitle, 20, 90)
  doc.save('DCsteps.pdf')
}
}
finalsteps = (q) =>{
  var i;
  var arr = [];
  for(i = 0;i<q.questionorigin.length; i++){
        arr.push((i+1)+'.'+' ')
    arr.push(q.questionorigin[i]);

      arr.push(' ')
    arr.push('\u2192')
        arr.push(' ')

  }
  arr.push((q.questionorigin.length + 1)+'.'+' ')
  arr.push(q.questionid);

  return arr;
}
    render() {



    return (

<Route>
<div className = "heading" >
<div className="titlemove">
<h1 className = "titlebg" >
                 <img className = "imgpic" src="https://library.oregonstate.edu/sites/all/themes/doug-fir-d7-library/logo.svg" alt="osu" width="100" height="100"></img>
  Digital Copyright Wizard <p className="contactheader">Questions?<br/>
Contact the OSU Research Data Services at<br/>researchdataservices@oregonstate.edu		</p></h1>
</div>



                 {
                   //http://4dev.tech/2017/12/how-to-load-a-json-file-in-reactjs/
                   //learned about data.map here below
                 data.map((q) =>  {

     while(q.questionid === window.location.pathname){

            if(q.questionid.indexOf('done') >= 0){
              return<div className = "format">
  {this.log(q)}
              {this.traverser(q)}
              <div className="main-body">
            {this.title(q)}
              <h5> You are done! </h5>
              <p>{q.finished}</p>
              <h5 >Final Steps:</h5>
        <p className="finalsteps">  {this.finalsteps(q)}</p>

</div>

<ul className="endbuttons">
  <li className="new">{this.export_step_button(q)}  </li>
   <li className="new"><Link to="/"><Button className = "buttonmarg" >Home</Button></Link>  </li>


  <li className="newt">  <div  > <Link to="/" ><Button className="reset" outline onClick={  this.clear_storage} id="TooltipExample">   <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggleTool}>
          Only click this if you want to clear all of the log and your inputs!
        </Tooltip> Reset   </Button></Link></div>  </li>
</ul>


              </div>

            }
            if(window.location.pathname === "/"){
              return<div >
                {this.log(q)}
  {this.traverser(q)}
              <h4>Question about Data Usage?</h4>
              <h5>Click below to start</h5>
<div className="bod">
  <Row>
             <Col><Link to={process.env.PUBLIC_URL + q.optionlink[0]}><Button color="danger" style={{background: this.chosen_color_0(q),  border: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}}>{q.option[0]}</Button></Link>
              <p>{q.questioninfo[0]} </p></Col>

             <Col><Link to={process.env.PUBLIC_URL + q.optionlink[1]}><Button color="danger" style={{background: this.chosen_color_1(q) ,  border: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.option[1]}</Button></Link>
              <p> {q.questioninfo[1]} </p></Col>
               <Col><Link to={process.env.PUBLIC_URL + q.optionlink[2]}><Button color="danger" style={{background: this.chosen_color_2(q) ,  border: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)} }>{q.option[2]}</Button></Link>
              <p>{q.questioninfo[2]}  </p> </Col>
            </Row>
            <div className="warning">
              <h5> Warning!</h5>
<p>{q.warninginfo}  </p>
</div>
  </div>

              </div>
            }


            else{


              if(q.numoptions === 2){

             return<div >
               {this.log(q)}
    {this.traverser(q)}
    {this.title(q)}
<div className="mainq">
          <h4>Question: {q.question}</h4>



 <ul className="header">


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button size="lg" style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button size="lg" style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>

          </ul>
            <h6>     Explanation: </h6>   <p> {q.explanation} </p>
        <h6>   Resources:</h6> <a href={q.explanationresources} target="_blank">{q.explanationresources}</a>

</div>
        </div>
      }


        else if(q.numoptions === 3){

          return<div className = "format">
          {this.log(q)}
   {this.traverser(q)}
   {this.title(q)}

           <h4>Question: {q.question}</h4>

          <ul className="header">


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button size="lg"  style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

        <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button size="lg" style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


        <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button size="lg" style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>

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
