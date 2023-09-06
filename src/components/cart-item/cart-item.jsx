import React from "react";
import { useDispach } from "react-redux";
import { deleteItemFromCart } from "../../store/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./cart-item.css";

export const CartItem = ({ title, price, id }) => {
    const dispatch = useDispach();

    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(id));
    };

    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} £</span>
                <AiOutlineCloseCircle size={15} className="cart-item__delete-icon" onClick={handleDeleteClick} />
            </div>
        </div>
    );
};
