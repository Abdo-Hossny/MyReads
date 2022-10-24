import React, {useState} from 'react';
import BooksRows from '../BookList/BookRows';
import './BookStore.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import backArrow from '../../icons/arrow-back.svg';
import * as BooksAPI from '../../BooksAPI';
const BookStore = ({ books, onShelfChange }) => {
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = (query) => {
        const searchBooks = async () => {
          const result = await BooksAPI.search(query.trim().replace(".", ""));
          if (Array.isArray(result)) {
            // Set shelf
            result.forEach((book) => {
              const currentBook = books.find((b) => b.id === book.id);
    
              book.shelf = currentBook === undefined ? "none" : currentBook.shelf;
            });
            setSearchResult(result);
          } else {
            setSearchResult([]);
          }
          //console.log(result);
        };
    
        if (query.length > 0) {
          searchBooks();
        } else {
          setSearchResult([]);
        }
      };

    return (
        <div className="search-books">
      <div className="search-bar">
        <Link to="/" className="close-search">
          <img src={backArrow} alt="back to books page" />
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <BooksRows books={searchResult} onShelfChange={onShelfChange} />
      </div>
    </div>
    )
}
BookStore.propTypes ={}
export default BookStore;