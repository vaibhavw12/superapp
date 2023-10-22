import React from 'react'
import { ProfileCard } from '../components/profile/ProfileCard';
import { WeatherCard } from '../components/weather/WeatherCard';
import { NewsCard } from '../components/news/NewsCard';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <div>
        <ProfileCard></ProfileCard>
        <WeatherCard></WeatherCard>
      </div>
        <NewsCard></NewsCard>
    </div>
  )
}
