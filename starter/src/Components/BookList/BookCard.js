import React from "react";
import PropTypes from "prop-types";
import './BookCard.css';
    
const BookCard = ({ book,  onShelfChange }) => {
    const handleOnChange = (e) => {
        onShelfChange(book, e.target.value);
      };
      
    if (!book)
        return
    const { authors, id, imageLinks, title, } = book;
    const { smallThumbnail, thumbnail } = imageLinks
    
    return (
        <div className="book-card" id={id}>
            <div className="book-card__img">
                <img src={smallThumbnail} alt="" />
                
                <div className="book-shelf-changer">
          <select defaultValue={book.shelf} onChange={handleOnChange}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            {book.shelf !== "none" && <option value="none">None</option>}
          </select>
        </div>
            </div>
            <div className="book-card__info">
                <div className="book-card__title">
                    <p>{title}</p>
                </div>
                {authors && <div className="book-card__writer">
                    {authors.map((author) => <p key={author}>{author}</p>)}
                </div>}

            </div>
            

        </div>
    )
}
BookCard.propTypes = {};
export default BookCard;