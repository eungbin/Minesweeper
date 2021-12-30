import React from 'react';
import '../css/Td.css';

interface tdProps {
  column: number;
  colIndex: number;
}

export default function Td({column, colIndex}: tdProps) {
  return (
    <td className="boardTd">
      {column}
    </td>
  )
}