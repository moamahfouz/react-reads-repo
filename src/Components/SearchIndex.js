import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import * as BooksAPI from "./../BooksAPI";
import SingleBook from "./SingleBook";

class SearchIndex extends Component {
  state = {
    query: "",
    matchingSearchResults: [],
  };

  getQuery = (value) => {
    this.setState({
      query: value.trim(),
      loading: true,
    });

    if (value.length !== 0) {
      BooksAPI.search(value).then((res) => {
        if (res.error) {
          this.setState({
            matchingSearchResults: [],
            loading: false,
          });
        } else {
          this.setState({
            matchingSearchResults: res,
            loading: false,
          });
        }
      });
    } else {
      this.setState({
        matchingSearchResults: [],
        loading: false,
      });
    }
  };

  render() {  
    const { query, loading, matchingSearchResults } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              onChange={(e) => this.getQuery(e.target.value)}
              placeholder="Search by title or author"
            />
          </div>
        </div>

        {!loading ? (
          <div className="search-books-results">
            <ol className="books-grid">
              {matchingSearchResults.map((matchedBook) => (
                <li key={matchedBook.id}>
                  <SingleBook
                    book={matchedBook}                    
                    changeShelf={this.props.changeShelf}
                    currentShelf={matchedBook.shelf}
                  />
                </li>
              ))}
            </ol>
          </div>
        ) : (
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
        )}

        {/* No result */}
        {query !== "" && matchingSearchResults.length === 0 && (
          <div className="no-search-results text-center">
            <h2>Sorry, search with no results.</h2>
          </div>
        )}
      </div>
    );
  }
}

export default SearchIndex;
