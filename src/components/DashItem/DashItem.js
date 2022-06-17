import React from 'react'
import styles from './DashItem.module.scss'

const DashItem = ({ title, deaths }) => {
  return (
    <div className={styles['DashItem-Container']}>
      <img className={styles['globe-img']} src={process.env.PUBLIC_URL + '/assets/img/globe.svg'} alt="Globe" />
      <h2>{title}</h2>
      {/* <div>Deaths:{cases.data.Global.All.deaths}</div> */}
      <div>Deaths:{deaths}</div>
    </div>
  )
}

export default DashItem