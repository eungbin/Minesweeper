import React from 'react';
import Td from './Td';
import { boardObject } from '../interface/boardObject';

interface trProps {
  row: boardObject[];
  key: number;
}

export default function Tr({row}: trProps) {
  return (
    <tr>
      {row.map((i: boardObject, index: number) => (
        <Td column={i} key={index} />
      ))}
    </tr>
  )
}