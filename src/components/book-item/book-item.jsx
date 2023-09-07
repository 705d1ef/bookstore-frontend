import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { BookGenre } from "../book-genre";
import { BookBuy } from "../book-buy";
import { BookCover } from "../book-cover";
import { setCurrentBook } from "../../store/books/reducer";
import "./book-item.css";

export const BookItem = ({ book }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentBook(book));
        navigate.push(`/app/${book.title}`);
    };
    return (
        <div className="book-item" onClick={handleClick}>
            <BookCover image={book.image} />
            <div className="book-item__details"></div>
            <div className="book-item__buy">
                <BookBuy book={book} />
            </div>
        </div>
    );
};
