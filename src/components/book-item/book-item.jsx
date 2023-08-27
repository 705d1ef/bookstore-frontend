import React from "react";
import { BookCover } from "../book-cover";
import "./book-item.css";

export const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <BookCover image={book.cover} />
      <div className="book-item__details"></div>
      <span className="book-item__title">{book.title}</span>
      <div className="book-item__author">{book.author}</div>
      <div className="book-item__buy">Buy</div>
    </div>
  );
};
