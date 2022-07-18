import React from 'react'
import DashContainer from '../../../../components/DashContainer/DashContainer'
import Header from '../../../../components/Header/Header'
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div className={styles['App']}>
      <Header id={styles['header']} />
      <div id={styles['map-container']}>
        <div id='map'></div>
      </div>
      <DashContainer />
    </div>
  )
}

export default Home