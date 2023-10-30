import React, { useEffect } from 'react'
import styles from './DisplayCard.module.css'

export const DisplayCard = () => {

  useEffect(()=>{
//     const url = 'https://unogs-unogs-v1.p.rapidapi.com/static/genres';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3dc5fc3d5bmshea49036ec010c6fp14b30ejsn60ccd0dffcc6',
// 		'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
// 	}
// };
// const fetchMovies = async () => {
//   await fetch(
//     `https://unogs-unogs-v1.p.rapidapi.com/static/genres`,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// };
// // fetchMovies();
    
  },[])
  
  return (
    <div className={styles.displayCard} >DisplayCard
    <h3>Api too many request</h3>

    </div>
  )
}
