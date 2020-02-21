import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class alertModal extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Save The Book
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>Your Book is Saved!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
