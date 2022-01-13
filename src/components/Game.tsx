import React from 'react';
import '../css/Game.css';
import Board from './Board';
import Timer from './Timer';
import { BoardObject } from '../interface/BoardObject';
import * as minesweeper from '../libs/initFunction';

const boardRow: number = 10;
const boardColumn: number = 10;
const mine: number = 10;

const Game = () => {
  const preBoard: BoardObject[][] = minesweeper.createBoard(boardRow, boardColumn);
  minesweeper.drawMine(mine, preBoard, boardRow, boardColumn);
  minesweeper.calSpaceNumber(preBoard);
  
  return (
    <>
      <div className="title"><h1>지뢰찾기 게임</h1></div>
      <div className="board">{preBoard === null ? <h1>Loading...</h1> : <Board propsBoard={preBoard} mine={mine} />}</div>
      <Timer />
    </>
  )
}

export default Game;