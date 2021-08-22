import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
// import BootForm from './BookForm';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// import Button from 'react-boostrap/Button';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
    };

    const results = await axios.get('http://localhost:3001/books', config);
    this.setState({
      books: results.data
    })
    console.log(`should be books: ${results}`);
  }

  handleCreate = async (bookData) => {
    try {
      let response = await axios.post('http://localhost:3001/books', bookData);
      let newBook = response.data;
      this.setState({
        books: [...this.state.books, newBook],
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.books);
    return (
      <Container>
        <Row>
          <Col>
            <h1>My Favorite Books</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              This is a collection of my favorite books
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel variant="dark">
              {this.state.books.map((book, index) => book.title ?
                <Carousel.Item key={book._id}>
                  <h3>{book.title}</h3>
                  <h4>{book.status}</h4>
                  <p>{book.description}</p>
                </Carousel.Item>
                : '')}
            </Carousel>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Table striped bordered hover>
              {this.state.books.map((book, index) => book.title ?
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
                      <td><button>Remove</button> 
                      </td>
                    </tr>
                  </tbody> */}
                {/* </>
                    : '')}
            </Table>
          </Col>
        </Row> */}
      </Container>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
