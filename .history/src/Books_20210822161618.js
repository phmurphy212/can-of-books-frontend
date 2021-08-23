import React from 'react';
import './Books.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

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
            <Carousel id="bookCarousel">
              {this.props.books.map((book, index) => book.title ?
                <Carousel.Item key={index}>
                  <h3>{book.title}</h3>
                  <h4>{book.status}</h4>
                  <p>{book.description}</p>
                </Carousel.Item>
                : '')}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Table id="bookTable" striped bordered hover>
            {this.props.books.length ?
              this.props.books.map(book => (
                <>
                  <thead>
                    <tr key={book._id}>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Desciption</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{book.title}</td>
                      <td>{book.status}</td>
                      <td>{book.description}</td>
                      <td><Button onClick={() => this.props.handleDelete(book._id)}>Remove</Button>
                      </td>
                    </tr>
                  </tbody>
                </>
              )) : ''}
          </Table>
        </Row>
      </Container >
    );
  }
}

export default Books
