import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "../button";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ onlick }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    return (
        <div className="cart=menu">
            <div className="cart-menu__books-list">
                {items.length > 0
                    ? items.map((book) => <CartItem key={book.image} image={book.image} price={book.price} title={book.title} id={book.id} />)
                    : "Your basket is empty"}
            </div>
            {items.length > 0 ? (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Total:</span>
                        <span>{calcTotalPrice(items)} £</span>
                    </div>
                    <Button type="primary" size="m" onClick={onlick}>
                        Proceed to Checkout
                    </Button>
                </div>
            ) : null}
        </div>
    );
};
