import "./App.css";
import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
import { Tooltip } from "reactstrap";
import { Modal } from "reactstrap";
import { Button } from "reactstrap";
import { ModalHeader } from "reactstrap";
import { ModalBody } from "reactstrap";
import SimpleBar from "simplebar-react";
import { ModalFooter, Row, Col } from "reactstrap";
import pdfConverter from "jspdf";
import data from "./database.json";

class App extends Component {
  constructor(props) {
    //the cond gets a show type variable item which will pop up the Step Log when true.
    var cond = sessionStorage.getItem("show");
    if (cond === null) {
      console.log("was null setting to false");
      cond = false;
    } else {
      cond = JSON.parse(cond);
    }
    //the cond1 gets a mod type variable item which will pop up the Modal at the beginning for terms and conditions when true.

    var cond1 = sessionStorage.getItem("mod");
    if (cond1 === null) {
      console.log("was null setting to true");
      cond1 = true;
      sessionStorage.setItem("mod", cond1);
    } else {
      cond1 = JSON.parse(cond1);
      sessionStorage.setItem("mod", cond1);
    }
    super(props);
    this.state = {
      show: cond,
      tooltipOpen: false,
      modal: cond1,
    };
  }
  toggleT = () => {
    //This shows the Step log button function
    sessionStorage.setItem("show", true);
    var cond = sessionStorage.getItem("show");
    if (cond === null) {
      console.log("was null setting to true");
      cond = true;
    } else {
      cond = JSON.parse(cond);
    }
    this.setState({ show: cond });
  };
  toggleTool = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  hideT = () => {
    //this hides the step log button function
    sessionStorage.setItem("show", false);
    var cond = sessionStorage.getItem("show");
    if (cond === null) {
      console.log("was null setting to false");
      cond = false;
    } else {
      cond = JSON.parse(cond);
    }
    this.setState({ show: cond });
  };

