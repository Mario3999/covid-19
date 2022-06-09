import React from 'react'
import styles from './DashContainer.module.scss'
import DashItem from '../DashItem/DashItem'

const DashContainer = () => {
  return (
    <div className={styles['DashContainer']}>
        <DashItem />
        <DashItem />
        <DashItem />
        <DashItem />
        <DashItem />
        <DashItem />
    </div>
  )
}

export default DashContainer