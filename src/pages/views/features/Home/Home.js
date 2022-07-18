import React from 'react'
import Header from '../../../../components/Header/Header'
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div className={styles['App']}>
      <Header />
      <div id='map'></div>
    </div>
  )
}

export default Home