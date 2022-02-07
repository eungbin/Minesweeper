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
      localStorage.setItem("score", time.hour.toString() + ":" + time.min.toString() + ":" + time.sec.toString());
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