import React from 'react';
import '../css/Main.css';
import MineGif from './MineGif';
import Button from './Button';

const Main = () => {
  return (
    <>
      <div className="title"><h1>지뢰찾기 게임</h1></div>
      <MineGif />
      <div className="buttonWrapper">
        <Button width={"400px"} height={"50px"} color={"white"} text={"시작하기"} hColor={"pink"} aColor={"aqua"} />
      </div>
    </>
  )
}

export default Main;