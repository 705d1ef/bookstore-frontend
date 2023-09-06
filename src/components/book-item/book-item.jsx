import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BookGenre } from "../book-genre";
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
            <span className="book-item__title">{book.title}</span>
            <div className="book-item__author">{book.author}</div>
            {book.genres.map((genre) => (
                <BookGenre genre={genre} key={genre} />
            ))}
            <div className="book-item__buy">
                <BookBuy book={book} />
            </div>
        </div>
    );
};
