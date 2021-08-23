import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    }
  }

  handleCreate = async (bookData) => {
    try {
      let response = await axios.post('http://localhost:3001/books', bookData);
      let newBook = response.data;
      this.setState({
        books: [...this.props.books, newBook],
      })
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let status = e.target.status.value;
    let description = e.target.description.value;
    let email = e.target.email.value;
    console.log(title, status, description, email);
    this.handleCreate({ title, status, description, email });
    this.props.hideModal();
  }


  render() {
    return (
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add a Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
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
            <Button onClick={this.props.hideModal}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleCreate}>
              Add Book
          </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </>

    );
  }
}
export default BookFormModal;
