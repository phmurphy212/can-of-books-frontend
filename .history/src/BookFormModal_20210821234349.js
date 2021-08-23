import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let status = e.target.status.value;
    let description = e.target.description.value;
    let email = e.target.email.value;
    console.log(title, status, description, email);
    this.props.handleCreate({ title, status, description, email });
  }


  render() {
    return (
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add a Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.handleSubmit} >
              <Form.Group controlId="title">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group controlId="status">
                <Form.Label>Book Status</Form.Label>
                <Form.Control as="select">
                  <option>Life Changining</option>
                  <option>Five Favorite</option>
                  <option>Recommended To Me</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Book Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hide}>
              Close
          </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </>

    );
  }
}
export default BookFormModal;
