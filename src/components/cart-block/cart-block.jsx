import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./cart-block.css";

export const CartBlock = () => {
    return (
        <div className="cart-block">
            <AiOutlineShoppingCart size={25} className="cart-block__icon"/>
            <span className="cart-block__total-price"> 213 £</span>
        </div>
    )
}
