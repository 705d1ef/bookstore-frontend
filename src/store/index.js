import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./books/booksSlice";
import bookSlice from "./single-book/bookSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        books: booksSlice,
        book: bookSlice,
        cart: cartSlice,
    },
});
