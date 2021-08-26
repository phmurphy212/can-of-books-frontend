import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class BookFormUpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // _id: this.props.selectedBook._id,
      // title: this.props.selectedBook.title,
      // description: this.props.selectedBook.description,
      // status: this.props.selectedBook.status,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //this.props.handleCreate({ name, color });
    this.props.handleUpdate(this.state);
    this.props.handleClose();
  }
  handleTitle = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  handleStatus = (e) => {
    e.preventDefault();
    this.setState({ status: e.target.value });
  }

  handleDescription = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  render() {
    console.log('catFormUpdateState:', this.props)
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} >
          <Form.Label>
            <h2>Update A Book</h2>
          </Form.Label>

          <Form.Group controlId="title">
            <Form.Label>Book TItle</Form.Label>
            <Form.Control type="text" onChange={this.handleName} value={this.state.name} />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Book Status</Form.Label>
            <Form.Control type="text" as="select" onChange={this.handleColor} value={this.state.color} />
          </Form.Group>
          <Button type="submit" >
            Update Book
          </Button>
        </Form>
      </Container>
    );
  }
}
export default BookFormUpdateModal;
