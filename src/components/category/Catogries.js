import React, { useState } from 'react'
import styles from './Catogries.module.css';
import acionImage from "./image 2.png";
import dramaImage from "./image 3.png";
import romanceImage from "./image 4.png";
import thrillerImage from "./image 6.png";
import westernImage from "./image 7.png";
import horrorImage from "./image 8.png";
import fantasyImage from "./image 9.png";
import musicImage from "./image 10.png";
import fictionImage from "./image 11.png";
import { ChoosenCat } from './ChoosenCat';
import {useNavigate} from "react-router-dom"

const set = new Set();
export const Catogries = () => {

  let [value, setValue] = useState('')
  function select (act){
    set.add(act)
    setValue(act)
  }

  const navigate = useNavigate()
  function next (){
    if(set.size >= 3){
      let arr = Array.from(set)
      localStorage.setItem('items',arr)
      navigate('/content')
    } 
  }

  return (
    <>
      <ChoosenCat val={value} set={set}></ChoosenCat>
    <div className={styles.comp}>
        <div className={styles.category}>
            <div onClick={() => select('action')} className={styles.cat} id={styles.action}><span>Action</span>
            <br></br> <img src={acionImage} alt='action'></img></div>
            <div onClick={() => select('drama')}  className={styles.cat} id={styles.drama}><span>Drama</span>
            <br></br> <img src={dramaImage} alt='drama'></img></div>
            <div onClick={() => select('romance')}  className={styles.cat} id={styles.romance}><span>Romance</span>
            <br></br> <img src={romanceImage} alt='romance'></img></div>
            <div onClick={() => select('thriller')}  className={styles.cat} id={styles.thriller}><span>Thriller</span>
            <br></br> <img src={thrillerImage} alt='thriller'></img></div>
            <div onClick={() => select('western')}  className={styles.cat} id={styles.western}><span>Western</span>
            <br></br> <img src={westernImage} alt='western'></img></div>
            <div onClick={() => select('horror')}  className={styles.cat} id={styles.horror}><span>Horror</span>
            <br></br> <img src={horrorImage} alt='horror'></img></div>
            <div onClick={() => select('fantasy')}  className={styles.cat} id={styles.fantasy}><span>Fantasy</span>
            <br></br> <img src={fantasyImage} alt='fantasy'></img></div>
            <div onClick={() => select('music')}  className={styles.cat} id={styles.music}><span>Music</span>
            <br></br> <img src={musicImage} alt='music'></img></div>
            <div onClick={() => select('fiction')}  className={styles.cat} id={styles.fiction}><span>Fiction</span>
            <br></br> <img src={fictionImage} alt='fiction'></img></div>
        </div>
        <div>
            <button onClick={next} className={styles.nextButton}>Next Page</button>
        </div>
    </div>
    </>
  )
}
