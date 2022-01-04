type status = "open" | "close" | "flag" | "q_mark";

export interface BoardObject {
  value: number;
  status: status;
  index: number;
}

export type clickStatus = "open" | "flag" | "q_mark";

export type gameStatus = "ing" | "fin";