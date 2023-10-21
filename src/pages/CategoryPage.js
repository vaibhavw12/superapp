import React from 'react'
// import { ChoosenCat } from '../components/category/ChoosenCat'
import { Catogries } from '../components/category/Catogries'
import styles from './CategoryPage.module.css';

export const Category = () => {
  return (
    <div className={styles.mainCon}>
        {/* <ChoosenCat></ChoosenCat> */}
        <Catogries></Catogries>
    </div>
  )
}
