import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';


class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // _id: this.props.selectedBook._id,
      // title: this.props.selectedBook.title,
      // description: this.props.selectedBook.description,
      // status: this.props.selectedBook.status,
      // email: this.props.auth0.user.email,
    }
  }
  handleUpdateButton = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state);
    this.props.renderModal();
  }

  handleTitle = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };

  handleStatus = (e) => {
    e.preventDefault();
    this.setState({ status: e.target.value });
  };

  handleDescription = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    let email = this.props.email;
    let status = e.target.status.value;

    this.props.handleCreate({ title, status, description, email });
    this.props.hideModal();
  };


  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.hideModal}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Add a Book</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {/* {this.props.selectedBook ?
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
                : */}
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="title">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group controlId="status">
                    <Form.Label>Book Status</Form.Label>
                    <Form.Control as="select" controlId="status">
                      <option>Life Changining</option>
                      <option>Five Favorite</option>
                      <option>Recommended To Me</option>
                    </Form.Control>
                  </Form.Group>
                  <Button type="submit">
                    Add Book
                </Button>
                </Form>
              {/* } */}
            </Modal.Body>
            <Modal.Footer>
              {/* <Button onClick={this.props.hideModal}>
                Close
          </Button> */}
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }
}

export default withAuth0(BookFormModal);
