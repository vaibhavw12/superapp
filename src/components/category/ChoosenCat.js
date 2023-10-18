import React from 'react'
import styles from './ChoosenCat.module.css';

export const ChoosenCat = () => {
  return (
    <div className={styles.comp}>
      <div className={styles.content}>
        <span className={styles.appName}>Super app</span>
        <p className={styles.text}>
            Choose your <br></br> entertainment <br></br> category
        </p>
      </div>
    </div>
  )
}
