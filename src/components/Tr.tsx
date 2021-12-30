import React from 'react';
import Td from './Td';

interface boardObject {
  value: number;
  status: number;
}

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