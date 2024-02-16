import axios from "axios";

const getBooks = async () => {
    const books = await axios.get("book");
    return books.data;
};

const getBook = async (id) => {
    const books = await axios.get(`/book/${id}`);
    return books.data;
};

const booksService = {
    getBooks,
    getBook,
};

export default booksService;
