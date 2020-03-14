import React from "react";
import axios from "axios";

import styles from "./App.module.css"

import { Container, Card } from "semantic-ui-react";
import MenuComponent from "../MenuComponent/MenuComponent";
import BookCard from "../BookCard/BookCard";
import Filter from "../Filter/Filter";

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
        <MenuComponent className={styles.menuTop}/>
        <Filter setFilter={this.props.setFilter} filterBy={this.props.filterBy} />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
