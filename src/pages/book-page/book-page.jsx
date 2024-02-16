import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBook } from "../../store/single-book/bookSlice.js";
import { BookBuy } from "../../components/book-buy";
import { BookCover } from "../../components/book-cover";
import { StarRating } from "../../components/star-rating";
import { BsPencil } from "react-icons/bs";
import "./book-page.css";

export const BookPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { book, isLoading } = useSelector((state) => state.book);
    useEffect(() => {
        dispatch(getBook(id));
    }, [dispatch, id]);

    if (!book) return <h2>I'm working on it!</h2>;
    //if (isLoading) return <h2>I'm working on it!</h2>; rating={book.rate}/

    //console.log(book.rating)
    return (
        <div className="book-page">
            <h1 className="book-page__title">{book.title}</h1>
            <span className="book-page__author">
                {book.author} <span className="author">(Author)</span>
            </span>
            <div className="book-page__content">
                <div className="star-rating">
                    <StarRating rating={book.rating} disable={false} />
                </div>
                <div className="book-page__review">
                    <BsPencil size={15} className="pen" />
                    <span className="sign_to_write_review"> Sign in to write a review</span>
                </div>
                <div className="book-page__left">
                    <BookCover image={book.cover} />
                    <p>{book.description}</p>
                </div>
                <div className="book-page__buy-book">
                    <BookBuy book={book} />
                    <span className="number_of_pages">{book.number_of_pages} Pages</span>
                </div>
            </div>
        </div>
    );
};

//<StarRating rating={book.rating} />
//<p>{book.rating}</p>
//<BsPencil size={15} className="pen" />
//<span className="sign_to_write_review"> Sign in to write a review</span>

//<Rating
//ratingInPercent={68}
//iconSize="l"
//showOutOf={true}
//enableUserInteraction={false}
//
///>

//console.log(StarRating);
//==============================================================================
//import React, { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router-dom";
//import { getBook } from "../../store/single-book/bookSlice.js";
//import { BookBuy } from "../../components/book-buy";
//import { BookCover } from "../../components/book-cover";
//import { BsPencil } from "react-icons/bs";
//import "./book-page.css";
//
//export const BookPage = () => {
//    const { id } = useParams();
//    const dispatch = useDispatch();
//    const { book, isLoading } = useSelector((state) => state.book);
//    useEffect(() => {
//        dispatch(getBook(id));
//    }, [dispatch, id]);
//
//    //if (!book) return <h2>I'm working on it!</h2>;
//    if (isLoading) return <h2>I'm working on it!</h2>;
//
//    //console.log({book});
//    return (
//        <div className="book-page">
//            <h1 className="book-page__title">{book.title}</h1>
//            <span className="book-page__author">
//                {book.author} <span className="author">(Author)</span>
//            </span>
//            <div className="book-page__content">
//                <div className="star-rating">
//                    <span className="star-icon">★</span>
//                    <span className="star-icon">★</span>
//                    <span className="star-icon">★</span>
//                    <span className="star-icon">★</span>
//                    <span className="star-icon">★</span>
//                    <span className="review">Review</span>
//                    <BsPencil size={15} className="pen" />
//                    <span className="sign_to_write_review"> Sign in to write a review</span>
//                </div>
//                <div className="book-page__left">
//                    <BookCover image={book.cover} />
//                    <p>{book.description}</p>
//                </div>
//                <div className="book-page__buy-book">
//                    <BookBuy book={book} />
//                    <span className="number_of_pages">{book.number_of_pages} Pages</span>
//                </div>
//            </div>
//        </div>
//    );
//};
//-------------------------------------------------------------------------------
//export const HomePage = () => {    <span className="authr">(Authr)</span>
//    const dispatch = useDispatch();
//    const { books, isLoading } = useSelector((state) => state.books);
//
//    useEffect(() => {
//        dispatch(getBooks());
//    }, [dispatch]);  <span className="sign_to_write_review">Sign in to write a review</span>

//-----------------------------------------------------------------------------

//import React from "react";
//import { useSelector } from "react-redux";
//import { BookBuy } from "../../components/book-buy";
//import { BookCover } from "../../components/book-cover";
//import "./book-page.css";
//
//export const BookPage = () => {
//    const book = useSelector((state) => state.books.books); // state.books.currentBook);
//
//    if (!book) return null;
//
//    return (
//        <div className="book-page">
//            <h1 className="book-page__title">{book.title}</h1>
//            <span className="book-page__author">{book.author}</span>
//            <span className="author">(Author)</span>
//            <div className="star-rating">
//                <span className="star-icon">★</span>
//                <span className="star-icon">★</span>
//                <span className="star-icon">★</span>
//                <span className="star-icon">★</span>
//                <span className="star-icon">★</span>
//            </div>
//            <div className="book-page__content">
//                <div className="book-page__left">
//                    <BookCover image={book.image} />
//                    <p>{book.description}</p>
//                    <p className="Популярные метки для этого продукта"></p>
//                </div>
//                <div className="book-page__buy-book">
//                    <BookBuy book={book} />
//                </div>
//            </div>
//        </div>
//    );
//};
