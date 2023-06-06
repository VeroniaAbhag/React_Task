import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Movies from "./components/Movies/movies";
import Favorites from "./components/Favorites/favorites";
import Basic from "./components/Form/form";
import NotFound from "./components/NotFound/notfound";
import Details from "./components/Details/details";
import { CounterProvider } from "./Context/counter";
import { useState } from "react";
// import { BrowserRouter } from "react-router-dom";

function App() {
  const [lang, setLang ] =useState("en");
  return (
    <div className="App">
      <CounterProvider value={{lang, setLang }}>
      <NavBar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path="/Movies" element={<Movies/>} />
        <Route path="/Favorites" element={<Favorites/>} />
        <Route path="/Form" element={<Basic/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
        </CounterProvider>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
