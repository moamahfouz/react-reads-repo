import React from "react";
import * as BooksAPI from "./BooksAPI";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import SearchIndex from "./Components/SearchIndex";
import "./App.css";
import Loader from "react-loader-spinner";

class BooksApp extends React.Component {
  state = {
    all_books: [],
    flip: false,
    loading: true
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {    
      this.setState({ all_books: books, loading: false });
    });
  }

  changeShelf = (book, shelf) => {
    this.setState({loading: true})
    BooksAPI.update(book, shelf).then((res)=>{
      BooksAPI.getAll().then((books) => {
        this.setState({ all_books: books, flip: true, loading: false });
      });
    });
    
  };


  render() {
    const {loading} = this.state;
    return (
      <div className="app">
        {loading &&
          <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "fixed",
            zIndex: "10000",
            background: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
      }
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
              allBooks={this.state.all_books}
            />
          )}
        />

      
      </div>
    );
  }
}

export default BooksApp;
