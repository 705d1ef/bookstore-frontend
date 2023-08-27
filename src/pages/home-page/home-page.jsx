import React from "react";
import { BookItem } from '../../components/book-item';
import "./home-page.css";

//export const HomePage = () => {
//  return <div className="home-page">HomePage</div>;
//};
// C:\bookstore\bookstore_ui\public\game-covers\black_echo.jpg
const BOOKS = [
  {
      cover: '/game-covers/the_black_ice.jpg',
      title: 'Forza Horizon 5',
      genres: ['Гонки', 'Симулятор', 'Открытый мир'],
      price: 2343,
      author: 'Test Author1',
      id: 1,
      description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
      cover: '/game-covers/black_echo.jpg',
      title: 'Battlefield 2042',
      genres: ['Экшен', 'Шутер', 'Война'],
      author: 'Test Author2',
      price: 2433,
      id: 2,
      description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
  },
  {
      cover: '/game-covers/theconcreteblonde-800x1290.jpg',
      title: 'Life is Strange True Colors',
      genres: ['Глубокий сюжет', 'Протагонистка'],
      author: 'Test Author3',
      price: 3021,
      id: 3,
      description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
  },
  {
      cover: '/game-covers/trunkmusic-800x1290.jpg',
      title: 'Grand Theft Auto V',
      genres: ['Открытый мир', 'Экшен'],
      author: 'Test Author4',
      price: 789,
      id: 4,
      description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
  },
  {
      cover: '/game-covers/rainbow_siege.jpeg',
      title: 'Tom Clancy\'s Rainbow Six® Siege',
      author: 'Test Author5',
      genres: ['Тактика', 'Шутер'],
      price: 982,
      id: 5,
      description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
  },
  {
      cover: '/game-covers/assassins_creed_valhalla.png',
      title: 'Assassin’s Creed Valhalla',
      genres: ['Паркур', 'РПГ', 'Открытый мир'],
      author: 'Test Author',
      price: 2863,
      id: 6,
      description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
]


export const HomePage = () => {
  return (
    <div className="home-page">
      {BOOKS.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
};
