import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "../services/booksService";

export const getBook = createAsyncThunk("GET_BOOK", async (id, thunkAPI) => {
    try {
        return await booksService.getBook(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const bookSlice = createSlice({
    name: "book",
    initialState: {
        book: null,
        isLoading: false,
        isError: false,
        message: "",
        errors: null,
    },
    reducers: {
        resetBookErrors: (state) => {
            state.errors = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getBook.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBook.fulfilled, (state, action) => {
                state.isLoading = false;
                state.book = action.payload;
            })
            .addCase(getBook.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload.message;
                state.book = null;
            });
    },
});

export const { resetBookErrors } = bookSlice.actions;
export default bookSlice.reducer;
