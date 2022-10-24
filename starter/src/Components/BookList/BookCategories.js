import React from "react";
import PropTypes from "prop-types";
import BooksRows from "./BookRows";

const BookCategories = ({ title, books, onShelfChange }) => {
  return (
    <div className="booksrows">
      <h2 className="bookrows-title">{title}</h2>
      <div className="bookrows-books">
        <BooksRows books={books} onShelfChange={onShelfChange} />
      </div>
    </div>
  );
};

BookCategories.propTypes = {};

export default BookCategories;