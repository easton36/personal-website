import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from "./Components/Nav";

import Home from './Views/Home';
import Whiteboard from './Views/Whiteboard';
import Livechat from './Views/Livechat';
import Error404 from './Views/404';

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whiteboard" element={<Whiteboard />} />
            <Route path="/livechat" element={<Livechat />} />

            <Route path="*" element={<Error404 />} />
          </Routes>

      </BrowserRouter>

      <ToastContainer position="bottom-right" theme="colored"/>
    </>
  )
}