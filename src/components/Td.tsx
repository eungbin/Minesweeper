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
      <td className="boardTd">
        <div className="cell"><img src="imgs/default.png" onClick={onTdClick} id={column.index.toString()} /></div>
      </td>
    )
  } else if(column.status === "open" && column.value !== -1) {
    return (
      <td className="boardTd" id={column.index.toString()}>
        <div className="cell"><img src={"imgs/empty" + column.value + ".png"}/></div>
      </td>
    )
  } else if(column.status === "open" && column.value === -1) {
    return (
      <td className="boardTd" id={column.index.toString()}>
        <div className="cell"><img src="imgs/mine.png"/></div>
      </td>
    )
  } else if(column.status === "flag") {
    return (
      <td className="boardTd">
        <div className="cell"><img src="imgs/flag.png" onClick={onTdClick} id={column.index.toString()}/></div>
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