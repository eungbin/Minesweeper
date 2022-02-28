import React, {useState} from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Game from './components/Game';
import Score from './components/Score';

const App = () => {

  return (
    <BrowserRouter basename="/Minesweeper">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/game" element={<Game />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;