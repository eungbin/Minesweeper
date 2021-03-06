import { BoardObject } from "../interface/BoardObject";


export const createBoard = (boardRow: number, boardColumn: number) => {
  let index = 0;
  let row: BoardObject[] = [];
  const board: Array<BoardObject>[] = [];
  for(let i: number = 0; i<boardRow; i++) {
    for(let j: number = 0; j<boardColumn; j++) {
      row.push({value: 0, status: "close", index: index});
      index += 1;
    }
    board.push(row);
    row = [];
  }
  return board;
}

/* 초기 지뢰찾기게임 보드에 지뢰를 매설하는 작업 */
export const drawMine = (mine: number, board: BoardObject[][], boardRow: number, boardColumn: number) => {
  let random_r: number;
  let random_c: number;

  while(mine > 0) {
    random_r = Math.floor(Math.random() * boardRow);
    random_c = Math.floor(Math.random() * boardColumn);
    
    if(board[random_r][random_c].value === 0) {
      board[random_r][random_c].value = -1;
      mine -= 1;
    }
  }
  return board;
}

/* 지뢰가 없는 공간들에 주위 지뢰 개수에 따라 숫자를 부여하는 작업 */
export const calSpaceNumber = (board: BoardObject[][]) => {
  let mines: number = 0; // 해당 칸 주위의 지뢰 개수
  for(let i=0; i<board.length; i++) {
    for(let j=0; j<board[i].length; j++) {
      mines = findMine(board, i, j);
      board[i][j].value = mines;
    }
    mines = 0;
  }
  return board;
}

const findMine = (board: BoardObject[][], r: number, c: number) => {
  let mine: number = 0;
  if(board[r][c].value == -1) { // 해당 칸이 지뢰일 경우 주위 지뢰 찾지 않고 넘긴다.
    return -1;
  }
  if((r-1) >= 0) {        // 현재 인덱스를 기준으로 위쪽 행 3개의 칸 검사
    mine = findMine_C(board, (r-1), c, mine);
  }
  if((r+1) < board.length) {  // 현재 인덱스를 기준으로 아래쪽 행 3개의 칸 검사
    mine = findMine_C(board, (r+1), c, mine);
  }
  mine = findMine_C(board, r, c, mine);   // 현재 인덱스를 기준으로 가운데 행 3개의 칸 검사
  return mine;
}

const findMine_C = (board: BoardObject[][], r: number, c: number, mine: number) => {
  if(board[r][c].value === -1) {
    mine += 1;
  }
  if((c-1) >= 0) {
    if(board[r][c-1].value === -1) {
      mine += 1;
    }
  }
  if((c+1) < board.length) {
    if(board[r][c+1].value === -1) {
      mine += 1;
    }
  }
  return mine;
}