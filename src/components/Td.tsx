import React from 'react';
import '../css/Td.css';
import { BoardObject } from '../interface/BoardObject';

interface tdProps {
  column: BoardObject;
  key: number;
  onClick: Function;
}

export default function Td({column, onClick}: tdProps) {

  const onTdClick = (e) => {
    onClick(e);
  }

  if(column.status === "close") {
    return (
      <td className="boardTd closeCell" onClick={onTdClick} id={column.index.toString()}></td>
    )
  } else if(column.status === "open" && column.value !== -1) {
    return (
      <td className="boardTd openNumber" id={column.index.toString()}>
        {column.value}
      </td>
    )
  } else if(column.status === "open" && column.value === -1) {
    return (
      <td className="boardTd" id={column.index.toString()}>
        *
      </td>
    )
  } else if(column.status === "flag") {
    return (
      <td className="boardTd" onClick={onTdClick} style={{backgroundColor:"pink"}} id={column.index.toString()}>
        F
      </td>
    )
  } else if(column.status === "q_mark") {
    return (
      <td className="boardTd" onClick={onTdClick} style={{backgroundColor:"aqua"}} id={column.index.toString()}>
        ?
      </td>
    )
  }
}