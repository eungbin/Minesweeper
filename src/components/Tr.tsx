import React from 'react';
import Td from './Td';

interface trProps {
  row: number[];
}

export default function Tr({row}: trProps) {
  console.log(row);
  return (
    <tr>
      {row.map((i: number, index: number) => {
        <Td column={i} />
      })}
    </tr>
  )
}