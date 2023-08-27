import React from "react";

import "./book-buy.css";

export const BookBuy = ({ book }) => {
  return (
    <div className="book-buy">
      <span className="book-buy__price">{book.price}</span>
    </div>
  );
};
