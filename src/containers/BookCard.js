import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cart";
import BookCard from "../components/BookCard/BookCard";

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce(
    (count, book) => count + (book.id === id ? 1 : 0),
    0
  )

  
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(
  BookCard
);
