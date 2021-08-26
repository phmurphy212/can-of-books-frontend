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
  handleColor = (e) => {
    e.preventDefault();
    this.setState({ status: e.target.value });
  }
  render() {
    console.log('catFormUpdateState:', this.state)
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} >
          <Form.Label>
            <h2>Update A Cat</h2>
          </Form.Label>

          <Form.Group controlId="name">
            <Form.Label>Cat Name</Form.Label>
            <Form.Control type="text" onChange={this.handleName} value={this.state.name} />
          </Form.Group>

          <Form.Group controlId="color">
            <Form.Label>Cat Color</Form.Label>
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
