import { connect } from "react-redux";
import { setBooks } from "../actions/books";
import App from "../components/App/App";
import orderBy from "lodash/orderBy";

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case "price_hight":
      return orderBy(books, "price", "desc");
    case "price_low":
      return orderBy(books, "price", "asc");
    case "author":
      return orderBy(books, "author", "asc");
    case "all":
    default:
      return books;
  }


  
};




const filterBooks = (books, searchQuery) =>
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};

const mapStateToProps = ({ books, filter }) => ({
  books:
    books.items &&
    searchBooks(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady
});

export default connect(mapStateToProps, { setBooks })(App);
