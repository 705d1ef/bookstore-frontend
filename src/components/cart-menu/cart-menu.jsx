import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ onClick }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    return (
        <div className="cart-menu">
            <div className="cart-menu__book-list">
                {items.length > 0
                    ? items.map((book) => <CartItem key={book.id} image={book.cover} price={book.price} title={book.title} id={book.id} />)
                    : "Your basket is empty"}
            </div>
            {items.length > 0 ? (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Total:</span>
                        <span>£{calcTotalPrice(items)} </span>
                    </div>
                    <Button type="primary" size="m" onClick={onClick}>
                        Proceed to Checkout
                    </Button>
                </div>
            ) : null}
        </div>
    );
};
