import React from "react";
import PropTypes from "prop-types";
import './BookCard.css';
    
const BookCard = ({ book,  onShelfChange }) => {
    const handleOnChange = (e) => {
        onShelfChange(book, e.target.value);
      };
      
    
    
    return (
        <div className="book-card" id={book.id}>
            <div className="book-card__img" style={{
            width: 128,
            height: 193,
            backgroundImage:
              book.imageLinks !== undefined
                ? `url("${book.imageLinks.smallThumbnail}")`
                : "",
          }}>
                                
                <div className="book-shelf-changer">
          <select defaultValue={book.shelf} onChange={handleOnChange}>
            <option value="Move to..." disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
            </div>
            <div className="book-card__info">
                <div className="book-card__title">
                    <p>{book.title}</p>
                </div>
                <div className="book-card__writer">
                    <p key={book.authors}>{book.authors}</p>
                </div>

            </div>
            

        </div>
    )
}
BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};
export default BookCard;