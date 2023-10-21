import React,{useEffect, useRef, useState} from 'react'
import styles from './ChoosenCat.module.css';
// let count = 0
export const ChoosenCat = (props) => {
  
  // console.log(props.val)

  let [warning , setWarning] = useState()
  useEffect(()=>{
    setWarning('Minimum 3 category required')
    // if(props.set.size >= 3){
    //   console.log(props.set.size)
    //   setWarning()
    // }
  },[])

  const actionRef = useRef(null);
  const dramaRef = useRef(null);
  const thrillerRef = useRef(null);
  const romanceRef = useRef(null);
  const westernRef = useRef(null);
  const horrorRef = useRef(null);
  const fantasyRef = useRef(null);
  const musicRef = useRef(null);
  const fictionRef = useRef(null);

  if(props.val === 'action'){
    actionRef.current.style.display = 'block';
    actionRef.current.style.display = 'flex';
    actionRef.current.style.justifyContent = 'space-around';
    actionRef.current.style.alignItems = 'center';
  }else if(props.val === 'drama'){
    dramaRef.current.style.display = 'block';
    dramaRef.current.style.display = 'flex';
    dramaRef.current.style.justifyContent = 'space-around';
    dramaRef.current.style.alignItems = 'center';
  }else if(props.val === 'thriller'){
    thrillerRef.current.style.display = 'block';
    thrillerRef.current.style.display = 'flex';
    thrillerRef.current.style.justifyContent = 'space-around';
    thrillerRef.current.style.alignItems = 'center';
  }else if(props.val === 'romance'){
    romanceRef.current.style.display = 'block';
    romanceRef.current.style.display = 'flex';
    romanceRef.current.style.justifyContent = 'space-around';
    romanceRef.current.style.alignItems = 'center';
  }else if(props.val === 'western'){
    westernRef.current.style.display = 'block';
    westernRef.current.style.display = 'flex';
    westernRef.current.style.justifyContent = 'space-around';
    westernRef.current.style.alignItems = 'center';
  }else if(props.val === 'horror'){
    horrorRef.current.style.display = 'block';
    horrorRef.current.style.display = 'flex';
    horrorRef.current.style.justifyContent = 'space-around';
    horrorRef.current.style.alignItems = 'center';
  }else if(props.val === 'fantasy'){
    fantasyRef.current.style.display = 'block';
    fantasyRef.current.style.display = 'flex';
    fantasyRef.current.style.justifyContent = 'space-around';
    fantasyRef.current.style.alignItems = 'center';
  }else if(props.val === 'music'){
    musicRef.current.style.display = 'block';
    musicRef.current.style.display = 'flex';
    musicRef.current.style.justifyContent = 'space-around';
    musicRef.current.style.alignItems = 'center';
  }else if(props.val === 'fiction'){
    fictionRef.current.style.display = 'block';
    fictionRef.current.style.display = 'flex';
    fictionRef.current.style.justifyContent = 'space-around';
    fictionRef.current.style.alignItems = 'center';
  }

  const close = (opt)=>{
    
    if(opt === 'action'){
      actionRef.current.style.display = 'none';
    }else if(opt === 'drama'){
      dramaRef.current.style.display = 'none';
    }else if(opt === 'thriller'){
      thrillerRef.current.style.display = 'none';
    }else if(opt === 'romance'){
      romanceRef.current.style.display = 'none';
    }else if(opt === 'western'){
      westernRef.current.style.display = 'none';
    }else if(opt === 'horror'){
      horrorRef.current.style.display = 'none';
    }else if(opt === 'fantasy'){
      fantasyRef.current.style.display = 'none';
    }else if(opt === 'music'){
      musicRef.current.style.display = 'none';
    }else if(opt === 'fiction'){
      fictionRef.current.style.display = 'none';
    }

    // if(props.set.size >= 3){
    //   setWarning()
    // }else if(props.set.size < 3){
    //   setWarning('Minimum 3 category required')
    // }
    props.set.delete(opt)
  }
  
  return (
    <div className={styles.comp}>
      <div className={styles.content}>
        <span className={styles.appName}>Super app</span><br></br><br></br><br></br>
        <span className={styles.text}>
            Choose your entertainment category <br></br>
        </span>
        <p style={{color:'rgba(255, 0, 0, 1)'}}>{warning}</p>
        <div className={styles.userChoice}> 
        {/* <p>{count > 4 ? <p>right</p> : <p>wrong</p>}</p> */}
          <p id={styles.action} className={styles.catCh} ref={actionRef}>Action<button onClick={() =>close('action')} className={styles.btnClose}>X</button></p>
          <p id={styles.drama} className={styles.catCh} ref={dramaRef}>Drama<button onClick={() =>close('drama')} className={styles.btnClose}>X</button></p>

          <p id={styles.romance} className={styles.catCh} ref={romanceRef}>Romance<button onClick={() =>close('romance')}  className={styles.btnClose}>X</button></p>
          <p id={styles.thriller} className={styles.catCh} ref={thrillerRef}>Thriller<button onClick={() =>close('thriller')} className={styles.btnClose}>X</button></p>

          <p id={styles.western} className={styles.catCh} ref={westernRef}>Western<button onClick={() =>close('western')} className={styles.btnClose}>X</button></p>
          <p id={styles.horror} className={styles.catCh} ref={horrorRef}>Horror<button onClick={() =>close('horror')} className={styles.btnClose}>X</button></p>

          <p id={styles.fantasy} className={styles.catCh} ref={fantasyRef}>Fantasy<button onClick={() =>close('fantasy')} className={styles.btnClose}>X</button></p>
          <p id={styles.music} className={styles.catCh} ref={musicRef}>Music<button onClick={() =>close('music')} className={styles.btnClose}>X</button></p>

          <p id={styles.fiction} className={styles.catCh} ref={fictionRef}>Fiction<button onClick={() =>close('fiction')} className={styles.btnClose}>X</button></p>
          
        </div>
      </div>
    </div>
  )
}
