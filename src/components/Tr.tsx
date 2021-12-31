import React from 'react';
import Td from './Td';
import { boardObject } from '../interface/boardObject';

interface trProps {
  row: boardObject[];
  key: number;
  onClick: Function;
}

export default function Tr({row, onClick}: trProps) {
  return (
    <tr>
      {row.map((i: boardObject, index: number) => (
        <Td column={i} key={index} onClick={onClick} />
      ))}
    </tr>
  )
}