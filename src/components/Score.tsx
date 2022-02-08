import React from 'react';
import '../css/Score.css';
import * as converter from '../libs/timeConverter';

const Main = () => {
  const myScore: Array<number> = JSON.parse(localStorage.getItem("history"));
  const historyList: Array<string> = [];
  myScore?.map(i => {
    historyList?.push(converter.numToTime_string(i));
  })
  return (
    <>
      <div className="title"><h1>최고기록</h1></div>
      {historyList}
    </>
  )
}

export default Main;