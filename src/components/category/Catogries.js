import React from 'react'
import styles from './Catogries.module.css';

export const Catogries = () => {
  return (
    <div className={styles.comp}>
        <div className={styles.category}>
            <div onClick={(e)=>{
                console.log("action")
            }} className={styles.cat} id={styles.action}>Action
            <br></br> <img src='' alt='action'></img></div>
            <div className={styles.cat} id={styles.drama}>Drama</div>
            <div className={styles.cat} id={styles.romance}>Romance</div>
            <div className={styles.cat} id={styles.thriller}>Thriller</div>
            <div className={styles.cat} id={styles.western}>Western</div>
            <div className={styles.cat} id={styles.horror}>Horror</div>
            <div className={styles.cat} id={styles.fantasy}>Fantasy</div>
            <div className={styles.cat} id={styles.music}>Music</div>
            <div className={styles.cat} id={styles.fiction}>Fiction</div>
        </div>
        <div>
            <button>Next page</button>
        </div>
    </div>
  )
}
