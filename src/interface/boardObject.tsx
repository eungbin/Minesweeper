type status = "open" | "close" | "flag";

export interface boardObject {
  value: number;
  status: status;
  index: number;
}