import React from 'react';
import Books from './Books';
import BookFormModal from './BookFormModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';

import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    }
  }

  componentDidMount = async () => {
    const { getIdTokenClaims, user } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
      params: { email: user.email }
    };

    const results = await axios.get('http://localhost:3001/books', config);
    this.setState({
      books: results.data
    })
    console.log(`should be books: ${results.data}`);
    console.log(`👋🏼did we get ${this.state.books}?`);

  }

  renderModal = () => {
    this.setState({
      showModal: true,
    });
  }

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  }
  handleCreate = async (bookData) => {
    try {
      let response = await axios.post('http://localhost:3001/books', bookData);
      let newBook = response.data;
      this.setState({
        books: [...this.state.books, newBook],
      })
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }

  handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      console.log(`book is id${id}`);
      let remainingBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: remainingBooks,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(`state is: ${this.state.showModal}`);
    return (
      <Container>
        <Row>
          <Col>
            <h1>My Favorite Books</h1>
            <Button onClick={this.renderModal}>Add A Book</Button>
          </Col>
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
        </Row>
        <Books 
        books={this.state.books}
        handleDelete = {this.handleDelete}/>
        <BookFormModal
        books={this.state.books}
        handleCreate = {this.handleCreate}
        hideModal = {this.hideModal}
        showModal = {this.state.showModal}
        email = {this.props.auth0.user.email}
        />
      </Container>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
