import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartMenu } from "../cart-menu";
import { itemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector((state) => state.cart.itemsInCart);
    const navigate = useNavigate();
    const totalPrice = calcTotalPrice(items);
    const handleGoToOrderClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate.push("/order");
    }, [navigate]);
    return (
        <div className="cart-block">
            <itemsInCart quantity={items.length} />
            <AiOutlineShoppingCart size={25} color="white" className="cart-icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
            {totalPrice > 0 ? <span className="total-price">{totalPrice} £</span> : null}
            {isCartMenuVisible && <CartMenu onlick={handleGoToOrderClick} />}
        </div>
    );
};
