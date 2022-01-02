import { boardObject } from "../interface/boardObject";

const findSpace = (board: boardObject[][], r: number, c: number) => {
  if((r-1) >= 0) {        // 현재 인덱스를 기준으로 위쪽 행 3개의 칸 검사
    findSpace_C(board, r-1, c);
  }
  if((r+1) < board.length) {  // 현재 인덱스를 기준으로 아래쪽 행 3개의 칸 검사
    findSpace_C(board, r+1, c);
  }
  findSpace_C(board, r, c);   // 현재 인덱스를 기준으로 가운데 행 3개의 칸 검사
}

const findSpace_C = (board: boardObject[][], r: number, c: number) => {
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

export const openSpace = (board: boardObject[][], r: number, c: number) => {
  if(board[r][c].value === 0) {
    findSpace(board, r, c);
  }
}