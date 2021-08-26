import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class CatFormUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.book._id,
      title: this.props.book.title,
      description: this.props.book.description,
      status: this.props.book.status,
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
    console.log('catFormUpdateState:', this.state)
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
            <Form.Control type="text" onChange={this.handleColor} value={this.state.color} />
          </Form.Group>
          <Button type="submit" >
            Update Cat
          </Button>
        </Form>
      </Container>
    );
  }
}
export default CatFormUpdate;
