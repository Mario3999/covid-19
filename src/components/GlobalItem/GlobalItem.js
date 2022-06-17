import React from 'react'
import styles from './GlobalItem.module.scss'

const GlobalItem = ({cases}) => {
  return (
    <div className={styles['GlobalItem']}>
        <img className={styles['globe-img']} src={process.env.PUBLIC_URL + '/assets/img/globe.svg'} alt="Globe" />
        <h2>Global</h2>
        {/* <div>Deaths:{cases.data.Global.All.deaths}</div> */}
    </div>
  )
}

export default GlobalItem