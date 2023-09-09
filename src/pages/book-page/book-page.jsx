import React from "react";
import { useSelector } from "react-redux";
import { BookBuy } from "../../components/book-buy";
import { BookCover } from "../../components/book-cover";
import "./book-page.css";

export const BookPage = () => {
    const book = useSelector((state) => state.books.currentBook);

    if (!book) return null;

    return (
        <div className="book-page">
            <h1 className="book-page__title">{book.title}</h1>
            <div className="book-page__content">
                <div className="book-page__left">
                    <BookCover image={book.image} />
                    <p>{book.description}</p>
                    <p className="Популярные метки для этого продукта"></p>
                    <div className="book-page__buy-book">
                        <BookBuy book={book} />
                    </div>
                </div>
            </div>
        </div>
    );
};

