import React from "react";
import AddButton from "../BookStore/AddButton";
import BookCategories from '../BookList/BookCategories';
import Header from '../Header';

const MyBooks = ({ categories, books, onShelfChange }) => {
    return(
        <>
        <Header />
        <div className="list-books">
      <div className="list-books-content">
        <div>
          {categories.map((c) => (
            <BookCategories
              key={c.id}
              title={c.title}
              books={books.filter((b) => b.shelf === c.id)}
              onShelfChange={onShelfChange}
            />
          ))}
        </div>
      </div>
    </div>
            <AddButton />
        </>
    )
}
export default MyBooks;