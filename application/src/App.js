import './App.css';
import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { Route, Link} from 'react-router-dom';
import { Tooltip } from 'reactstrap';
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';

import {ModalFooter,Row,Col} from 'reactstrap';
import pdfConverter from 'jspdf';
import data from './database.json';
import html2canvas from 'html2canvas';


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

parsesteps(q,questionok){
var questionjoin = questionok.reverse();


return(<div>
  <ol reversed className = "tabbing">
<li >  <Link to={process.env.PUBLIC_URL + q.questionorigin[14]} style={{ textDecoration: 'underline' }}>{questionjoin[14]}</Link>
</li>
  <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[13]} style={{ textDecoration: 'underline' }}  >{questionjoin[13]}</Link>
</li>
<li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[12]} style={{ textDecoration: 'underline' }}>{questionjoin[12]}</Link>
</li>
<li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[11]} style={{ textDecoration: 'underline' }} >{questionjoin[11]}</Link>
</li>
  <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[10]} style={{ textDecoration: 'underline' }}>{questionjoin[10]}</Link>
</li>
    <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[9]} style={{ textDecoration: 'underline' }} >{questionjoin[9]}</Link>
</li>
    <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[8]} style={{ textDecoration: 'underline' }} >{questionjoin[8]}</Link>
</li>
  <li>       <Link to={process.env.PUBLIC_URL + q.questionorigin[7]} style={{ textDecoration: 'underline' }}>{questionjoin[7]}</Link>
</li>
  <li>       <Link to={process.env.PUBLIC_URL + q.questionorigin[6]} style={{ textDecoration: 'underline' }}>{questionjoin[6]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[5]} style={{ textDecoration: 'underline' }}>{questionjoin[5]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[4]} style={{ textDecoration: 'underline' }}>{questionjoin[4]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[3]}style={{ textDecoration: 'underline' }} >{questionjoin[3]}</Link>
</li>
    <li>     <Link to={process.env.PUBLIC_URL + q.questionorigin[2]} style={{ textDecoration: 'underline' }}>{questionjoin[2]}</Link>
</li>
      <li>   <Link to={process.env.PUBLIC_URL + q.questionorigin[1]} style={{ textDecoration: 'underline' }}>{questionjoin[1]}</Link>
</li>
<li>  <Link to={process.env.PUBLIC_URL + q.questionorigin[0]} style={{ textDecoration: 'underline' }}>{questionjoin[0]}</Link>
</li>
</ol>
</div>)


}

question_name = (q) => {

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
show_loginfo = (q) =>{
  if((sessionStorage.getItem("itemsArray")) === null){
    return
  }
  else{
    return(<div>
    <p data-simplebar data-simplebar-auto-hide="false" id = "pdf">  {JSON.parse(sessionStorage.getItem("itemsArray"))}</p>
</div>)
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
   <Button  style={show} className = "Hide_but" onClick={  this.hideT}>Hide Step Log</Button>

{this.save_log_button(q)}

    <h4 className="margin-top">Step Log: </h4>

   <div className="logcontainer">

{this.show_loginfo(q)}


   </div>

   <div>

{this.delete_log_button(q)}
 <p className="contactlog">Questions?<br/>
 Contact the OSU Research Data Services at<br/>researchdataservices@oregonstate.edu		</p>

</div>



    </h1>

</div>
</div>
  )
}

}
delete_log_button = (q)=>{
  if(sessionStorage.getItem('itemsArray') == null){

  }
  else{
  return <div>
  <Button  outline color="danger" onClick={() => { sessionStorage.removeItem("itemsArray");document.location.reload(true); }}>Clear Log</Button>
  </div>
}

}

