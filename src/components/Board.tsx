import React from 'react';
import Tr from './Tr';

interface boardProps {
  board: number[][];
}

export default function Board({board}: boardProps) {
  return (
    <table>
      <tbody>
        {board.map((i: number[], index: number) => (
           <Tr row={i} key={index} />
        ))}
      </tbody>
    </table>
  )
}
