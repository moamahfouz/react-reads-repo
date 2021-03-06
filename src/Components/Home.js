import React from "react";
import { Link } from "react-router-dom";
import SingleBook from "./SingleBook";


const Home = (props) => {

    return (    
        <div className="list-books">
          <div className="list-books-title">
            <h1>My book reads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {props.allBooks
                      .filter((book) => book.shelf === "currentlyReading")
                      .map((book) => (
                        <li key={book.id}>
                          <SingleBook
                            book={book}
                            changeShelf={props.changeBookShelf}
                            currentShelf="currentlyReading"
                          />
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {props.allBooks
                      .filter((book) => book.shelf === "wantToRead")
                      .map((book) => (
                        <li key={book.id}>
                          <SingleBook
                            book={book}
                            changeShelf={props.changeBookShelf}
                            currentShelf="wantToRead"
                          />
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {props.allBooks
                      .filter((book) => book.shelf === "read")
                      .map((book) => (
                        <li key={book.id}>
                          <SingleBook
                            book={book}
                            changeShelf={props.changeBookShelf}
                            currentShelf="read"
                          />
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    );
  }


export default Home;
