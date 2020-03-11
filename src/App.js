import React from "react";
import { connect } from "react-redux";
import { setBooks } from "./actions/boks";

class App extends React.Component {
  render() {
    const { books } = this.props.books;
    const { setBooks } = this.props;
    const newBooks = [
      {
        id: 0,
        title: "Shopping Cart -" + new Date()
      }
    ]

    return (
      <div>
        <div> {books[0].title}</div>
        <button onClick={setBooks.bind(this, newBooks)}>change</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, { setBooks })(App);
