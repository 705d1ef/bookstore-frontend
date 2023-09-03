import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name: "books",
    initialState: {
        currentBook: null,
    },
    reducers: {
        setCurrentBook: (state, action) => {
            state.currentBook = action.payload;
        },
    },
});

export const { setCurrentBook } = booksSlice.actions;
export default booksSlice.reducer;