traverser(q){
var questionname = []
var i;
  var j;
  for(i = 0; i < q.questionorigin.length; i++){
    for(j = 0; j< Object.values(data).length;j++){

  if(q.questionorigin[i] === Object.values(data)[j].questionid){

    questionname.push(Object.values(data)[j].questionTitle)


  //console.log("if stored in array "+questionstep)
  //now that in array parse each step

}
}
}

var questionreverse = []
questionreverse = questionname.reverse();
var questionjoin = []
 questionjoin = questionreverse
    return(
<div className="left-sidebar">
   <h1 className ="title"><h4>Current Step:</h4><h4 className="color">{q.questionTitle}</h4> <h4>Previous Steps:</h4>{this.parsesteps(q,questionreverse)}

    </h1>
</div>

  )

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
  var questionstep =[];

  var i;
  var j;
  for(i = 0; i < q.questionorigin.length; i++){
    for(j = 0; j< Object.values(data).length;j++){

  if(q.questionorigin[i] === Object.values(data)[j].questionid && q.questionorigin[i] !== "/"){
  questionstep.push(Object.values(data)[j].questionid )
  questionstep.push('\n')



  questionstep.push('\n')
  questionstep.push(Object.values(data)[j].questionTitle)
  questionstep.push('\n')

    questionstep.push("Question: " + Object.values(data)[j].question)
    questionstep.push('\n')
    for( var k=0;k<sessionStorage.length;k++){
    if(Object.values(data)[j].questionid  == sessionStorage.key(k)){
        console.log(sessionStorage.getItem(sessionStorage.key(k)));
        if(sessionStorage.getItem(sessionStorage.key(k))=== '0'){
            questionstep.push("Answer: " + Object.values(data)[j].optionid1.option);
        }
        else if(sessionStorage.getItem(sessionStorage.key(k))=== '0'){
            questionstep.push("Answer: " + Object.values(data)[j].optionid1.option);
        }
        else if(sessionStorage.getItem(sessionStorage.key(k))=== '1'){
            questionstep.push("Answer: " + Object.values(data)[j].optionid2.option);
        }
        else if(sessionStorage.getItem(sessionStorage.key(k))=== '2'){
            questionstep.push("Answer: " + Object.values(data)[j].optionid3.option);
        }
        else if(sessionStorage.getItem(sessionStorage.key(k))=== '3'){
            questionstep.push("Answer: " + Object.values(data)[j].optionid4.option);
        }
        else if(sessionStorage.getItem(sessionStorage.key(k))=== '4'){
            questionstep.push("Answer: " + Object.values(data)[j].optionid5.option);
        }
        else if(sessionStorage.getItem(sessionStorage.key(k))=== '5'){
            questionstep.push("Answer: " + Object.values(data)[j].optionid6.option);
        }
        else if(sessionStorage.getItem(sessionStorage.key(k))=== '6'){
            questionstep.push("Answer: " + Object.values(data)[j].optionid7.option);
        }


    }
  }
  questionstep.push('\n')

      questionstep.push(Object.values(data)[j].explanation)

      questionstep.push('\n')
      questionstep.push('\n');

    questionstep.push("Resources:");
  questionstep.push('\n');

            questionstep.push((Object.values(data)[j].explanationresources).join("\n"));
        questionstep.push('\n');
          questionstep.push('\n');

        questionstep.push("Links:");
          questionstep.push('\n');
              questionstep.push((Object.values(data)[j].explanationlink).join("\n"))
  questionstep.push('\n')

    questionstep.push('\n')
    questionstep.push('\n')

  //console.log("if stored in array "+questionstep)
  //now that in array parse each step

}
}
}

//console.log("if stored in array "+questionstep.join(""))

  var oldItems = JSON.parse(sessionStorage.getItem('itemsArray')) || [];
  var newItem ={

  "Question": questiontype,
  "Past Steps" :questionstep,

  "Question-id": q.questionid,

  "Question-title": q.questionTitle,
  "Description": q.finished,
  "resources": q.explanationresources,
  "links": q.explanationlink
};

  oldItems.push("_______________________________________________________________________");
        oldItems.push('\n');
 oldItems.push(Object.values(newItem)[0]);
    oldItems.push('\n');
      oldItems.push('\n');
   oldItems.push(Object.values(newItem)[1].join(""));
//   console.log(Object.values(newItem)[1].join(""))
      oldItems.push('\n');
//PROBLEM IS HERE 8/27 ^^^^^^^^^ fixed by adding join statement in json.parse
      oldItems.push(Object.values(newItem)[2]);
        oldItems.push('\n');

        oldItems.push(Object.values(newItem)[3]);
    oldItems.push('\n');

            oldItems.push(Object.values(newItem)[4]);
        oldItems.push('\n');
        oldItems.push('\n');

oldItems.push("Resources:");
oldItems.push('\n');

          oldItems.push((Object.values(newItem)[5]).join("\n"));
          oldItems.push('\n');
            oldItems.push('\n');

            oldItems.push("Links:");
                      oldItems.push('\n');
            oldItems.push((Object.values(newItem)[6]).join("\n"));
            oldItems.push('\n');
oldItems.push('\n');
//solved formatting issue with https://stackoverflow.com/questions/4253367/how-to-escape-a-json-string-containing-newline-characters-using-javascript
//var str = JSON.stringify(oldItems.join(""), undefined, 4);
var str = JSON.stringify(oldItems)
this.output(str);
//sessionStorage.setItem('itemsArray', JSON.stringify(oldItems,null, 2));

var cond = sessionStorage.setItem('show',true);

   this.setState({show: cond})
document.location.reload(true)
}
output = (inp) => {
    //document.body.appendChild(document.createElement('pre')).innerHTML = inp;
    sessionStorage.setItem('itemsArray', inp);
//    console.log(JSON.parse(sessionStorage.getItem('itemsArray')))
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
  return <div data-html2canvas-ignore="true">
  <Button  color="primary" onClick={() => { this.save_log(q) }}>Save</Button>
  </div>
}
}

