import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetStarted } from "./pages/GetStartedPage/GetStartedPage";
import { CreateCertificate } from "./pages/CreateCertificate";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/index";
import GlobalStyle from "./GlobalStyle";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <GlobalStyle />
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/CreateCertificate" element={<CreateCertificate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
