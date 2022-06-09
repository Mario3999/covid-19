import React from 'react'
import styles from './DashItem.module.scss'

const DashItem = () => {
  return (
    <div className={styles['DashItem-Container']}>
      <h2>Title</h2>
      <div>Info</div>
    </div>
  )
}

export default DashItem