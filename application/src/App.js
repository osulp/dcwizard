import './App.css';
import React, { Component } from 'react';

import { Route, NavLink} from 'react-router-dom';

import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';


import data from './me_with_others_data.json';

class App extends Component {
  constructor (props) {


      super(props);
      this.state = {
        modal: false,



      };

  this.toggle = this.toggle.bind(this);

this.traverser = this.traverser.bind(this);
this.parsesteps = this.parsesteps.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

parsesteps(q){

return(<div>
  <NavLink to={process.env.PUBLIC_URL + q.questionorigin[0]} >{q.questionorigin[0]}</NavLink>
<br/>
    <NavLink to={process.env.PUBLIC_URL + q.questionorigin[1]} >{q.questionorigin[1]}</NavLink>
    <br/>
    <NavLink to={process.env.PUBLIC_URL + q.questionorigin[2]} >{q.questionorigin[2]}</NavLink>
    <br/>
    <NavLink to={process.env.PUBLIC_URL + q.questionorigin[3]} >{q.questionorigin[3]}</NavLink>
<br/>
      <NavLink to={process.env.PUBLIC_URL + q.questionorigin[4]} >{q.questionorigin[4]}</NavLink>
      <br/>
      <NavLink to={process.env.PUBLIC_URL + q.questionorigin[5]} >{q.questionorigin[5]}</NavLink>
      <br/>
      <NavLink to={process.env.PUBLIC_URL + q.questionorigin[6]} >{q.questionorigin[6]}</NavLink>
      <br/>

        <NavLink to={process.env.PUBLIC_URL + q.questionorigin[7]} >{q.questionorigin[7]}</NavLink>
        <br/>
        <NavLink to={process.env.PUBLIC_URL + q.questionorigin[8]} >{q.questionorigin[8]}</NavLink>
        <br/>
        <NavLink to={process.env.PUBLIC_URL + q.questionorigin[9]} >{q.questionorigin[9]}</NavLink>
        <br/>
        <NavLink to={process.env.PUBLIC_URL + q.questionorigin[10]} >{q.questionorigin[10]}</NavLink>
        <br/>
        <NavLink to={process.env.PUBLIC_URL + q.questionorigin[11]} >{q.questionorigin[11]}</NavLink>
        <br/>
        <NavLink to={process.env.PUBLIC_URL + q.questionorigin[12]} >{q.questionorigin[12]}</NavLink>
        <br/>
        <NavLink to={process.env.PUBLIC_URL + q.questionorigin[13]} >{q.questionorigin[13]}</NavLink>
        <br/>
        <NavLink to={process.env.PUBLIC_URL + q.questionorigin[14]} >{q.questionorigin[14]}</NavLink>

</div>)


}
traverser(q){

  if(window.location.pathname === q.questionid){
    return(

   <h1 className ="title"><h4>Current Step:</h4><h4 className="color">{process.env.PUBLIC_URL + q.questionid}</h4> <h4>Previous Steps:</h4>{this.parsesteps(q)}

    </h1>


  )
}

}

question_show = (q,type) =>{


  if(type === 0){



    if(sessionStorage.getItem(q.questionid) === '1'  ) {


    var i;
    for (i = 0; i < Object.keys(q.optionid2.clearsteps).length; i++) {
      sessionStorage.setItem(q.optionid2.clearsteps[i], null);
    console.log(q.optionid2.clearsteps[i])
}



    }

    //focus on bottom part later
    /*
    else if(sessionStorage.getItem(q.questionid) === '2'){
          sessionStorage.setItem(q.optionid3.nextstepcontent, null);
          sessionStorage.setItem(q.questionid, '0');

        }
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

console.log(sessionStorage.getItem(q.questionid))

    }

else if(type === 1){

  if(sessionStorage.getItem(q.questionid) === '0'){

    for (i = 0; i < Object.keys(q.optionid1.clearsteps).length; i++) {
      sessionStorage.setItem(q.optionid1.clearsteps[i], null);
    console.log(q.optionid1.clearsteps[i])
  }

  }
  //focus on bottom part later
/*  else if(sessionStorage.getItem(q.questionid) === '2'){
        sessionStorage.setItem(q.optionid3.nextstepcontent, null);
        sessionStorage.setItem(q.questionid, '1');

      }
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

clear_storage = () =>{
  sessionStorage.clear();

}


    render() {



    return (

<Route>
<div className = "format" >

<h1 className = "titlebg" >
                 <img className = "img" src="https://osulibrary.oregonstate.edu/sites/all/themes/doug-fir-d7-library/logo.svg" alt="osu" width="100" height="100"></img> DC Wizard <NavLink to="/"><Button className = "Restart" onClick={  this.clear_storage}>Restart</Button></NavLink></h1>



                 {
                 data.map((q) =>  {
     while(q.questionid === window.location.pathname){

            if(q.questionid.indexOf('done') >= 0){
              return<div className = "format">
              {this.traverser(q)}
              <h5> You are done! </h5>
              <p>{q.finished}</p>

              </div>
            }
            if(window.location.pathname === "/"){
              return<div className = "format">
              {this.traverser(q)}
              <h4>Question about Data Usage?</h4>
              <p>Click below to start</p>
              <li><NavLink to={process.env.PUBLIC_URL + q.optionlink[0]}><Button  >{q.option[0]}</Button></NavLink></li>

              <li><NavLink to={process.env.PUBLIC_URL + q.optionlink[1]}><Button  >{q.option[1]}</Button></NavLink></li>
              <li><NavLink to={process.env.PUBLIC_URL + q.optionlink[2]}><Button  >{q.option[2]}</Button></NavLink></li>


              </div>
            }

            else{
              if(q.numoptions === 2){

             return<div className = "format">
    {this.traverser(q)}
             <h5>Question: {q.question}</h5>




             <ul className="header">

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid1.nextstepcontent}><Button style={{background: this.chosen_color_0(q)}} onClick={() => {this.question_show(q,0)}} >{q.optionid1.option}</Button></NavLink></li>

          <li><NavLink to={process.env.PUBLIC_URL + q.optionid2.nextstepcontent}><Button style={{background: this.chosen_color_1(q)}} onClick={() => {this.question_show(q,1)}} >{q.optionid2.option}</Button></NavLink></li>


          </ul>
        <h6>   Resources:</h6> <p>{q.explanationresources}</p>

            <h6>     Explanation: </h6>   <p> {q.explanation} </p>
        </div>
      }
        else if(q.numoptions === 3){

          return<div>

          <h1>Printing out from Json: {q.question}</h1>
          <div className="navigationButtonsLeft">
          <NavLink to={q.questionorigin}><Button >&lt; Back</Button></NavLink>

             </div>
          <Button on >  <div className = "buttondiv">More Info</div></Button>
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

        else if(q.numoptions === 4){

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
        else if(q.numoptions === 5){

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
        else if(q.numoptions === 6){

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
        else if(q.numoptions === 7){

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
