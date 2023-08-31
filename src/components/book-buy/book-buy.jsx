import React from "react";
import { Button } from "../button";
import "./book-buy.css";

export const BookBuy = ({ book }) => {
  return (
    <div className="book-buy">
      <span className="book-buy__price">{book.price} £.</span>
      <Button type="primary" onClick={() => null}>
        Add to Card
      </Button>
    </div>
  );
};
