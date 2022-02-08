import React from 'react';
import '../css/Score.css';

const Main = () => {
  const myScore = localStorage.getItem("score");
  return (
    <>
      <div className="title"><h1>최고기록</h1></div>
      {myScore}
    </>
  )
}

export default Main;