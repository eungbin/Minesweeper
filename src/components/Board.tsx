import React, {useState} from 'react';
import Tr from './Tr';
import { BoardObject, clickStatus, gameStatus } from '../interface/BoardObject';
import styled from "styled-components";
import * as afterclick from '../libs/afterClick';

interface boardProps {
  propsBoard: BoardObject[][];
  mine: number;
  setStatus: Function;
}

export default function Board({propsBoard, mine, setStatus}: boardProps) {
  const [board, setBoard] = useState<BoardObject[][]>(propsBoard);
  const preBoard: BoardObject[][] = board;
  const [clickStatus, setClickStatus] = useState<clickStatus>('open');
  const [gameStatus, setGameStatus] = useState<gameStatus>("ing");
  const boardColumn = propsBoard[0].length;

  const onClick = (e) => {
    let status: gameStatus = "ing";
    if(gameStatus === "ing") {
      const r: number = Math.floor(e.target.id / boardColumn);
      const c: number = e.target.id % boardColumn;
      if(clickStatus === "open") {
        preBoard[r][c].status = "open";
        status = afterclick.openSpace(preBoard, r, c);
        setGameStatus(status);
        setStatus(status);
      } else if(clickStatus === "flag") {
        preBoard[r][c].status = "flag";
        status = afterclick.openSpace(preBoard, r, c);
        setGameStatus(status);
        setStatus(status);
      } else if(clickStatus === "q_mark") {
        preBoard[r][c].status = "q_mark";
      }
      setBoard([...preBoard]);
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
      <div className="buttonWrapper-game">
        <Button id="open" onClick={changeClickStatus}>OPEN</Button >
        <Button id="flag" onClick={changeClickStatus}>FLAG</Button>
        <Button id="q_mark" onClick={changeClickStatus}>Q_MARK</Button>
      </div>
      <table>
        <tbody>
          {board.map((i: BoardObject[], index: number) => (
            <Tr row={i} key={index} onClick={onClick} />
          ))}
        </tbody>
      </table>
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