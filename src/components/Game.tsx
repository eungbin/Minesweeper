import React, { useState } from 'react';
import '../css/Game.css';
import Board from './Board';
import { boardObject } from '../interface/boardObject';
import * as minesweeper from '../libs/initFunction';
import * as afterclick from '../libs/afterClick';

const boardRow: number = 10;
const boardColumn: number = 10;
const mine: number = 10;

const preBoard: boardObject[][] = minesweeper.createBoard(boardRow, boardColumn);
minesweeper.drawMine(mine, preBoard, boardRow, boardColumn);
minesweeper.calSpaceNumber(preBoard);

const Game = () => {
  const [board, setBoard] = useState(preBoard);
  const [lastClicked, setLastClicked] = useState(null);

  const onClick = (e) => {
    const r: number = Math.floor(e.target.id / boardColumn);
    const c: number = e.target.id % boardColumn;
    preBoard[r][c].status = "open";
    afterclick.openSpace(preBoard, r, c);
    setBoard(preBoard);
    setLastClicked([r, c]);
  }
  
  return (
    <>
      <div className="title"><h1>지뢰찾기 게임</h1></div>
      <div className="board">{board === null ? <h1>Loading...</h1> : <Board board={board} onClick={onClick} />}</div>
    </>
  )
}

export default Game;