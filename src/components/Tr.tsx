import React from 'react';
import Td from './Td';

interface trProps {
  row: number[];
  key: number;
}

export default function Tr({row}: trProps) {
  return (
    <tr>
      {row.map((i: number, index: number) => (
        <Td column={i} key={index} />
      ))}
    </tr>
  )
}