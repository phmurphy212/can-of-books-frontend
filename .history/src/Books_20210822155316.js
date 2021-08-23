import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Container >
        <Row>
        <Col>
            <Carousel variant="dark">
              {this.state.books.map((book, index) => book.title ?
                <Carousel.Item key={index}>
                  <h3>{book.title}</h3>
                  <h4>{book.status}</h4>
                  <p>{book.description}</p>
                  <Button onClick={() => this.handleDelete(book._id)}>Remove</Button>
                </Carousel.Item>
                : '')}
            </Carousel>
          </Col>
          <Col>
            <Table striped bordered hover>
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
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Books
