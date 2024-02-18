import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/books/booksSlice";
import { BookItem } from "../../components/book-item";
import "./home-page.css";

export const HomePage = ({ rating }) => {
    const dispatch = useDispatch();
    const { books, isLoading } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    if (isLoading) return <h2>Loading...</h2>;
    return <div className="home-page">{books && books.map((book) => <BookItem key={book.id} {...book} />)}</div>;
};
