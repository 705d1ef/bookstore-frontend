import React from "react";
import './book-cover.css'

export const BookCover = ({ cover = "" }) => {
  return (
    <div className="book-cover" style={{ backgroundImage: `url(${cover})` }} />
  );
};
