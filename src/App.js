import React from "react";
import { connect } from "react-redux";
import { setBooks } from "./actions/boks";
import axios from "axios";

import { Container, Card } from "semantic-ui-react";
import MenuComponent from "./Conponents/Menu/MenuComponent";
import BookCard from "./Conponents/BookCard/BookCard";

class App extends React.Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get("/books.json").then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;

    return (
      <Container>
        <MenuComponent />
        <ul>
          <Card.Group itemsPerRow={4}>
            {!isReady
              ? "Загрузка..."
              : books.map((book, i) => <BookCard key={i} {...book} />)}
          </Card.Group>
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
});

export default connect(mapStateToProps, { setBooks })(App);
