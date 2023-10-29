import React, { useState } from 'react'
import styles from './NotesCard.module.css'
export const NotesCard = () => {

    let [text, setText] = useState(JSON.parse(localStorage.getItem("text")))
    const handelchange = (e) =>{
        setText(e.target.value)
        localStorage.setItem("text",JSON.stringify(text))
    } 
  return (
    <div >
         <textarea className={styles.notesCard} name="text" placeholder="Type Notes ..." value={text} 
         onChange={handelchange}></textarea>
    </div>
  )
}
