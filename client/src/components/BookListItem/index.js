import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
//import alertModal from "../Modal";

import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
//import "./style.css";

// export function BookList({ children }) {
//   return <ul className="list-group">{children}</ul>;
// }

export function BookListItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // exampleFunction = () => {
  //   // call function to save the book
  //   // call setter to change the modal state
  // };
  console.log("props", props);
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-3">
            <Thumbnail src={props.thumbnail} />{" "}
          </Col>{" "}
          <Col size="xs-8 sm-9">
            <h3> {props.title} </h3> <h5> {props.author} </h5>{" "}
            <p> {props.description} </p>{" "}
            <button className="btn">
              {" "}
              <a
                //id="btn"
                rel="noreferrer noopener"
                target="_blank"
                href={props.href}
              >
                View Book{" "}
              </a>{" "}
            </button>{" "}
            {/* <button
                    className="btn"
                    id={props.id}
                    onClick={{props.handleSavedBook};{handleShow}}
                  >
                    Save Book
                  </button>{" "} */}
            <button
              className="btn"
              id={props.id}
              onClick={() => {
                handleShow();
                props.handleSavedBook(props);
              }}
              // onClick={setShow(true)}  => this is bad!b
              // onClick={{props.handleSavedBook};{handleShow}}
            >
              Save Book
            </button>
            <Modal
              // Need to conditionally render the modal if the show is set to false
              // Need to hide the modal if the show is set to true
              // {...this.props}
              show={show}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Save The Book
                </Modal.Title>{" "}
              </Modal.Header>{" "}
              <Modal.Body>
                <h4> Centered Modal </h4> <p> Your Book is Saved!</p>
              </Modal.Body>{" "}
              <Modal.Footer>
                <Button onClick={handleClose}> Close </Button>
              </Modal.Footer>
            </Modal>
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </li>
  );
}
