import React, { Component } from "react";
import { Link } from "react-router-dom";
//import * as BooksAPI from "./../BooksAPI";
import SingleBook from "./SingleBook";

class SearchIndex extends Component {
    

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              <SingleBook />
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchIndex;
