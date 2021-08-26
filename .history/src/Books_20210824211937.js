import React from 'react';
import './Books.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import BookFormUpdateModal from './BookFormUpdateModal';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
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
                  <Button className = "deleteButton" onClick={() => 
                  <BookFormUpdateModal />
                  }>Update</Button>
                  <Button className= "deleteButton" onClick={() => this.props.handleDelete(book._id)}>Remove</Button>
                </Carousel.Item>
                : '')}
            </Carousel>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Books
