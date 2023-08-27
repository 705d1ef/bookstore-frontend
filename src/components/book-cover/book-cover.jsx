import React from "react";
import "./book-cover.css";

export const BookCover = ({ cover = "" }) => {
  return <div style={{ backgroundImage: `url(${cover})` }} />;
};
