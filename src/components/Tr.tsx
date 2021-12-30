import React from 'react';
import Td from './Td';

interface trProps {
  row: number[];
  rowIndex: number;
}

export default function Tr({row, rowIndex}: trProps) {
  return (
    <tr>
      {row.map((i: number, index: number) => (
        <Td column={i} colIndex={index} />
      ))}
    </tr>
  )
}