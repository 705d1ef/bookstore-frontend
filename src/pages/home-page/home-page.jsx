import React from "react";
import "./home-page.css";

//export const HomePage = () => {
//  return <div className="home-page">HomePage</div>;
//};

export const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
};
