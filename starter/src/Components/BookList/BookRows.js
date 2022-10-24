import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";

const BooksRows = ({ books, onShelfChange }) => {
  return (
    <ul className="books-rows">
      {books.map((b) => (
        <li key={b.id}>
          <BookCard book={b} onShelfChange={onShelfChange} />
        </li>
      ))}
    </ul>
  );
};

BooksRows.propTypes = {};

export default BooksRows;