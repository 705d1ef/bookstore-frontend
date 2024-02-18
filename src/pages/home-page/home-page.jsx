import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/books/booksSlice";
import { BookItem } from "../../components/book-item";
import "./home-page.css";

<<<<<<< HEAD
export const HomePage = ({rating}) => {
    const dispatch = useDispatch();
    const { books, isLoading } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    if (isLoading) return <h2>Loading...</h2>;
    return <div className="home-page">{books && books.map((book) => <BookItem key={book.id} {...book} />)}

    </div>
=======
export const HomePage = ({ rating }) => {
    const dispatch = useDispatch();
    const { books, isLoading } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    if (isLoading) return <h2>Loading...</h2>;
    return <div className="home-page">{books && books.map((book) => <BookItem key={book.id} {...book} />)}</div>;
>>>>>>> star_rating_2
};

//----------------------------------------------------------------------------------------
//import React from "react";
//import { BookItem } from "../../components/book-item";
//import "./home-page.css";
//
//const BOOKS = [
//  {
//    image: "/game-covers/lim_10.jpg",
//    title: "Forza Horizon 5",
//    genres: ["Гонки", "Симулятор", "Открытый мир"],
//    price: 243,
//    author: "Test Author1",
//    id: 1,
//    description:
//      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
//  },
//  {
//    image: "/game-covers/gregory_4.jpg",
//    title: "Battlefield 2042",
//    genres: ["Экшен", "Шутер", "Война"],
//    author: "Test Author2",
//    price: 233,
//    id: 2,
//    description:
//      "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.",
//  },
//  {
//    image: "/game-covers/life_is_strange_true_colors.jpeg",
//    title: "Life is Strange True Colors",
//    genres: ["Глубокий сюжет", "Протагонистка"],
//    author: "Test Author3",
//    price: 321,
//    id: 3,
//    description:
//      "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.",
//  },
//  {
//    image: "/game-covers/ford_6.jpg",
//    title: "Grand Theft Auto V",
//    genres: ["Открытый мир", "Экшен"],
//    author: "Test Author4",
//    price: 789,
//    id: 4,
//    description:
//      "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.",
//  },
//  {
//    image: "/game-covers/grinberg_11.jpg",
//    title: "Tom Clancy's Rainbow Six®",
//    author: "Test Author5",
//    genres: ["Тактика", "Шутер"],
//    price: 982,
//    id: 5,
//    description:
//      "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
//  },
//  {
//    image: "/game-covers/battlefield_2042.jpg",
//    title: "Assassin’s Creed Valhalla",
//    genres: ["Паркур", "РПГ", "Открытый мир"],
//    author: "Test Author",
//    price: 286,
//    id: 6,
//    description:
//      "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.",
//  },
//];
//
//export const HomePage = () => {
//  return (
//    <div className="home-page">
//      {BOOKS.map((book) => (
//        <BookItem book={book} key={book.id} />
//      ))}
//    </div>
//  );
//};
//
