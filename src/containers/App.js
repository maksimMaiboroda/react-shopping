import { connect } from "react-redux";
import { setBooks, setFilter } from "../actions/books";
import App from "../components/App/App";
import orderBy from "lodash/orderBy";

const sortBy = (books, type) => {
  switch (type) {
    case "all":
      return books;
    case "price_hight":
      return orderBy(books, "price", "desc");
    case "price_low":
      return orderBy(books, "price", "asc");
    case "author":
      return orderBy(books, "author", "asc");
    default:
      return books;
  }
};

const mapStateToProps = ({ books }) => ({
  books: sortBy(books.items, books.filterBy),
  isReady: books.isReady,
  filterBy: books.filterBy
});

export default connect(mapStateToProps, { setBooks, setFilter })(App);
