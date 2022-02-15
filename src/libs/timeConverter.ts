export const timeToString = (hour: number, min: number, sec: number) => {
  return hour.toString() + ":" + min.toString() + ":" + sec.toString();
}

export const timeForm = (hour: number, min: number, sec: number) => {
  return hour.toString() + "시간 " + min.toString() + "분 " + sec.toString() + "초";
}

export const stringToTime_hour = (stringTime: string) => {
  return parseInt(stringTime.split(":")[0]);
}

export const stringToTime_min = (stringTime: string) => {
  return parseInt(stringTime.split(":")[1]); 
}

export const stringToTime_sec = (stringTime: string) => {
  return parseInt(stringTime.split(":")[2]);
}

export const numToTime_string = (numTime: number) => {
  let min: number = Math.floor(numTime/60);
  let hour: number = Math.floor(min/60);
  let sec: number = Math.floor(numTime%60);
  return timeToString(hour, min, sec);
}

export const numToTime_timeForm = (numTime: number) => {
  let min: number = Math.floor(numTime/60);
  let hour: number = Math.floor(min/60);
  let sec: number = Math.floor(numTime%60);
  return timeForm(hour, min, sec);
}

export const numToTime_numArr = (numTime: number) => {
  let min: number = Math.floor(numTime/60);
  let hour: number = Math.floor(min/60);
  let sec: number = Math.floor(numTime%60);
  return [hour, min, sec];
}

export const timeToNum = (hour: number, min: number, sec: number) => {
  return (hour*3600) + (min*60) + sec;
}