import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      console.log(id);
      let remainingBooks = this.props.books.filter(book => book._id !== id);
      this.setState({
        books: remainingBooks,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Container >
        <Row>
          <Col>
            <Table striped bordered hover>
              {this.props.books.map((book, index) => book.title ?
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
                      <td><button onClick={this.handleDelete}>Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </>
                : '')}
            </Table>
          </Col>
        </Row>
      </Container >
    )
  }
}

export default Books
