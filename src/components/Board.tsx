import React from 'react';
import Tr from './Tr';

interface boardProps {
  board: number[][];
}

export default function Board({board}: boardProps) {
  console.log(board);
  return (
    <table>
      {board.map(i => {
        <Tr row={i} />
      })}
    </table>
  )
}