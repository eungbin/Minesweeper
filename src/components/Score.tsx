import React from 'react';
import '../css/Score.css';
import * as converter from '../libs/timeConverter';

const Main = () => {
  const myScore: Array<number> = JSON.parse(localStorage.getItem("history"));
  const historyList: Array<string> = [];
  myScore?.map(i => {
    historyList?.push(converter.numToTime_timeForm(i));
  })
  return (
    <>
      <div className="title"><h1>내 기록</h1></div>
      <div className="history">{historyList.map((i, index) => (
        <div key={index}>{i}</div>
      ))}</div>
    </>
  )
}

export default Main;