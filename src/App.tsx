import React, {useState} from 'react';
import './css/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Game from './components/Game';
import Score from './components/Score';

const App = () => {
  console.log("제발... 혹시... 배포 됐니...?");
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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