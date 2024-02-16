import React from "react";
import { paths } from "../../paths";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BookBuy } from "../book-buy";
import { BookCover } from "../book-cover";
import { StarRating } from "../star-rating";
import { setCurrentBook } from "../../store/books/booksSlice";
import { getBooks } from "../../store/books/booksSlice";
import "./book-item.css";

export const BookItem = ({ id, cover, title, price, rating }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getBooks(id));
        navigate(`${paths.book}/${id}`);
    };

    return (
        <div className="book-item" onClick={handleClick}>
            <BookCover image={cover} />
            <span className="book-item__title">{title}</span>
            <div className="book-item__buy">
                <BookBuy book={{ id, price, title }} />
            </div>
            <div className="book-item__rating">
                <StarRating rating={rating} disable={true} />
            </div>
        </div>
    );
};
