import React, { useState } from 'react';
import '../css/Game.css';
import Board from './Board';
import { boardObject, clickStatus, gameStatus } from '../interface/boardObject';
import * as minesweeper from '../libs/initFunction';
import * as afterclick from '../libs/afterClick';
import styled from "styled-components";

const boardRow: number = 10;
const boardColumn: number = 10;
const mine: number = 10;

const preBoard: boardObject[][] = minesweeper.createBoard(boardRow, boardColumn);
minesweeper.drawMine(mine, preBoard, boardRow, boardColumn);
minesweeper.calSpaceNumber(preBoard);

const Game = () => {
  const [board, setBoard] = useState(preBoard);
  const [lastClicked, setLastClicked] = useState(null);
  const [clickStatus, setClickStatus] = useState<clickStatus>('open');
  const [gameStatus, setGameStatus] = useState<gameStatus>("ing");

  const onClick = (e) => {
    if(gameStatus === "ing") {
      const r: number = Math.floor(e.target.id / boardColumn);
      const c: number = e.target.id % boardColumn;
      if(clickStatus === "open") {
        preBoard[r][c].status = "open";
        afterclick.openSpace(preBoard, r, c);
      } else if(clickStatus === "flag") {
        preBoard[r][c].status = "flag";
        setGameStatus(afterclick.flagSpace(preBoard, mine));
      } else if(clickStatus === "q_mark") {
        preBoard[r][c].status = "q_mark";
      }
      setBoard(preBoard);
      setLastClicked([r, c]);
    }
  }

  const changeClickStatus = (e) => {
    console.log(e.target.id);
    if(e.target.id === "open")
      setClickStatus("open");
    else if(e.target.id === "flag")
      setClickStatus("flag");
    else if(e.target.id === "q_mark")
      setClickStatus("q_mark");
  }
  
  return (
    <>
      <div className="title"><h1>지뢰찾기 게임</h1></div>
      <div className="buttonWrapper-game">
        <button id="open" onClick={changeClickStatus}>OPEN</button>
        <button id="flag" onClick={changeClickStatus}>FLAG</button>
        <button id="q_mark" onClick={changeClickStatus}>Q_MARK</button>
      </div>
      <div className="board">{board === null ? <h1>Loading...</h1> : <Board board={board} onClick={onClick} />}</div>
    </>
  )
}

styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    background-color: pink;
  };
  &:active {
    background-color: aqua;
  }
`;

export default Game;