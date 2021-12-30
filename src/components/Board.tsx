import React from 'react';
import Tr from './Tr';

interface boardProps {
  board: number[][];
}

export default function Board({board}: boardProps) {
  console.log(board);
  return (
    <table>
      {board.map((i: number[], index: number) => {
        <Tr row={i} />
      })}
    </table>
  )
}
