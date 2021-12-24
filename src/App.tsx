import React, {useState} from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;