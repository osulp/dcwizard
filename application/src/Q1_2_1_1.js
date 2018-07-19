import React, { Component } from "react";
import { Route, NavLink,HashRouter,BrowserRouter } from 'react-router-dom';
import Done1 from "./Done1";
import Q1_2 from "./Q1_2";
import {Modal} from 'reactstrap';
import {Button} from 'reactstrap';
import {ModalHeader} from 'reactstrap';
import {ModalBody} from 'reactstrap';
import {ModalFooter} from 'reactstrap';
class Q1_2_1_1 extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this); // you are missing this line

    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  handleBack() {
    this.props.history.push('/Q1_2_1');
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
Is the dataset covered by Copyright?</h1>
<div className="navigationButtonsLeft">
     <Button onClick={this.handleBack} bsStyle="success">&lt; Back</Button>
   </div>
<div>
  <Button color="primary" onClick={this.toggle}>More Info</Button>
  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    <ModalHeader toggle={this.toggle}>Dataset Copyright</ModalHeader>
    <ModalBody>
    Representations of data are also not protectable. Section 102(b) of the U.S. Copyright Act reads reveals this, as it reads: “In no case does copyright protection for an original work of authorship extend to any idea, procedure, process, system, method of operation, concept, principle, or discovery, regardless of the form in which it is described, explained, illustrated, or embodied in such work.”

    Facts and data aren't considered original works of authorship because they are not “created” so much as they are “discovered.” For example, if a scientist takes temperature readings at various locations over a period of years, she isn't “creating” the data, she's recording the data. If she keeps a log describing how she feels every day, and how the sunrise looks at the testing station, that's original, creative, authorship.  Recording natural phenomena is not.” (Glushko)

    This implies that many datasets are not covered by Copyright. Sometimes datasets are made publicly available with restrictive licenses even though they are not covered by Copyright. To make sure that the restrictions indicated by the license are applicable to the dataset you are interested in, determine first if the dataset is covered by Copyright. Most datasets that are composed of numbers (facts) are not covered. Even datasets or databases that are arranged or organized in a creative way are not protected by Copyright. The organizational method may be copyrightable, but not the facts. Some datasets are creative and therefore subject to copyright. For example, a collection of images, or a collection of texts would be protected by Copyright.  </ModalBody>  <ModalFooter>
      <Button color="primary" onClick={this.toggle}>Got it!</Button>{' '}
      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>


   </div>

  );
  }
}

export default Q1_2_1_1;
