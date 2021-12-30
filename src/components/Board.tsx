import React from 'react';
import Tr from './Tr';

interface boardObject {
  value: number;
  status: number;
}

interface boardProps {
  board: boardObject[][];
}

export default function Board({board}: boardProps) {
  return (
    <table>
      <tbody>
        {board.map((i: boardObject[], index: number) => (
           <Tr row={i} key={index} />
        ))}
      </tbody>
    </table>
  )
}
