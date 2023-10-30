import React from 'react'
import { ProfileCard } from '../components/profile/ProfileCard';
import { WeatherCard } from '../components/weather/WeatherCard';
import { NewsCard } from '../components/news/NewsCard';
import styles from './HomePage.module.css';
import { NotesCard } from '../components/notes/NotesCard';
import { StopWatch } from '../components/stopwatch/StopWatch';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate()
  const next = (e) =>{
    navigate('/display')
  }
  return (
    <>
    <div className={styles.home}>
      <div>
      <div className={styles.leftSide}>
        <div>
        <ProfileCard></ProfileCard>
        <WeatherCard></WeatherCard>
        </div>
        <div>
        <NotesCard></NotesCard>
        </div>
      </div>
      <StopWatch></StopWatch>
      </div>
        <NewsCard></NewsCard>
    </div>
    <button onClick={next} className={styles.browse}>Browse</button>
    </>
  )
}