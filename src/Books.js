import React from 'react';
import './Books.css';
import BookFormUpdateModal from './BookFormUpdateModal';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
// import Modal from 'react-bootstrap/Modal';

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
    console.log('I am here:', book);
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
              {this.props.books.map(book => book.title ?
                <Carousel.Item className="carouselItems" key={book._id}>
                  <h3>{book.title}</h3>
                  <h4>{book.status}</h4>
                  <p id="carouselP">{book.description}</p>
                  <Button className="deleteButton" onClick={() => this.handleShow(book)}
                  >Update</Button>
                  <Button className="deleteButton" onClick={() => this.props.handleDelete(book._id)}>Remove</Button>
                </Carousel.Item>
                : '')}
                {this.state.showModal ? <BookFormUpdateModal 
                  selectedBook = {this.state.selectedBook}
                  handleShow = {this.handleShow}
                  handleClose = {this.handleClose}
                  showModal = {this.state.showModal}
                  handleUpdate = {this.props.handleUpdate}
                  /> : '' }
            </Carousel>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Books
