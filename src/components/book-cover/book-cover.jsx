import React from "react";
import "./book-cover.css";

export const BookCover = ({ image = "" }) => {
  return <div style={{ backgroundImage: `url(${image})` }} />;
};
