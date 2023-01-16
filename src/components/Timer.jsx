import React, { useState, useEffect } from 'react';
import TIMER_FINISHED from '../assets/audio/TimerFinished.mp3'

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //effect applied every second
  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isRunning, timeLeft]);

  //when the timer time expires
  if (timeLeft < 0) {
    setTimeLeft(0)
    setIsRunning(false)

    const audio = new Audio(TIMER_FINISHED)
    audio.loop = true
    audio.play().then()

    setTimeout(() => {
      audio.pause();
    }, 3000);
  }

  function handleStartStop() {
    if (timeLeft !== 0) {
      setIsRunning(!isRunning);
    } else {
      setIsRunning(false);
    }
  }

  function handleReset() {
    setTimeLeft(0);
    setIsRunning(false);
  }

  //event delegation
  function handleAddMinutes(btn) {
    const seconds = btn.target.value
    setTimeLeft(timeLeft + parseInt(seconds));
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <div className="timer ">
        <div>
          <span className="countdown font-mono text-4xl flex justify-center m-5">
            <span style={{ '--value': minutes }}></span>m
            <span style={{ '--value': seconds }}></span>s
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-evenly">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleStartStop} />
            {
              //checks whether the timer is running or not, to show the play or pause button
              isRunning
                ? <svg className="fill-current w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                  <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
                </svg>
                : <svg className="fill-current w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7 6v12l10-6z"></path>
                </svg>
            }
          </label>
          <button className="time-btn" onClick={handleReset}>Reset</button>
        </div>
      </div>
      <div className="border-t-[1px] w-5/6 mx-auto m-10 md:hidden"></div>
      <div className="md:h-2/4 flex flex-1 flex-col items-center justify-evenly">
        <h1 className="text-xl">Set the time:</h1>
        <button onClick={handleAddMinutes} className="time-btn 1-min" value='60'>+ 1 min</button>
        <button onClick={handleAddMinutes} className="time-btn 5-min" value='300'>+ 5 min</button>
        <button onClick={handleAddMinutes} className="time-btn 30-min" value='1800'>+ 30 min</button>
      </div>
    </>
  )
}