save_log = (q) =>{
window.html2canvas = html2canvas;
    if(sessionStorage.getItem('itemsArray') == null){

    }
    else{
       var doc = new pdfConverter();


       doc.setFontSize(20);
         doc.text("Digital Copyright Wizard", 5, 10)
         doc.setFont("Georgia");
         doc.setFontSize(14);
           doc.text("Questions?", 110, 5)
       doc.text("Contact the OSU Research Data Services at", 110, 10)
       doc.text("researchdataservices@oregonstate.edu", 110, 15)
       var pageHeight= doc.internal.pageSize.height;


       var splitTitle = doc.splitTextToSize(JSON.parse(sessionStorage.getItem('itemsArray')).join(""), 220);
       //fixed by doing .join ""
//PROBLEM IS THE ARRAY CREATED !!!!RHUWEIHRUIEOWHRUOIEWHR https://stackoverflow.com/questions/45780708/how-do-i-create-multiline-text-and-page-split-in-jspdf
      var text = doc.getTextDimensions(splitTitle)
    console.log(pageHeight);


doc.setFontSize(11);
var y = 20;
   for (var i=0; i<splitTitle.length; i++){
       if (y > 275){
           y = 20;
           doc.addPage();
       }

       doc.text(15, y, splitTitle[i]);

       y = y + 5;
   }
   doc.save('DCwizard.pdf');

}
}
finalsteps = (q) =>{
  var i;
  var j;
  var arr = [];
  for(i = 0;i<q.questionorigin.length; i++){
    for(j = 0; j<Object.values(data).length; j++){
    if(q.questionorigin[i] === Object.values(data)[j].questionid){

        arr.push((i+1)+'.'+' ')
    arr.push(Object.values(data)[j].questionTitle);

      arr.push(" ")
    arr.push('\u2192')
        arr.push(' ')
      }
  }
}
  arr.push((q.questionorigin.length + 1)+'.'+' ')
  arr.push(q.questionTitle);

  return arr;
}
parseresource = (q) =>{

  return(<div>
    <ol reversed className = "tabbing">
    <li >  <a href={q.explanationlink[14]} style={{ textDecoration: 'underline' }}  target="_blank">{q.explanationresources[14]}</a>
    </li>
    <li> <a href={q.explanationlink[13]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[13]}</a>
  </li>
  <li>    <a href={q.explanationlink[12]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[12]}</a>
  </li>
  <li>    <a href={q.explanationlink[11]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[11]}</a>
  </li>
    <li>   <a href={q.explanationlink[10]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[10]}</a>
  </li>
      <li>  <a href={q.explanationlink[9]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[9]}</a>
  </li>
      <li> <a href={q.explanationlink[8]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[8]}</a>
  </li>
    <li>     <a href={q.explanationlink[7]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[7]}</a>
  </li>
    <li>       <a href={q.explanationlink[6]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[6]}</a>
  </li>
      <li>     <a href={q.explanationlink[5]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[5]}</a>
  </li>
      <li>   <a href={q.explanationlink[4]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[4]}</a>
  </li>
      <li><a href={q.explanationlink[3]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[3]}</a>
  </li>
      <li>    <a href={q.explanationlink[2]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[2]}</a>
  </li>
        <li>   <a href={q.explanationlink[1]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[1]}</a>
  </li>
  <li>  <a href={q.explanationlink[0]} style={{ textDecoration: 'underline' }} target="_blank">{q.explanationresources[0]}</a>
  </li>
  </ol>
  </div>

  )
}

    render() {



    return (

<Route>
<div className = "heading" >
<div className="titlemove">
<h1 className = "titlebg" >
          <a target="_blank" rel="noopener noreferrer" href="//oregonstate.edu">     <img className = "imgpic" src="https://library.oregonstate.edu/sites/all/themes/doug-fir-d7-library/logo.svg" alt="osu" width="100" height="100"></img></a>   <a className = "titlename" href="/">   <span className="titlehide"> Data Sharing Wizard</span></a>
 <p className="contactheader">Questions?<br/>
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
              <pre className="description">{q.finished}</pre>
              <h6>   Resources:</h6><h6>{this.parseresource(q)}</h6>

              <h5 >Final Steps:</h5>
        <p className="finalsteps">  {this.finalsteps(q)}</p>

</div>

<ul className="endbuttons">
  <li className="new">{this.export_step_button(q)}  </li>
   <li className="new"><Link to="/"><Button className = "buttonmarg" >Home</Button></Link>  </li>


  <li className="newt">  <div  > <Link to="/" ><Button className="reset" outline onClick={  this.clear_storage} id="TooltipExample">   <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggleTool}>
          Only click this if you want to clear the step log and your previous inputs!
        </Tooltip> Reset   </Button></Link></div>  </li>
</ul>


              </div>

            }
            if(window.location.pathname === "/"){
              return<div >
                {this.log(q)}
  {this.traverser(q)}
              <h4>Question about Data Usage?</h4>
              <h3>Click below to start</h3>
<div className="bod">
  <Row>
             <Col><Link to={process.env.PUBLIC_URL + q.optionlink[0]}><Button  color="danger" style={{background: this.chosen_color_0(q),  border: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}}>{q.option[0]}</Button></Link>
              <p>{q.questioninfo[0]} </p></Col>

             <Col><Link to={process.env.PUBLIC_URL + q.optionlink[1]}><Button  color="danger" style={{background: this.chosen_color_1(q) ,  border: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.option[1]}</Button></Link>
              <p> {q.questioninfo[1]} </p></Col>
               <Col><Link to={process.env.PUBLIC_URL + q.optionlink[2]}><Button  color="danger" style={{background: this.chosen_color_2(q) ,  border: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)} }>{q.option[2]}</Button></Link>
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

                            if(q.numoptions === 1){

                           return<div >
                             {this.log(q)}
                  {this.traverser(q)}
                  {this.title(q)}
              <div className="mainq">
                        <h4>Information: {q.question}</h4>



               <ul className="header">


                        <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button className="but-wrap"   size="lg" style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>


                        </ul>
                          <h6>     Explanation: </h6>    <pre className="description"> {q.explanation} </pre>
                          <h6>   Resources:</h6><h6>{this.parseresource(q)}</h6>

              </div>
                      </div>
                    }


              if(q.numoptions === 2){

             return<div >
               {this.log(q)}
    {this.traverser(q)}
    {this.title(q)}
<div className="mainq">
          <h4>Question: {q.question}</h4>



 <ul className="header">


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button className="but-wrap" size="lg" style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>

          </ul>
            <h6>     Explanation: </h6>   <pre className="description"> {q.explanation} </pre>
            <h6>   Resources:</h6><h6>{this.parseresource(q)}</h6>

</div>
        </div>
      }


        else if(q.numoptions === 3){

          return<div className = "format">
          {this.log(q)}
   {this.traverser(q)}
   {this.title(q)}
<div className="mainq">
           <h4>Question: {q.question}</h4>

          <ul className="header">


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button className="but-wrap"  size="lg"  style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

        <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


        <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>

       </ul>
       <h6>     Explanation: </h6>    <pre className="description">{q.explanation} </pre>
       <h6>   Resources:</h6><h6>{this.parseresource(q)}</h6>
   </div>
     </div>

        }

        else if(q.numoptions === 4){

          return<div className = "format">
          {this.log(q)}
   {this.traverser(q)}
   {this.title(q)}
<div className="mainq">

          <ul className="header">



          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button  className="but-wrap"  size="lg" style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>
          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></Link></li>

       </ul>
       <h6>     Explanation: </h6>    <pre className="description"> {q.explanation} </pre>
       <h6>   Resources:</h6><h6>{this.parseresource(q)}</h6>
     </div>
</div>
        }
        else if(q.numoptions === 5){

          return<div className = "format">
          {this.log(q)}
   {this.traverser(q)}
   {this.title(q)}
   <div className="mainq">
          <ul className="header">


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>
          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid5.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_4(q)}} onClick={() => {this.question_show(q,4)}} >{q.optionid5.option}</Button></Link></li>

       </ul>
       <h6>     Explanation: </h6>    <pre className="description"> {q.explanation} </pre>
       <h6>   Resources:</h6><h6>{this.parseresource(q)}</h6>
     </div>
