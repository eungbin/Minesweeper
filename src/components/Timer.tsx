import React, { useState, useRef, useEffect } from 'react';
import '../css/Timer.css';
import { gameStatus } from '../interface/BoardObject';

interface Itime {
  hour: number;
  min: number;
  sec: number;
}

interface TimerProps {
  gameStatus: gameStatus;
}

export default function Timer({gameStatus}: TimerProps) {
  const initTime: Itime = {hour: 0, min: 0, sec: 0};
  const [time, setTime] = useState<Itime>(initTime);
  const currentTime = useRef(0);
  const timerId = useRef(null);

  const topRank = () => {
    const past_hour: number = parseInt(localStorage.getItem("score").split(":")[0]);
    const past_min: number = parseInt(localStorage.getItem("score").split(":")[1]);
    const past_sec: number = parseInt(localStorage.getItem("score").split(":")[2]);
    const past_time = (past_hour*360) + (past_min*60) + past_sec;
    const pre_time = (time.hour*360) + (time.min*60) + time.sec;
    
    if(past_time >= pre_time) {
      console.log("최고기록 갱신");
      localStorage.setItem("score", time.hour.toString() + ":" + time.min.toString() + ":" + time.sec.toString());
    } else {
      return;
    }
  }

  useEffect(() => {
    timerId.current = setInterval(() => {
      let min: number = currentTime.current/60;
      let hour: number = min/60;
      let sec: number = currentTime.current%60;
      min = min%60;
      const parseTime: Itime = {hour: Math.floor(hour), min: Math.floor(min), sec: Math.floor(sec)};
      setTime(parseTime);
      currentTime.current += 1;
    }, 1000)
    return() => clearTimeout(timerId.current);
  }, []);

  useEffect(() => {
    if(gameStatus === "win") {
      clearInterval(timerId.current);
      topRank();
    } else if(gameStatus === "lose") {
      clearInterval(timerId.current);
    }
  }, [time]);

  return (
    <div className="timer">
      {time?.hour}:{time?.min}:{time?.sec}
    </div>
  )
}