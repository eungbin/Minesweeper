import React from 'react';
import Td from './Td';
import { BoardObject } from '../interface/BoardObject';

interface trProps {
  row: BoardObject[];
  key: number;
  onClick: Function;
}

export default function Tr({row, onClick}: trProps) {
  return (
    <tr>
      {row.map((i: BoardObject, index: number) => (
        <Td column={i} key={index} onClick={onClick} />
      ))}
    </tr>
  )
}