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

export default Game;