import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class BookFormUpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // _id: !this.props.selectedBook ? this.props.selectedBook._id : '',
      // title: !this.props.selectedBook ? this.props.selectedBook.title : '',
      // description: !this.props.selectedBook ? this.props.selectedBook.description : '' ,
      // status: !this.props.selectedBook ? this.props.selectedBook.status : '' ,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

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
    console.log('BookForUpdateModal:', this.props)
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} >
          <Form.Label>
            <h2>Update A Book</h2>
          </Form.Label>

          <Form.Group controlId="title">
            <Form.Label>Book TItle</Form.Label>
            <Form.Control type="text" onChange={this.handleTitle} value={this.state.title} />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" onChange={this.handleDescription} value={this.state.description} />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Book Status</Form.Label>
            <Form.Control as="select" onChange={this.handleStatus} value={this.state.status} >
              <option>Life Changining</option>
              <option>Five Favorite</option>
              <option>Recommended To Me</option>
            </Form.Control>
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
