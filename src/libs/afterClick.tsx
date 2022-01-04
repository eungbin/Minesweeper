import { BoardObject, gameStatus } from "../interface/BoardObject";

const findSpace = (board: BoardObject[][], r: number, c: number) => {
  if((r-1) >= 0) {        // 현재 인덱스를 기준으로 위쪽 행 3개의 칸 검사
    findSpace_C(board, r-1, c);
  }
  if((r+1) < board.length) {  // 현재 인덱스를 기준으로 아래쪽 행 3개의 칸 검사
    findSpace_C(board, r+1, c);
  }
  findSpace_C(board, r, c);   // 현재 인덱스를 기준으로 가운데 행 3개의 칸 검사
}

const findSpace_C = (board: BoardObject[][], r: number, c: number) => {
  if(board[r][c].status == 'close') {
    if(board[r][c].value === 0) {
      board[r][c].status = 'open';
      openSpace(board, r, c);
    } else if(board[r][c].value >=1 && board[r][c].value <= 8) {
      board[r][c].status = 'open';
    }
  }
  if((c-1) >= 0) {
    if(board[r][c-1].value === 0 && board[r][c-1].status == 'close') {
      board[r][c-1].status = 'open';
      openSpace(board, r, c-1);
    } else if(board[r][c-1].value >=1 && board[r][c-1].value <= 8 && board[r][c-1].status == 'close') {
      board[r][c-1].status = 'open';
    }
  }
  if((c+1) < board.length) {
    if(board[r][c+1].value === 0 && board[r][c+1].status == 'close') {
      board[r][c+1].status = 'open';
      openSpace(board, r, c+1);
    } else if(board[r][c+1].value >=1 && board[r][c+1].value <= 8 && board[r][c+1].status == 'close') {
      board[r][c+1].status = 'open';
    }
  }
}

export const openSpace = (board: BoardObject[][], r: number, c: number) => {
  if(board[r][c].value === 0) {
    findSpace(board, r, c);
  }
}

const isMine = (board: BoardObject[][], r: number, c: number) => {
  if(board[r][c].value === -1) {
    if(board[r][c].status === "flag") {
      return 1;
    }
  }
  return 0;
}

export const flagSpace = (board: BoardObject[][], allMines: number) => {
  let mines = 0;
  let gameStatus: gameStatus = "ing";
  for(let i: number=0; i<board.length; i++) {
    for(let j: number=0; j<board[i].length; j++) {
      mines += isMine(board, i, j);
    }
  }
  if(mines === allMines) {
    gameStatus = "fin";
  }
  return gameStatus;
}