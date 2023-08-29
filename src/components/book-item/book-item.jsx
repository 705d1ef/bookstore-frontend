import React from "react";
import { BookCover } from "../book-cover";
import { BookBuy } from "../book-buy";
import "./book-item.css";

export const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <BookCover image={book.image} />
      <div className="book-item__details"></div>
      <span className="book-item__title">{book.title}</span>
      <div className="book-item__author">{book.author}</div>
      <div className="book-item__buy">
        <BookBuy book={book.price} />
      </div>
    </div>
  );
};
