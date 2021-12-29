import React from 'react';
import '../css/Td.css';

interface tdProps {
  column: number;
}

export default function Td({column}: tdProps) {
  console.log(column);
  console.log("TEST");
  return (
    <td className="boardTd">
      {column}
    </td>
  )
}