</div>
        }
        else if(q.numoptions === 6){

          return<div className = "format">
          {this.log(q)}
   {this.traverser(q)}
   {this.title(q)}
   <div className="mainq">
          <ul className="header">


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>
          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button className="but-wrap"  ize="lg" style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid5.nextstepcontent}><Button className="but-wrap"  size="lg" style={{background: this.chosen_color_4(q)}} onClick={() => {this.question_show(q,4)}} >{q.optionid5.option}</Button></Link></li>
          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid6.nextstepcontent}><Button className="but-wrap" size="lg" style={{background: this.chosen_color_5(q)}} onClick={() => {this.question_show(q,5)}} >{q.optionid6.option}</Button></Link></li>

       </ul>
       <h6>     Explanation: </h6>   <pre className="description"> {q.explanation} </pre>
       <h6>   Resources:</h6><h6>{this.parseresource(q)}</h6>
     </div>
</div>
        }
        else if(q.numoptions === 7){

          return<div className = "format">
          {this.log(q)}
   {this.traverser(q)}
   {this.title(q)}
   <div className="mainq">
          <ul className="header">


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button className="but-wrap" size="lg" style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button className="but-wrap" size="lg" style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></Link></li>


          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid3.nextstepcontent}><Button className="but-wrap" size="lg" style={{background: this.chosen_color_2(q)}} onClick={() => {this.question_show(q,2)}} >{q.optionid3.option}</Button></Link></li>
          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid4.nextstepcontent}><Button className="but-wrap" size="lg" style={{background: this.chosen_color_3(q)}} onClick={() => {this.question_show(q,3)}} >{q.optionid4.option}</Button></Link></li>

          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid5.nextstepcontent}><Button className="but-wrap" size="lg" style={{background: this.chosen_color_4(q)}} onClick={() => {this.question_show(q,4)}} >{q.optionid5.option}</Button></Link></li>
          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid6.nextstepcontent}><Button className="but-wrap" size="lg" style={{background: this.chosen_color_5(q)}} onClick={() => {this.question_show(q,5)}} >{q.optionid6.option}</Button></Link></li>
          <li className ="space"><Link to={process.env.PUBLIC_URL + q.optionid7.nextstepcontent}><Button className="but-wrap" size="lg" style={{background: this.chosen_color_6(q)}} onClick={() => {this.question_show(q,6)}} >{q.optionid7.option}</Button></Link></li>

       </ul>
       <h6>     Explanation: </h6>    <pre className="description">{q.explanation} </pre>
       <h6>   Resources:</h6><h6>{this.parseresource(q)}</h6>
     </div>
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
