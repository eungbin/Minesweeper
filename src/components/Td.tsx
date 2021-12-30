import React from 'react';
import '../css/Td.css';

interface tdProps {
  column: number;
  key: number;
}

export default function Td({column}: tdProps) {
  return (
    <td className="boardTd">
      {column}
    </td>
  )
}