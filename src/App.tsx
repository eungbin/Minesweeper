import React, {useState} from 'react';
import './css/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Game from './components/Game';
import Score from './components/Score';

const App = () => {
  return (
    <HashRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/game" element={<Game />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;