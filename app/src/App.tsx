import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";

import Home from './Views/Home';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}