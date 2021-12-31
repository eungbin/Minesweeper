import React from 'react';
import Tr from './Tr';
import { boardObject } from '../interface/boardObject';

interface boardProps {
  board: boardObject[][];
  onClick: Function;
}

export default function Board({board, onClick}: boardProps) {
  return (
    <table>
      <tbody>
        {board.map((i: boardObject[], index: number) => (
           <Tr row={i} key={index} onClick={onClick} />
        ))}
      </tbody>
    </table>
  )
}
