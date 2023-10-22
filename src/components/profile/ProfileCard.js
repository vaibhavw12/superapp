import React from 'react'
import styles from './ProfileCard.module.css';
import profileImage from './image 14.png'

export const ProfileCard = () => {
    let userName = localStorage.getItem('userName')
    let name = localStorage.getItem('name')
    let email = localStorage.getItem('email')
    let arr = localStorage.getItem('items')
    arr = JSON.parse(arr);
  return (
    <div className={styles.profileCard}>
        <img className={styles.profileImg} src={profileImage} alt='profile'></img>
        <div className={styles.profileInfo}>
            <p>
                {name} <br></br>
                {email} <br></br>
                <span style={{fontSize:'40px', fontWeight:'600'}}>{userName}</span>
                <div className={styles.selectedItems}>
                {arr.map((element, index) => (
                <div className={styles.selectedItem} key={index}>{element}</div>
                ))}
                </div>
            </p>
        </div>
    </div>
  )
}
