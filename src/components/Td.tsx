import React from 'react';
import '../css/Td.css';

interface boardObject {
  value: number;
  status: number;
}

interface tdProps {
  column: boardObject;
  key: number;
}

export default function Td({column}: tdProps) {
  if(column.status === 0) {
    return (
      <td className="boardTd">
        
      </td>
    )
  } else if(column.status === 1) {
    return (
      <td className="boardTd">
        {column.value}
      </td>
    )
  }
}