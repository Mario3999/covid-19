import React from 'react'
import GlobalItem from '../GlobalItem/GlobalItem'
import styles from './GlobalContainer.module.scss'

const GlobalContainer = ({cases}) => {
  return (
    <div className={styles['GlobalContainer']}>
        <GlobalItem cases={cases} />
    </div>
  )
}

export default GlobalContainer