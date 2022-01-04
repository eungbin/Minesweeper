import React from 'react';
import '../css/Game.css';
import Board from './Board';
import { boardObject, clickStatus, gameStatus } from '../interface/boardObject';
import * as minesweeper from '../libs/initFunction';
import styled from "styled-components";

const boardRow: number = 10;
const boardColumn: number = 10;
const mine: number = 10;

const Game = () => {
  const preBoard: boardObject[][] = minesweeper.createBoard(boardRow, boardColumn);
  minesweeper.drawMine(mine, preBoard, boardRow, boardColumn);
  minesweeper.calSpaceNumber(preBoard);
  
  return (
    <>
      <div className="title"><h1>지뢰찾기 게임</h1></div>
      <div className="board">{preBoard === null ? <h1>Loading...</h1> : <Board propsBoard={preBoard} mine={mine} />}</div>
    </>
  )
}

const Button = styled.button`
  width: 80px;
  height: 50px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid black;
  margin: 0 auto;
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