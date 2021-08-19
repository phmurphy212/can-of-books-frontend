import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


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
  }

  render() {
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
                <Carousel.Item key={index}>
                  <h3>{book.title}</h3>
                  <h4>{book.status}</h4>
                  <p>{book.description}</p>
                </Carousel.Item>
                : '')
              }
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
