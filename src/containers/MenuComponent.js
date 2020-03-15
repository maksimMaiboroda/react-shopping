import { connect } from "react-redux";
import MenuComponent from "../components/MenuComponent/MenuComponent";
import { removeFromCart } from "../actions/cart";
import uniqBy from "lodash/uniqBy"

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
  countBookCart: cart.items.length,
  items: uniqBy(cart.items, o => o.id)
});

export default connect(mapStateToProps, { removeFromCart })(MenuComponent);
