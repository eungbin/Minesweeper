import React from 'react';
import '../css/Td.css';
import { boardObject } from '../interface/boardObject';

interface tdProps {
  column: boardObject;
  key: number;
}

export default function Td({column}: tdProps) {
  if(column.status === "close") {
    return (
      <td className="boardTd">
        
      </td>
    )
  } else if(column.status === "open") {
    return (
      <td className="boardTd">
        {column.value}
      </td>
    )
  }
}