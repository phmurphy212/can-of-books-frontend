import React from 'react';
import './Books.css';
import BookFormUpdateModal from './BookFormUpdateModal';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBook: null,
    }
  }

  handleClose = () => {
    this.setState({
      showModal: false
    });
  }

  handleShow = (book) => {
    this.setState({
      showModal: true,
      selectedBook: book
    });
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Carousel className="bookCarousel">
              {this.props.books.map((book, index) => book.title ?
                <Carousel.Item className="carouselItems" key={index}>
                  <h3>{book.title}</h3>
                  <h4>{book.status}</h4>
                  <p id="carouselP">{book.description}</p>
                  <Button className="deleteButton" onClick={() => this.handleShow(book)}
                  >Update</Button>
                  <Button className="deleteButton" onClick={() => this.props.handleDelete(book._id)}>Remove</Button>
                </Carousel.Item>
                : '')}
              <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                  <BookFormUpdateModal handleUpdate={this.props.handleUpdate} selectedBook={this.state.selectedBook} handleClose={this.handleClose} />
                </Modal.Body>
              </Modal>
            </Carousel>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Books
