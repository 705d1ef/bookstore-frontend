import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentBook } from "../../store/books/reducer.js";
import { BookItem } from "../../components/book-item";
import "./books.css";

export const Books = () => {
    const dispatch = useDispatch();
    const { books, isLoading } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(setCurrentBook());
    }, [dispatch]);

    if (isLoading) return <h2>Loading...</h2>;
    return <div className="books">{books && books.map((book) => <BookItem key={book.id} {...book} />)}</div>;
};
