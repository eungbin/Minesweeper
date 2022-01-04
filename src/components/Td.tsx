import React from 'react';
import '../css/Td.css';
import { boardObject } from '../interface/boardObject';

interface tdProps {
  column: boardObject;
  key: number;
  onClick: Function;
}

export default function Td({column, onClick}: tdProps) {

  const onTdClick = (e) => {
    onClick(e);
  }

  if(column.status === "close") {
    return (
      <td className="boardTd" onClick={onTdClick} id={column.index.toString()}>
        
      </td>
    )
  } else if(column.status === "open") {
    return (
      <td className="boardTd" id={column.index.toString()}>
        {column.value}
      </td>
    )
  } else if(column.status === "flag") {
    return (
      <td className="boardTd" style={{backgroundColor:"pink"}} id={column.index.toString()}>
        F
      </td>
    )
  } else if(column.status === "q_mark") {
    return (
      <td className="boardTd" style={{backgroundColor:"aqua"}} id={column.index.toString()}>
        ?
      </td>
    )
  }
}