import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "../services/booksService";

export const getBooks = createAsyncThunk("GET_BOOKS", async (_, thunkAPI) => {
    try {
        return await booksService.getBooks();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.responce.data);
    }
});

const booksSlice = createSlice({
    name: "books",
    initialState: {
        CurrentBook: null,
        isError: false,
        isLoading: false,
        message: "",
    },
    reducers: {
        setCurrentBook: (state, action) => {
            state.CurrentBook = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books = action.payload;
            })
            .addCase(getBooks.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;

                state.books = null;
            });
    },
});
export const { setCurrentBook } = booksSlice.actions;
export default booksSlice.reducer;
