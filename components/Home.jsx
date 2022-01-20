import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import decrease from '../utils/decrease'
import increase from '../utils/increase'

export default function Home() {
  const [value, setValue] = useState(0)

  const handleDecrease = () => {
    setValue(decrease(value))
  }

  const handleIncrease = () => {
    setValue(increase(value))
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Tesing 3</h1>
        <button id='decrease-btn' className={styles.button} onClick={handleDecrease}>-</button>
        <h1 id="value">{value}</h1>
        <button id='increase-btn' className={styles.button} onClick={handleIncrease}>+</button>
      </main>

    </div>
  )
}
