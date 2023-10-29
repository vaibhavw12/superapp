import React, { useEffect, useState } from 'react'
// ,{useState,useEffect}
import styles from './WeatherCard.module.css'
import { Time } from '../time/Time'

export const WeatherCard = () => {

  let[data, setData] = useState('')
  useEffect(() => {
    fetch('https://api.weatherapi.com/v1/current.json?key=ff3ece23e25d4f359b755145232210&q=London')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // setData(data);
        setData("okay")
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching weather data: ', error);
      });
  },[])

  return (
    <div className={styles.weatherCard}>
    <Time></Time>
    <p>{data}</p>
    </div>
  )
}
