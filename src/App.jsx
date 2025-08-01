import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:category" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<Detail/>} />
      </Routes>
    </>
  );
}

export default App;
