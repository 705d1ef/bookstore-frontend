import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "../services/booksService";

export const getCartItems = createAsyncThunk("GET_CART_ITEMS", async (_, thunkAPI) => {
    try {
        return await booksService.getBooks();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.responce.data);
    }
});
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart: [],
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload);
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter((book) => book.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books = action.payload;
            })
            .addCase(getCartItems.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload.message;
                state.books = null;
            });
    },
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
