import React,{useEffect,useState} from 'react'
import styles from './Time.module.css'
export const Time = () => {
    
    let[date, setDate] = useState('')
    let[time, setTime] = useState('')
    useEffect(()=>{
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
        const year = currentDate.getFullYear();
        const formattedDate = `${month}-${day}-${year}`;
        let hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;
        setDate(formattedDate)
        setTime(formattedTime)
    },[])

  return (
    <div className={styles.timeBox}>
        <span>{date}</span>
        <span>{time}</span>
    </div>
  )
}
