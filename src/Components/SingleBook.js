import React, { Component } from "react";
import PropTypes from 'prop-types'

class SingleBook extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
}

  render() {        

    const {book, changeShelf, currentShelf} = this.props;

    let thumbnail = '';
    if (book.imageLinks) 
        thumbnail = book.imageLinks.thumbnail
  
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${thumbnail}")`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(e) =>
                changeShelf(book, e.target.value)
              }
              value={currentShelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default SingleBook;
