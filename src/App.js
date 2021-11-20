import React from "react";
import * as BooksAPI from "./BooksAPI";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import SearchIndex from "./Components/SearchIndex";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    all_books: [],
    flip: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ all_books: books });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ all_books: books, flip: true });
    });
  };


  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Home
              allBooks={this.state.all_books}
              changeBookShelf={this.changeShelf}
            />
          )}
        />

        <Route
          exact
          path="/search"
          render={() => (
            <SearchIndex
              changeShelf={this.changeShelf}
              books={this.state.books}
            />
          )}
        />

      
      </div>
    );
  }
}

export default BooksApp;