  parsesteps = (q, questionok, questionurl) => {
    /*******
    Input: Questionid and questiontitle in JSON.
    Output: The labels and links on the left side sidebar which are used to traverse through the page.
    description: This reveals the sidebar links on the left side bar


    *******/
    var questionjoin = questionok.reverse();
    var questiontog = questionurl.reverse();

    return (
      <div>
        <ol reversed className="tabbing">
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[14]}
              style={{
                color: this.step_highlight15(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[14]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[13]}
              style={{
                color: this.step_highlight14(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[13]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[12]}
              style={{
                color: this.step_highlight13(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[12]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[11]}
              style={{
                color: this.step_highlight12(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[11]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[10]}
              style={{
                color: this.step_highlight11(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[10]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[9]}
              style={{
                color: this.step_highlight10(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[9]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[8]}
              style={{
                color: this.step_highlight9(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[8]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[7]}
              style={{
                color: this.step_highlight8(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[7]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[6]}
              style={{
                color: this.step_highlight7(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[6]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[5]}
              style={{
                color: this.step_highlight6(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[5]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[4]}
              style={{
                color: this.step_highlight5(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[4]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[3]}
              style={{
                color: this.step_highlight4(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[3]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[2]}
              style={{
                color: this.step_highlight3(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[2]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[1]}
              style={{
                color: this.step_highlight2(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[1]}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={process.env.PUBLIC_URL + questiontog[0]}
              style={{
                color: this.step_highlight1(questiontog),
                textDecoration: "underline"
              }}
            >
              {questionjoin[0]}
            </Link>
          </li>
        </ol>
      </div>
    );
  };
  step_highlight1 = questionstep => {
    /*************
    Input: questionstep is an array from the questiontog from parsesteps() function
    Output: returns orange tint in the left sidebar when on step.
    Description: Any path created is turned to orange on the left hand side

    *******************/
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[0]) {
        return "#D73F09";
      }
    }
  };
  step_highlight2 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[1]) {
        return "#D73F09";
      }
    }
  };
  step_highlight3 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[2]) {
        return "#D73F09";
      }
    }
  };
  step_highlight4 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[3]) {
        return "#D73F09";
      }
    }
  };
  step_highlight5 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[4]) {
        return "#D73F09";
      }
    }
  };
  step_highlight6 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[5]) {
        return "#D73F09";
      }
    }
  };
  step_highlight7 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[6]) {
        return "#D73F09";
      }
    }
  };
  step_highlight8 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[7]) {
        return "#D73F09";
      }
    }
  };
  step_highlight9 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[8]) {
        return "#D73F09";
      }
    }
  };
  step_highlight10 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[9]) {
        return "#D73F09";
      }
    }
  };
  step_highlight11 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[10]) {
        return "#D73F09";
      }
    }
  };
  step_highlight12 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[11]) {
        return "#D73F09";
      }
    }
  };
  step_highlight13 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[12]) {
        return "#D73F09";
      }
    }
  };
  step_highlight14 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[13]) {
        return "#D73F09";
      }
    }
  };
  step_highlight15 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[14]) {
        return "#D73F09";
      }
    }
  };
  step_highlight16 = questionstep => {
    for (var i = 0; i < questionstep.length; i++) {
      if (window.location.pathname === questionstep[15]) {
        return "#D73F09";
      }
    }
  };
  question_show = (q, type) => {
    /*******
    Input: q as in the whole JSON file and type which is a number to show how many question answer options there are.

    Output: To store the questionid in the sessionStorage storage which will store the information to the left side
    bar when clicking a step-next button. Then once you change your option it will remove the future steps from the left sidebar.

    *****************/
    var i;
    var arr = [];
    if (type === 0) {
      if (sessionStorage.getItem(q.questionid) !== "0") {
        arr = []; // Array to hold the keys
        // Iterate over localStorage and insert the keys that meet the condition into arr
        for (i = 0; i < sessionStorage.length; i++) {
          console.log(
            "what is in session storage" + sessionStorage.key(i).substring()
          );
          console.log("what is current question" + q.questionid);

          if (sessionStorage.key(i).includes(q.questionid)) {
            arr.push(sessionStorage.key(i));
          }
        }

        // Iterate over arr and remove the items by key
        for (i = 0; i < arr.length; i++) {
          console.log("stuff in array being removed" + arr[i]);
          sessionStorage.removeItem(arr[i]);
        }
      }

      sessionStorage.setItem(q.questionid, "0");
    } else if (type === 1) {
      if (sessionStorage.getItem(q.questionid) !== "1") {
        arr = []; // Array to hold the keys
        // Iterate over localStorage and insert the keys that meet the condition into arr
        for (i = 0; i < sessionStorage.length; i++) {
          console.log(
            "what is in session storage" + sessionStorage.key(i).substring()
          );
          console.log("what is current question" + q.questionid);
          if (sessionStorage.key(i).includes(q.questionid)) {
            arr.push(sessionStorage.key(i));
            console.log("stuff being added to array" + arr[i]);
          }
        }

        // Iterate over arr and remove the items by key
        for (i = 0; i < arr.length; i++) {
          console.log("stuff in array being removed" + arr[i]);
          sessionStorage.removeItem(arr[i]);
        }
      }

      sessionStorage.setItem(q.questionid, "1");
    } else if (type === 2) {
      if (sessionStorage.getItem(q.questionid) !== "2") {
        arr = []; // Array to hold the keys
        // Iterate over localStorage and insert the keys that meet the condition into arr
        for (i = 0; i < sessionStorage.length; i++) {
          console.log(
            "what is in session storage" + sessionStorage.key(i).substring()
          );
          console.log("what is current question" + q.questionid);
          if (sessionStorage.key(i).includes(q.questionid)) {
            arr.push(sessionStorage.key(i));
          }
        }

        // Iterate over arr and remove the items by key
        for (i = 0; i < arr.length; i++) {
          console.log("stuff in array being removed" + arr[i]);

          sessionStorage.removeItem(arr[i]);
        }
      }

      sessionStorage.setItem(q.questionid, "2");
    } else if (type === 3) {
      if (sessionStorage.getItem(q.questionid) !== "3") {
        arr = []; // Array to hold the keys
        // Iterate over localStorage and insert the keys that meet the condition into arr
        for (i = 0; i < sessionStorage.length; i++) {
          console.log(
            "what is in session storage" + sessionStorage.key(i).substring()
          );
          console.log("what is current question" + q.questionid);
          if (sessionStorage.key(i).includes(q.questionid)) {
            arr.push(sessionStorage.key(i));
          }
        }

        // Iterate over arr and remove the items by key
        for (i = 0; i < arr.length; i++) {
          console.log("stuff in array being removed" + arr[i]);

          sessionStorage.removeItem(arr[i]);
        }
      }
      sessionStorage.setItem(q.questionid, "3");
    } else if (type === 4) {
      if (sessionStorage.getItem(q.questionid) !== "4") {
        arr = []; // Array to hold the keys
        // Iterate over localStorage and insert the keys that meet the condition into arr
        for (i = 0; i < sessionStorage.length; i++) {
          console.log(
            "what is in session storage" + sessionStorage.key(i).substring()
          );
          console.log("what is current question" + q.questionid);
          if (sessionStorage.key(i).includes(q.questionid)) {
            arr.push(sessionStorage.key(i));
          }
        }

        // Iterate over arr and remove the items by key
        for (i = 0; i < arr.length; i++) {
          console.log("stuff in array being removed" + arr[i]);

          sessionStorage.removeItem(arr[i]);
        }
      }
      sessionStorage.setItem(q.questionid, "4");
    } else if (type === 5) {
      if (sessionStorage.getItem(q.questionid) !== "5") {
        arr = []; // Array to hold the keys
        // Iterate over localStorage and insert the keys that meet the condition into arr
        for (i = 0; i < sessionStorage.length; i++) {
          console.log(
            "what is in session storage" + sessionStorage.key(i).substring()
          );
          console.log("what is current question" + q.questionid);
          if (sessionStorage.key(i).includes(q.questionid)) {
            arr.push(sessionStorage.key(i));
          }
        }

        // Iterate over arr and remove the items by key
        for (i = 0; i < arr.length; i++) {
          console.log("stuff in array being removed" + arr[i]);

          sessionStorage.removeItem(arr[i]);
        }
      }
      sessionStorage.setItem(q.questionid, "5");
    } else if (type === 6) {
      if (sessionStorage.getItem(q.questionid) !== "6") {
        arr = []; // Array to hold the keys
        // Iterate over localStorage and insert the keys that meet the condition into arr
        for (i = 0; i < sessionStorage.length; i++) {
          console.log(
            "what is in session storage" + sessionStorage.key(i).substring()
          );
          console.log("what is current question" + q.questionid);
          if (sessionStorage.key(i).includes(q.questionid)) {
            arr.push(sessionStorage.key(i));
          }
        }

        // Iterate over arr and remove the items by key
        for (i = 0; i < arr.length; i++) {
          console.log("stuff in array being removed" + arr[i]);

          sessionStorage.removeItem(arr[i]);
        }
      }
      sessionStorage.setItem(q.questionid, "6");
    }
  };
  chosen_color_0 = q => {
  /********
  Input: q as the the whole json file

  Output: The blue or grey color of the buttons.

  Description: This is detected by checking the sessionStorage key of q.questionid (current Question)
  and checks if the current question has a number stored in it which corresponds with what button.
  (0 is the first button, 1 is the second, etc...). This is the same for all chosen_color
  ********/
    if (sessionStorage.getItem(q.questionid) === "0") {
      return "#007bff";
    } else {
      return "";
    }
  };

  chosen_color_1 = q => {
    if (sessionStorage.getItem(q.questionid) === "1") {
      return "#007bff";
    } else {
      return "";
    }
  };
  chosen_color_2 = q => {
    if (sessionStorage.getItem(q.questionid) === "2") {
      return "#007bff";
    } else {
      return "";
    }
  };
  chosen_color_3 = q => {
    if (sessionStorage.getItem(q.questionid) === "3") {
      return "#007bff";
    } else {
      return "";
    }
  };
  chosen_color_4 = q => {
    if (sessionStorage.getItem(q.questionid) === "4") {
      return "#007bff";
    } else {
      return "";
    }
  };
  chosen_color_5 = q => {
    if (sessionStorage.getItem(q.questionid) === "5") {
      return "#007bff";
    } else {
      return "";
    }
  };
  chosen_color_6 = q => {
    if (sessionStorage.getItem(q.questionid) === "6") {
      return "#007bff";
    } else {
      return "";
    }
  };

  clear_storage = () => {
    /****
    Input: Nothing
    Output: clears the session storage (THIS IS CALLED WHENEVER THE RESET BUTTON IS CLICKED ON THE FINAL PAGE)
    ****/
    sessionStorage.clear();
    sessionStorage.setItem("mod", false);
    //We set the warning popup modal to false because we assume the user already read the modal if they clicked reset
    //document.location.reload(true);
  };
  title = q => {

    /*******
    Input: q as the whole json files

    output: to get the title name in each question type
    Resources:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    used that to learn about object values
    not supported on internet explorer (supported on microsoft edge)

    ************/
    if (q.questionid.indexOf("/Q1") >= 0) {
      return (
        <div>
          {" "}
          <h4 className="q-title">Topic: {Object.values(data)[1].option[0]}</h4>
        </div>
      );
    } else if (q.questionid.indexOf("/Q2") >= 0) {
      return (
        <div>
          {" "}
          <h4 className="q-title">Topic: {Object.values(data)[1].option[1]}</h4>
        </div>
      );
    } else if (q.questionid.indexOf("/Q3") >= 0) {
      return (
        <div>
          {" "}
          <h4 className="q-title">Topic: {Object.values(data)[1].option[2]}</h4>
        </div>
      );
    }
  };
  show_loginfo = q => {
    /*******************
    Description: This holds the information in the step log
    *******************/
    if (sessionStorage.getItem("itemsArray") === null) {
      return;
    } else {
      return (
        <div>
          <SimpleBar
            data-simplebar-auto-hide="false"
            style={{ height: "350px" }}
          >
          <h5>Most recent save on: {sessionStorage.getItem("Time")}</h5>

            <p id="pdf"> {JSON.parse(sessionStorage.getItem("itemsArray"))}</p>
          </SimpleBar>
        </div>
      );
    }
  };
  timedisplay = q =>{
    /*******************
    Description: Displays the time to the steplog

    *******************/
    var d = new Date();
    var day = d.getDate().toString();
    var monthOrig = d.getMonth()+1;
    var month = monthOrig.toString();
    var year = d.getFullYear().toString();
    var hour = d.getHours();
    var realHour;
    if (hour === 0||hour === 12){
      realHour = 12;
    }
    if (hour === 13 || hour === 1){
      realHour = 1;
    }
    if (hour === 14|| hour === 2){
      realHour = 2;
    }
    if (hour === 15|| hour === 3){
      realHour = 3;
    }
    if (hour === 16|| hour === 4){
      realHour = 4;
    }
    if (hour === 17|| hour === 5){
      realHour = 5;
    }
    if (hour === 18|| hour === 6){
      realHour = 6;
    }
    if (hour === 19|| hour === 7){
      realHour = 7;
    }
    if (hour === 20|| hour === 8){
      realHour = 8;
    }
    if (hour === 21|| hour === 9){
      realHour = 9;
    }
    if (hour === 22|| hour === 10){
      realHour = 10;
    }
    if (hour === 23|| hour === 11){
      realHour = 11;
    }


    var ampm = "";
    if(hour >= 12){
      ampm = "PM"
    }
    else{
      ampm = "AM"
    }
    var minutes = d.getMinutes();
    var realMinutes;
    if(minutes >=0 && minutes < 10){
      realMinutes = "0" + minutes.toString();
    }
    else{
      realMinutes = minutes.toString();
    }
    sessionStorage.setItem("Time",month+"/"+day+"/"+year+" - "+ realHour+":"+realMinutes+" "+ ampm);
  }
  log = q => {
    var show = {
      display: this.state.show ? "block" : "none"
    };
    var hidden = {
      display: this.state.show ? "none" : "block"
    };

    if (window.location.pathname === q.questionid) {
      return (
        <div   className="openlogcontainer">
          <Button
            outline
            color="info"
            style={hidden}
            className="Restart"
            onClick={this.toggleT}
          >
            Show Step Log
          </Button>
          <div className="openlog" style={show}>
            <div className="log">
              <Button style={show} className="Hide_but" onClick={this.hideT}>
                Hide Step Log
              </Button>

              {this.save_log_button(q)}
              <h4 className="margin-top">Step Log: </h4>

              <div className="logcontainer">{this.show_loginfo(q)}</div>

              <div>
                {this.delete_log_button(q)}
                <p className="contactlog">
                  Questions?<br />
                  Contact the OSU Research Data Services at<br />researchdataservices@oregonstate.edu<br/>Website: http://dcwizard.library.oregonstate.edu/{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  delete_log_button = q => {
    if (sessionStorage.getItem("itemsArray") == null) {
    } else {
      return (
        <div>
          <Button
            outline
            color="danger"
            onClick={() => {
              sessionStorage.removeItem("itemsArray");
              document.location.reload(true);
            }}
          >
            Clear Log
          </Button>
        </div>
      );
    }
  };

  traverser(q) {
    /*****
    Input: q as whole json file

    Output: The container of the left-sidebar. It holds all the information for the leftsidebar which is the information is given by the function parsesteps()
    *****/

    var questionname = [];
    var questiontest = [];

    for (var j = 0; j < Object.values(data).length; j++) {
      var test = [];
      test = Object.values(data)[j].questionid;
      for (var k = 0; k < sessionStorage.length; k++) {
        if (Object.values(data)[j].questionid === sessionStorage.key(k)) {
          console.log("key from session storage" + sessionStorage.key(k));
          questionname.push(Object.values(data)[j].questionTitle);
          questiontest.push(Object.values(data)[j].questionid);
          console.log(test.includes(window.location.pathname));
        }
      }
    }
    var questionreverse = [];
    questionreverse = questionname.reverse();
    var questionurl = [];
    questionurl = questiontest.reverse();

    return (
      <div className="left-sidebar">
        <div className="title">
          <h4>Current Step:</h4>
          <h4 className="color">{q.questionTitle}</h4> <h4>Previous Steps:</h4>
          {this.parsesteps(q, questionreverse, questionurl)}
        </div>
      </div>
    );
  }

  export_step = q => {
    /***********
    Input: q as in the whole json file

    Output: Saves finalstep and questions to the steplog when save to log is clicked.

    ************/
    var questiontype;
    if (q.questionid.indexOf("/Q1") >= 0) {
      questiontype = Object.values(data)[1].option[0];
    } else if (q.questionid.indexOf("/Q2") >= 0) {
      questiontype = Object.values(data)[1].option[1];
    } else if (q.questionid.indexOf("/Q3") >= 0) {
      questiontype = Object.values(data)[1].option[2];
    }
    var questionstep = [];

    var i;
    var j;
    for (i = 0; i < sessionStorage.length; i++) {
      for (j = 0; j < Object.values(data).length; j++) {
        if (
          sessionStorage.key(i) === Object.values(data)[j].questionid &&
          sessionStorage.key(i) !== "/" &&
          !sessionStorage.key(i).includes("done")
        ) {
          questionstep.push(Object.values(data)[j].questionid);
          questionstep.push("\n");

          questionstep.push("\n");
          questionstep.push(Object.values(data)[j].questionTitle);
          questionstep.push("\n");

          questionstep.push("Question: " + Object.values(data)[j].question);
          questionstep.push("\n");
          for (var k = 0; k < sessionStorage.length; k++) {
            if (Object.values(data)[j].questionid === sessionStorage.key(k)) {
              console.log(sessionStorage.getItem(sessionStorage.key(k)));
              if (sessionStorage.getItem(sessionStorage.key(k)) === "0") {
                questionstep.push(
                  "Answer: " + Object.values(data)[j].optionid1.option
                );
              } else if (
                sessionStorage.getItem(sessionStorage.key(k)) === "0"
              ) {
                questionstep.push(
                  "Answer: " + Object.values(data)[j].optionid1.option
                );
              } else if (
                sessionStorage.getItem(sessionStorage.key(k)) === "1"
              ) {
                questionstep.push(
                  "Answer: " + Object.values(data)[j].optionid2.option
                );
              } else if (
                sessionStorage.getItem(sessionStorage.key(k)) === "2"
              ) {
                questionstep.push(
                  "Answer: " + Object.values(data)[j].optionid3.option
                );
              } else if (
                sessionStorage.getItem(sessionStorage.key(k)) === "3"
              ) {
                questionstep.push(
                  "Answer: " + Object.values(data)[j].optionid4.option
                );
              } else if (
                sessionStorage.getItem(sessionStorage.key(k)) === "4"
              ) {
                questionstep.push(
                  "Answer: " + Object.values(data)[j].optionid5.option
                );
              } else if (
                sessionStorage.getItem(sessionStorage.key(k)) === "5"
              ) {
                questionstep.push(
                  "Answer: " + Object.values(data)[j].optionid6.option
                );
              } else if (
                sessionStorage.getItem(sessionStorage.key(k)) === "6"
              ) {
                questionstep.push(
                  "Answer: " + Object.values(data)[j].optionid7.option
                );
              }
            }
          }
          questionstep.push("\n");

          questionstep.push(Object.values(data)[j].explanation);

          questionstep.push("\n");
          questionstep.push("\n");
if(    Object.values(data)[j].explanationresources.join("\n") !== ""){
          questionstep.push("Resources:");
          questionstep.push("\n");

          questionstep.push(
            Object.values(data)[j].explanationresources.join("\n")
          );
          questionstep.push("\n");
          questionstep.push("\n");

          questionstep.push("Links:");
          questionstep.push("\n");
          questionstep.push(Object.values(data)[j].explanationlink.join("\n"));
          questionstep.push("\n");

}
else{

}

          questionstep.push("\n");
          questionstep.push("\n");
          //console.log("if stored in array "+questionstep)
          //now that in array parse each step
        }
      }
    }

    //console.log("if stored in array "+questionstep.join(""))
    /****
    Olditems is used to append to the step log new steps.
    ****/
    var oldItems = JSON.parse(sessionStorage.getItem("itemsArray")) || [];
    /*****
    Newitem is a template when pushing it on th the oldItems array
    ******/
    var newItem = {
      Question: questiontype,
      "Past Steps": questionstep,

      "Question-id": q.questionid,

      "Question-title": q.questionTitle,

      Description: q.finished,
      resources: q.explanationresources,
      links: q.explanationlink
    };

    oldItems.push(
      "_______________________________________________________________________"
    );
    oldItems.push("\n");
    oldItems.push(Object.values(newItem)[0]);
    oldItems.push("\n");
    oldItems.push("\n");
    oldItems.push(Object.values(newItem)[1].join(""));
    //   console.log(Object.values(newItem)[1].join(""))
    oldItems.push("\n");
    //PROBLEM IS HERE 8/27 ^^^^^^^^^ fixed by adding join statement in json.parse
    oldItems.push(Object.values(newItem)[2]);
    oldItems.push("\n");

    oldItems.push(Object.values(newItem)[3]);
    oldItems.push("\n");

    oldItems.push(Object.values(newItem)[4]);
    oldItems.push("\n");
    oldItems.push("\n");
    console.log("empty? ", Object.values(newItem)[5]);
if(Object.values(newItem)[5].join("\n") !== ""){


    oldItems.push("Resources:");
    oldItems.push("\n");

    oldItems.push(Object.values(newItem)[5].join("\n"));
    oldItems.push("\n");
    oldItems.push("\n");

    oldItems.push("Links:");
    oldItems.push("\n");
    oldItems.push(Object.values(newItem)[6].join("\n"));
}

oldItems.push("\n");
oldItems.push("\n");
    //solved formatting issue with https://stackoverflow.com/questions/4253367/how-to-escape-a-json-string-containing-newline-characters-using-javascript
    //var str = JSON.stringify(oldItems.join(""), undefined, 4);
    var str = JSON.stringify(oldItems);
    this.output(str);
    //sessionStorage.setItem('itemsArray', JSON.stringify(oldItems,null, 2));

    var cond = sessionStorage.setItem("show", true);

    this.setState({ show: cond });
    document.location.reload(true);
  };
  output = inp => {
    /*******************
    Description: stores item in item array

    *******************/
    //document.body.appendChild(document.createElement('pre')).innerHTML = inp;
    sessionStorage.setItem("itemsArray", inp);
    //    console.log(JSON.parse(sessionStorage.getItem('itemsArray')))
  };
  export_step_button = q => {
    return (
      <div>
        <Button
          color="primary"
          className="buttonmarg"
          onClick={() => {
            this.timedisplay(q);
            this.export_step(q);
          }}
        >
          Save to Log
        </Button>
      </div>
    );
  };
  save_log_button = q => {
    if (sessionStorage.getItem("itemsArray") == null) {
    } else {
      return (
        <div>
          <Button
            color="primary"
            onClick={() => {
              this.save_log(q);
            }}
          >
            Download PDF
          </Button>
        </div>
      );
    }
  };

  save_log = q => {
    /***********
    input: q as in the database josn file
    output: the PDF of the step log

    ************/
    if (sessionStorage.getItem("itemsArray") == null) {
    } else {
      var doc = new pdfConverter();

      doc.setFontSize(20);
      doc.text("Digital Copyright Wizard", 15, 11);
      doc.setFont("Georgia");
      doc.setFontSize(9);
      doc.text("Questions?", 110, 5);
      doc.text("Contact the OSU Research Data Services at:", 110, 10);
      doc.text("researchdataservices@oregonstate.edu", 110, 15);
      doc.text("Website: http://dcwizard.library.oregonstate.edu/", 110, 20);

      doc.text("Saved at: " + sessionStorage.getItem("Time"), 165, 5);


      var splitTitle = doc.splitTextToSize(
        JSON.parse(sessionStorage.getItem("itemsArray")).join(""),
        150
      );
      //fixed by doing .join ""
      //PROBLEM IS THE ARRAY CREATED !!!!RHUWEIHRUIEOWHRUOIEWHR https://stackoverflow.com/questions/45780708/how-do-i-create-multiline-text-and-page-split-in-jspdf

      doc.setFontSize(11);
      var y = 20;
      for (var i = 0; i < splitTitle.length; i++) {
        if (y > 275) {
          y = 20;
          doc.addPage();
        }

        doc.text(15, y, splitTitle[i]);

        y = y + 5;
      }
      doc.save("DCwizard.pdf");
    }
  };
  /*******************
  Description: This shows the final steps on the finl page to see what steps you've taken to get to the final step
  *******************/
  finalsteps = q => {



    var arr = [];
    var counter = 0;
    //new


        for (var j = 0; j < Object.values(data).length; j++) {

          for (var k = 0; k < sessionStorage.length; k++) {
            if (Object.values(data)[j].questionid === sessionStorage.key(k)) {
              counter++;
              arr.push(counter  + ". ");
              arr.push(Object.values(data)[j].questionTitle);
              arr.push(" \u2192 ");

            }

          }
        }
arr.pop();
//removes the last arrow

        return arr;

//new

  };
  headingIfempty = q =>{
    /*******************
    Description: This makes sure the resoucres title of each question page is only shown if it has a resource

    *******************/
    for(var i = 0; i < 16; i ++){
      if(q.explanationlink[i]===""){
        return "";
      }
      else{
        return "Resources:";
      }
    }
  }
  parseresource = q => {
/******
input: q as whole database but more importantly eg.		"explanationresources": ["Creative commons licenses"], "explanationlink": ["https://creativecommons.org/licenses/"],
which will be used to put the resource link and name on each question if the question has Resources

Output: the resources that is shown on each question

******/
    return (
      <div>
        <h6>{this.headingIfempty(q)}</h6>
        <ol reversed className="tabbing">
          <li>
            {" "}
            <a
              href={q.explanationlink[14]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[14]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[13]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[13]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[12]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[12]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[11]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[11]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[10]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[10]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[9]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[9]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[8]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[8]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[7]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[7]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[6]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[6]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[5]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[5]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[4]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[4]}
            </a>
          </li>
          <li>
            <a
              href={q.explanationlink[3]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[3]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[2]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[2]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[1]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[1]}
            </a>
          </li>
          <li>
            {" "}
            <a
              href={q.explanationlink[0]}
              style={{ textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {q.explanationresources[0]}
            </a>
          </li>
        </ol>
      </div>
    );
  };
  toggle = () => {
    /****
    Input:none
    Output: terms and agreement modal popup at startup
    ****/
    sessionStorage.setItem("mod", false);
    var cond1 = sessionStorage.getItem("mod");
    if (cond1 === null) {
      console.log("was null setting to false");
      cond1 = false;
    } else {
      cond1 = JSON.parse(cond1);
    }
    this.setState({ modal: cond1 });
  };
  termsagreement = q => {
    /******
    Input: q
    Output: the information in the terms and agreement modal

    ******/
    if (sessionStorage.getItem("mod") === "true") {
      return (
        <div>
          <Modal isOpen={this.state.modal}>
            <ModalHeader>Terms and Conditions</ModalHeader>
            <ModalBody>
              Welcome! This tool is for educational purposes only. Please know
              that you should not use the wizard for decisions with legal
              bindings. Only judges can make such decisions in court.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                I agree
              </Button>{" "}
              <a href="https://library.oregonstate.edu/">
                {" "}
                <Button color="secondary">I disagree</Button>
              </a>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  };

  render() {
    /*****************
    Description: main page renderer. renders the whole page

    ********************/
    return (
      <Route>
        <div className="heading">
          <div className="titlemove">
            <h1 className="titlebg">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//oregonstate.edu"
              >
                {" "}
                <img
                  className="imgpic"
                  src="https://library.oregonstate.edu/sites/all/themes/doug-fir-d7-library/logo.svg"
                  alt="osu"
                  width="100"
                  height="100"
                />
              </a>{" "}

              <a
                onMouseEnter={this.handleTitleToggle}
                onMouseLeave={this.handleTitleToggle}
                className="titlename"
                href="/"
              >

                  <span className="titlehide"> Data Sharing Wizard</span>

              </a>
              <p className="contactheader">
                Questions?<br />
                Contact the OSU Research Data Services at<br />researchdataservices@oregonstate.edu{" "}
              </p>
            </h1>
          </div>

          {//http://4dev.tech/2017/12/how-to-load-a-json-file-in-reactjs/
          //learned about data.map here below
          /*****************
          data.map(q=>....) the data part of this is named at the top of this code page which is database.json
          data.map is used to create a struct similar to c++
          used in react to load the json file in
          ******************/
          data.map(q => {
            while (q.questionid === window.location.pathname) {
              console.log(sessionStorage.getItem("mod"));
              //fix?
              //error here only if numoptionns isn't set in the json file
              if (q.questionid.indexOf("done") >= 0) {
                sessionStorage.setItem(q.questionid, "final");
                return (
                  <div key={q.questionid.indexOf("done")} className="format">
                    {this.log(q)}

                    {this.traverser(q)}
                    {this.termsagreement(q)}
                    <div className="main-body">
                      {this.title(q)}

                      <pre className="description">{q.finished}</pre>
                      <div className="bottomcontainer">

                        <h6>{this.parseresource(q)}</h6>

                        <p className="finalsteps"> {this.finalsteps(q)}</p>
                      </div>
                    </div>

                    <ul className="endbuttons">
                      <li className="new">{this.export_step_button(q)} </li>
                      <li className="new">

                      </li>

                      <li className="newt">
                        {" "}
                        <div>
                          {" "}
                          <Link to={process.env.PUBLIC_URL}  >
                            <Button
                              className="reset"
                              outline
                              onClick={this.clear_storage}
                              id="TooltipExample"
                            >
                              {" "}
                              <Tooltip
                                placement="bottom"
                                isOpen={this.state.tooltipOpen}
                                target="TooltipExample"
                                toggle={this.toggleTool}
                              >
                                Only click this if you want to clear the step
                                log and your previous inputs!
                              </Tooltip>{" "}
                              Reset{" "}
                            </Button>
                          </Link>
                        </div>{" "}
                      </li>
                    </ul>
                  </div>
                );
              }
              if (window.location.pathname === "/") {
                return (
                  <div key={window.location.pathname}>
                    {this.log(q)}
                    {this.traverser(q)}

                    {this.termsagreement(q)}

                    <h4>Question about Data Usage?</h4>
                    <h3>Click below to start</h3>
                    <div className="bod">
                      <Row>
                        <Col className="col-Style">
                          <Link to={process.env.PUBLIC_URL + q.optionlink[0]}>
                            <Button
                              color="danger"
                              style={{
                                background: this.chosen_color_0(q),
                                border: this.chosen_color_0(q),
                                whiteSpace:"normal"

                              }}
                              onClick={() => {
                                this.question_show(q, 0);
                              }}
                            >
                              {q.option[0]}
                            </Button>
                          </Link>
                          <p>{q.questioninfo[0]} </p>
                        </Col>

                        <Col className="col-Style">
                          <Link to={process.env.PUBLIC_URL + q.optionlink[1]}>
                            <Button
                              color="danger"
                              style={{
                                background: this.chosen_color_1(q),
                                border: this.chosen_color_1(q),
                                    whiteSpace:"normal"
                              }}
                              onClick={() => {
                                this.question_show(q, 1);
                              }}
                            >
                              {q.option[1]}
                            </Button>
                          </Link>
                          <p> {q.questioninfo[1]} </p>
                        </Col>
                        <Col className="col-Style">
                          <Link to={process.env.PUBLIC_URL + q.optionlink[2]}>
                            <Button
                              color="danger"
                              style={{
                                background: this.chosen_color_2(q),
                                border: this.chosen_color_2(q),
                                    whiteSpace:"normal"
                              }}
                              onClick={() => {
                                this.question_show(q, 2);
                              }}
                            >
                              {q.option[2]}
                            </Button>
                          </Link>
                          <p>{q.questioninfo[2]} </p>{" "}
                        </Col>
                      </Row>
                      <div className="warning">
                        <h5> Warning!</h5>
                        <p>{q.warninginfo} </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                console.log("here?")
                if (q.numoptions === 1) {
                  return (
                    <div key={q.numoptions}>
                      {this.log(q)}
                      {this.traverser(q)}
                      {this.title(q)}
                      {this.termsagreement(q)}
                      <div className="mainq">
                        <h4>Information: {q.question}</h4>
                        <ul className="header">
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid1.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_0(q) }}
                                onClick={() => {
                                  this.question_show(q, 0);
                                }}
                              >
                                {q.optionid1.option}
                              </Button>
                            </Link>
                          </li>
                        </ul>
                        <h6> Explanation: </h6>{" "}
                        <pre className="description"> {q.explanation} </pre>
                        <h6>{this.parseresource(q)}</h6>
                      </div>
                    </div>
                  );
                }

                if (q.numoptions === 2) {
                  return (
                    <div key={q.numoptions}>
                      {this.log(q)}
                      {this.traverser(q)}
                      {this.title(q)}
                      {this.termsagreement(q)}
                      <div className="mainq">
                        <h4>Question: {q.question}</h4>
                        <ul className="header">
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid1.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_0(q) }}
                                onClick={() => {
                                  this.question_show(q, 0);
                                }}
                              >
                                {q.optionid1.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid2.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_1(q) }}
                                onClick={() => {
                                  this.question_show(q, 1);
                                }}
                              >
                                {q.optionid2.option}
                              </Button>
                            </Link>
                          </li>
                        </ul>
                        <h6> Explanation: </h6>{" "}
                        <pre className="description"> {q.explanation} </pre>
                        <h6>{this.parseresource(q)}</h6>
                      </div>
                    </div>
                  );
                } else if (q.numoptions === 3) {
                  return (
                    <div key={q.numoptions} className="format">
                      {this.log(q)}
                      {this.traverser(q)}
                      {this.title(q)}
                      {this.termsagreement(q)}
                      <div className="mainq">
                        <h4>Question: {q.question}</h4>
                        <ul className="header">
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid1.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_0(q) }}
                                onClick={() => {
                                  this.question_show(q, 0);
                                }}
                              >
                                {q.optionid1.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid2.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_1(q) }}
                                onClick={() => {
                                  this.question_show(q, 1);
                                }}
                              >
                                {q.optionid2.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid3.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_2(q) }}
                                onClick={() => {
                                  this.question_show(q, 2);
                                }}
                              >
                                {q.optionid3.option}
                              </Button>
                            </Link>
                          </li>
                        </ul>
                        <h6> Explanation: </h6>{" "}
                        <pre className="description">{q.explanation} </pre>
                        <h6>{this.parseresource(q)}</h6>
                      </div>
                    </div>
                  );
                } else if (q.numoptions === 4) {
                  return (
                    <div key={q.numoptions} className="format">
                      {this.log(q)}
                      {this.traverser(q)}
                      {this.title(q)}
                      {this.termsagreement(q)}
                      <div className="mainq">
                        <ul className="header">
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid1.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_0(q) }}
                                onClick={() => {
                                  this.question_show(q, 0);
                                }}
                              >
                                {q.optionid1.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid2.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_1(q) }}
                                onClick={() => {
                                  this.question_show(q, 1);
                                }}
                              >
                                {q.optionid2.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid3.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_2(q) }}
                                onClick={() => {
                                  this.question_show(q, 2);
                                }}
                              >
                                {q.optionid3.option}
                              </Button>
                            </Link>
                          </li>
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid4.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_3(q) }}
                                onClick={() => {
                                  this.question_show(q, 3);
                                }}
                              >
                                {q.optionid4.option}
                              </Button>
                            </Link>
                          </li>
                        </ul>
                        <h6> Explanation: </h6>{" "}
                        <pre className="description"> {q.explanation} </pre>
                        <h6>{this.parseresource(q)}</h6>
                      </div>
                    </div>
                  );
                } else if (q.numoptions === 5) {
                  return (
                    <div key={q.numoptions} className="format">
                      {this.log(q)}
                      {this.traverser(q)}
                      {this.title(q)}
                      {this.termsagreement(q)}
                      <div className="mainq">
                        <ul className="header">
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid1.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_0(q) }}
                                onClick={() => {
                                  this.question_show(q, 0);
                                }}
                              >
                                {q.optionid1.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid2.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_1(q) }}
                                onClick={() => {
                                  this.question_show(q, 1);
                                }}
                              >
                                {q.optionid2.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid3.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_2(q) }}
                                onClick={() => {
                                  this.question_show(q, 2);
                                }}
                              >
                                {q.optionid3.option}
                              </Button>
                            </Link>
                          </li>
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid4.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_3(q) }}
                                onClick={() => {
                                  this.question_show(q, 3);
                                }}
                              >
                                {q.optionid4.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid5.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_4(q) }}
                                onClick={() => {
                                  this.question_show(q, 4);
                                }}
                              >
                                {q.optionid5.option}
                              </Button>
                            </Link>
                          </li>
                        </ul>
                        <h6> Explanation: </h6>{" "}
                        <pre className="description"> {q.explanation} </pre>
                        <h6>{this.parseresource(q)}</h6>
                      </div>
                    </div>
                  );
                } else if (q.numoptions === 6) {
                  return (
                    <div key={q.numoptions} className="format">
                      {this.log(q)}
                      {this.traverser(q)}
                      {this.title(q)}
                      {this.termsagreement(q)}
                      <div className="mainq">
                        <ul className="header">
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid1.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_0(q) }}
                                onClick={() => {
                                  this.question_show(q, 0);
                                }}
                              >
                                {q.optionid1.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid2.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_1(q) }}
                                onClick={() => {
                                  this.question_show(q, 1);
                                }}
                              >
                                {q.optionid2.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid3.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_2(q) }}
                                onClick={() => {
                                  this.question_show(q, 2);
                                }}
                              >
                                {q.optionid3.option}
                              </Button>
                            </Link>
                          </li>
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid4.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                ize="lg"
                                style={{ background: this.chosen_color_3(q) }}
                                onClick={() => {
                                  this.question_show(q, 3);
                                }}
                              >
                                {q.optionid4.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid5.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_4(q) }}
                                onClick={() => {
                                  this.question_show(q, 4);
                                }}
                              >
                                {q.optionid5.option}
                              </Button>
                            </Link>
                          </li>
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid6.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_5(q) }}
                                onClick={() => {
                                  this.question_show(q, 5);
                                }}
                              >
                                {q.optionid6.option}
                              </Button>
                            </Link>
                          </li>
                        </ul>
                        <h6> Explanation: </h6>{" "}
                        <pre className="description"> {q.explanation} </pre>
                        <h6>{this.parseresource(q)}</h6>
                      </div>
                    </div>
                  );
                } else if (q.numoptions === 7) {
                  return (
                    <div key={q.numoptions} className="format">
                      {this.log(q)}
                      {this.traverser(q)}
                      {this.title(q)}
                      {this.termsagreement(q)}
                      <div className="mainq">
                        <ul className="header">
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid1.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_0(q) }}
                                onClick={() => {
                                  this.question_show(q, 0);
                                }}
                              >
                                {q.optionid1.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid2.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_1(q) }}
                                onClick={() => {
                                  this.question_show(q, 1);
                                }}
                              >
                                {q.optionid2.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid3.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_2(q) }}
                                onClick={() => {
                                  this.question_show(q, 2);
                                }}
                              >
                                {q.optionid3.option}
                              </Button>
                            </Link>
                          </li>
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid4.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_3(q) }}
                                onClick={() => {
                                  this.question_show(q, 3);
                                }}
                              >
                                {q.optionid4.option}
                              </Button>
                            </Link>
                          </li>

                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid5.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_4(q) }}
                                onClick={() => {
                                  this.question_show(q, 4);
                                }}
                              >
                                {q.optionid5.option}
                              </Button>
                            </Link>
                          </li>
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid6.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_5(q) }}
                                onClick={() => {
                                  this.question_show(q, 5);
                                }}
                              >
                                {q.optionid6.option}
                              </Button>
                            </Link>
                          </li>
                          <li className="space">
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                q.optionid7.nextstepcontent
                              }
                            >
                              <Button
                                className="but-wrap"
                                size="lg"
                                style={{ background: this.chosen_color_6(q) }}
                                onClick={() => {
                                  this.question_show(q, 6);
                                }}
                              >
                                {q.optionid7.option}
                              </Button>
                            </Link>
                          </li>
                        </ul>
                        <h6> Explanation: </h6>{" "}
                        <pre className="description">{q.explanation} </pre>
                        <h6>{this.parseresource(q)}</h6>
                      </div>
                    </div>
                  );
                }
              }
            }

            return true;
          })}
        </div>
      </Route>
    );
  }
}

export default App;
