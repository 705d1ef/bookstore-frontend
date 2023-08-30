import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Button } from "../button";
>>>>>>> create_button_GameBuy
=======
import { Button } from "../button";
>>>>>>> create_button_GameBuy
import "./book-buy.css";

export const BookBuy = ({ book }) => {
  return (
    <div className="book-buy">
      <span className="book-buy__price">{book.price}</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <Button type="primary" onClick={() => null}>
        To Basket
      </Button>
>>>>>>> create_button_GameBuy
=======
      <Button type="primary" onClick={() => null}>
        To Basket
      </Button>
>>>>>>> create_button_GameBuy
    </div>
  );
};
