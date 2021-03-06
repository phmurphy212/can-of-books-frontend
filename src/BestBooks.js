import React from 'react';
import Books from './Books';
import BookFormModal from './BookFormModal';
// import BookFormUpdateModal from './BookFormUpdateModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';

import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

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

    } catch (error) {
      console.log(error);
    }
  }

  handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      let remainingBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: remainingBooks,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleUpdate = async (book) => {
    console.log('updated books:', book);
    await axios.put(`http://localhost:3001/books/${book._id}`, book);

    const updateBooks = this.state.books.map(stateBook => {
      if (stateBook._id === book._id) {
        return book;
      } else {
        return stateBook;
      }
    });
    this.setState({
      books: updateBooks,
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>My Favorite Books</h1>
            <Button className="addButton" onClick={this.renderModal}>Add A Book</Button>
          </Col>
        </Row>
        <Row>
          <Books
            books={this.state.books}
            handleDelete={this.handleDelete} 
            handleUpdate={this.handleUpdate}
            />
        </Row>
        <BookFormModal
          books={this.state.books}
          handleCreate={this.handleCreate}
          hideModal={this.hideModal}
          showModal={this.state.showModal}
          renderModal={this.renderModal}
          email={this.props.auth0.user.email}
          handleUpdate={this.handleUpdate}
        />
      </Container >
    )
  }
}

export default withAuth0(MyFavoriteBooks);
