import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { GetStarted } from "./pages/GetStartedPage/GetStartedPage";
import { CreateCertificate } from "./pages/CreateCertificate";
=======
import { GetStarted } from "./pages/GetStartedPage";
>>>>>>> c45fd14e20dc35bd9c85c9c7714e1a0e3248cea4
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/index";
import GlobalStyle from "./GlobalStyle";

import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div>
=======
    <div className="App">
>>>>>>> c45fd14e20dc35bd9c85c9c7714e1a0e3248cea4
      <BrowserRouter>
      <GlobalStyle />
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GetStarted" element={<GetStarted />} />
<<<<<<< HEAD
        <Route path="/CreateCertificate" element={<CreateCertificate />} />
=======
>>>>>>> c45fd14e20dc35bd9c85c9c7714e1a0e3248cea4
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
