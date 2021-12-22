import React from 'react';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';

interface Props {}

const App = ({  }: Props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Body</h1>
      </div>
    </BrowserRouter>
  );
};

export default App;