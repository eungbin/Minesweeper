import React from 'react';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

interface Props {}

const App = ({  }: Props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;