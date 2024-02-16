import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { BookPage } from "./pages/book-page";
import { Header } from "./components/header";
import { paths } from "./paths";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path={paths.home} element={<HomePage />} />
                    <Route path={`${paths.book}/:id`} element={<BookPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

//function App() {
//    return (
//        <BrowserRouter>
//            <Routes>
//                <Route path={paths.home} element={<HomePage />} />
//                <Route path={`${paths.book}/:id`} element={<BookPage />} />
//            </Routes>
//        </BrowserRouter>
//    );
//}
//
//export default App;
//-------------------------------------------------------------------------------------

//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { HomePage } from "./pages/home-page";
//import { BookPage } from "./pages/book-page";
//import { Header } from "./components/header";
//import { Provider } from "react-redux";
//import { store } from "./store";
//
//function App() {
//    return (
//        <Provider store={store}>
//            <BrowserRouter>
//                <div className="App">
//                    <Header />
//                    <Routes>
//                        <Route path="/" element={<HomePage />} />
//                    </Routes>
//                    <Routes>
//                        <Route path="/app/:title" element={<BookPage />} />
//                    </Routes>
//                </div>
//            </BrowserRouter>
//        </Provider>
//    );
//}
//
//export default App;
