import React, { useState } from 'react'
import styles from './StopWatch.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import upImage from "./Vector (1).png";
import downImage from "./Vector (2).png";

export const StopWatch = () => {
    
    let[hour, setHour] = useState(0)
    let[minutes, setMinutes] = useState(0)
    let[seconds, setSeconds] = useState(0)
    let[playing, setPlaying] = useState(false)

    const increaseHour = ()=>{
        if(hour === 59){
            setHour(0)
            return
        }
        setHour(++hour)
    }
    const decreaseHour = ()=>{
        if(hour === 0){
            setHour(0)
            return
        }
        setHour(--hour)
    }
    const increaseMinutes = ()=>{
        if(minutes === 59){
            setMinutes(0)
            return
        }
        setMinutes(++minutes)
    }
    const decreaseMinutes = ()=>{
        if(minutes === 0){
            setMinutes(0)
            return
        }
        setMinutes(--minutes)
    }
    const increaseSeconds = ()=>{
        if(seconds === 59){
            setSeconds(0)
            return
        }
        setSeconds(++seconds)
    }
    const decreaseSeconds = ()=>{
        if(seconds === 0){
            setSeconds(0)
            return
        }
        setSeconds(--seconds)
    }
    function convert(totalSeconds){
        const totalMinutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60
        const hours = Math.floor(totalMinutes / 60)
        const minutes = totalMinutes % 60
        return `${hours}:${minutes}:${seconds}`
    }

  return (
    <div className={styles.stopWatchCard}>
        <div className={styles.countdownCircleTimer}>
                <CountdownCircleTimer
                    isPlaying={playing}
                    duration={seconds + minutes * 60 + hour * 60 * 60}
                    colors={'rgba(255, 106, 106, 1)'}
                >
                {({ remainingTime }) => (<span className={styles.timer}>{convert(remainingTime)}</span>)}
                </CountdownCircleTimer>
        </div>
        <div className={styles.stopWatch}>
            <div className={styles.time}>
                <span>Hours</span>
                <img onClick={increaseHour} src={upImage} alt='inc'></img>
                <span>{hour}</span>
                <img onClick={decreaseHour} src={downImage} alt='inc'></img>
            </div>
            <div className={styles.time}>
                <span>Minutes</span>
                <img onClick={increaseMinutes} src={upImage} alt='inc'></img>
                <span>{minutes}</span>
                <img onClick={decreaseMinutes} src={downImage} alt='inc'></img>
            </div>
            <div className={styles.time}>
                <span>Seconds</span>
                <img onClick={increaseSeconds} src={upImage} alt='inc'></img>
                <span>{seconds}</span>
                <img onClick={decreaseSeconds} src={downImage} alt='inc'></img>
            </div>
            <div>
                <button onClick={()=>{
                    setPlaying(true)
                }}>S<br></br>T<br></br>A<br></br>R<br></br>T</button>
            </div>
        </div>
    </div>
  )
}
