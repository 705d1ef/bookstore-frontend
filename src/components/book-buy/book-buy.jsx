import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../store/cart/reducer";
import { Button } from "../button";
import "./book-buy.css";

export const BookBuy = ({ book }) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(book));
    };
    return (
        <div className="book-buy">
            <span className="book-buy__price">{book.price} £.</span>
            <Button type="primary" onClick={handleClick}>
                Add to Card
            </Button>
        </div>
    );
};
