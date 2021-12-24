import React from 'react';
import '../css/Main.css';
import MineGif from './MineGif';

const Main = () => {
  return (
    <>
      <div className="title"><h1>지뢰찾기 게임</h1></div>
      <MineGif />
    </>
  )
}

export default Main;